const fs = require('fs');
const path = require('path');
const servicePath = path.join(process.cwd(), 'src/service/index.ts');
const YAML = require('yamljs');
const axios = require('axios');
let findInner = `
/**
 * @readOnly {只读， 脚本更改}
 * @Message {来源} {npm run codec:service}
 * @Swagger 自动生成接口请求信息
 * 
*/

import axiosInstance, { AxiosRequestConfig, AppAxiosRequestConfig, InjectAbort } from '@/axios';

import { BaseServeResponse } from '@/Types/BaseTypes';
`;

let ItemInterface = ``;

const handleInterfaceString = (properties, schemasObject) => {
  let resString = ``;
  for (const [key, value] of Object.entries(properties)) {
    if (value.type === 'array') {
      /**
       *   type: 'array',
       *   example: null,
       *   items: { '$ref': '#/components/schemas/DocumentLibraryDocumentPeopleInfo' },
       *   description: '涉及人员信息列表'
       */
      resString += `
    /** ${value.description} */
    ${key}: ${handleArrayInterface(key, value, schemasObject, 'array')};`;
    } else if (!value.type && value['$ref']) {
      /**
       *   '$ref': '#/components/schemas/DocumentLibraryInvolveFieldInfo'
       *   description: '涉及领域'
       */
      resString += `
    /** ${value.description} */
    ${key}: ${handleArrayInterface(key, { type: 'array', items: { $ref: value['$ref'], description: value.description } }, schemasObject, 'object')};`;
    } else {
      resString += `
    /** ${value.description} */
    ${key}: ${value.type};`;
    }
    // resString += `
    // /** ${value.description} */
    // ${key}: ${value.type === 'array' ? handleArrayInterface(key, value, schemasObject) : value.type};`;
  }
  return resString;
};

const handleArrayInterface = (key, value, schemasObject, extendsType = 'array') => {
  // console.log(key);
  key = key
    .split('_')
    .map((item) => {
      item = item.split('').map((k, i) => {
        if (i === 0) {
          return k.toLocaleUpperCase();
        }
        return k;
      });
      item = item.join('');
      return item;
    })
    .join('');
  if (value.items.$ref) {
    const schemas = value.items.$ref.split('#/components/schemas/')[1];
    let properties = schemasObject[schemas].properties;
    let _string = ``;
    for (const [key, val] of Object.entries(properties)) {
      _string += `
  /** ${val.description} */
  ${key}: ${val.type === 'array' ? handleArrayInterface(key, val, schemasObject) : val.type};`;
    }
    const itemInterface = `\nexport interface ${key}ItemTypes {${_string}\n}`;
    ItemInterface += itemInterface;
    if (extendsType === 'array') {
      return `${key}ItemTypes[]`;
    } else {
      return `${key}ItemTypes`;
    }
  } else {
    return `${value.items.type}[]`;
  }
};

const request = (name, value, schemasObject) => {
  let schemas = '';
  try {
    schemas = value.requestBody.content['application/json'].schema.$ref.split('#/components/schemas/')[1];
  } catch (error) {
    return `export interface ${name}$$Request {}`;
  }
  if (!schemas) {
    return `export interface ${name}$$Request {}`;
  }

  let properties = schemasObject[schemas].properties;
  let reqString = ``;
  for (const [key, value] of Object.entries(properties)) {
    reqString += `
    /** ${value.description} */
    ${key}: ${value.type === 'array' ? handleArrayInterface(key, value, schemasObject) : value.type};`;
  }
  const string = `export interface ${name}$$Request {${reqString}
}`;
  return string;
};
const response = (name, value, schemasObject) => {
  let schemas = '';
  try {
    schemas = value.responses['200'].content['application/json'].schema.$ref.split('#/components/schemas/')[1];
  } catch (error) {
    return `export interface ${name}$$Response {}`;
  }
  if (!schemas) {
    return `export interface ${name}$$Response {}`;
  }

  try {
    schemas = schemasObject[schemas].properties.data.$ref.split('#/components/schemas/')[1];
  } catch (error) {
    return `export interface ${name}$$Response {}`;
  }
  let properties = schemasObject[schemas].properties;
  let resString = handleInterfaceString(properties, schemasObject);
  return `export interface ${name}$$Response {${resString}
}`;
};

const call = (methods, __name) => {
  if (methods === 'get') {
    return `InjectAbort(${__name}, config))`;
  }
  return ` request, InjectAbort(${__name}, config))`;
};

axios.request({ url: 'http://192.168.0.75:6005/doc/swagger', method: 'get' }).then(({ data }) => {
  nativeObject = YAML.parse(data);
  for (const [key, value] of Object.entries(nativeObject.paths)) {
    let methods = value.get ? 'get' : value.post ? 'post' : 'all';
    const names = key.split('/');
    const __name = names[names.length - 1];
    // console.log(`${key}: ${value}`, value);
    // console.log(value[methods]);

    const getTemp = `
export const ${__name} = (config: AppAxiosRequestConfig<${__name}$$Request>) => {
  return axiosInstance.${methods}<BaseServeResponse<${__name}$$Response>>('${key}', ${call(methods, __name)};
};
    `;
    const postTemp = `
export const ${__name} = (request: ${__name}$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.${methods}<BaseServeResponse<${__name}$$Response>>('${key}', ${call(methods, __name)};
};
    `;

    findInner += `
/** ========================= **************** ${__name} ****************** ========================= */
/** ${value[methods].description} 请求参数 */
${request(__name, value[methods], nativeObject.components.schemas)}
/** ${value[methods].description} 响应参数*/
${response(__name, value[methods], nativeObject.components.schemas)}
/** ${value[methods].description} */
${methods === 'get' ? getTemp : postTemp}
`;
  }
  fs.writeFileSync(servicePath, `${findInner}\n${ItemInterface}`.replace(/integer/g, 'number').replace(/array/g, '[]'), { encoding: 'utf-8' });
});
