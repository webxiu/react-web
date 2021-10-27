/**
 * @Author yejiang1015
 * @Date 2020-12-28 10:37:32
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2021-01-05 11:38:45
 * @Message 枚举证件类型
 */

export const IDType = [
  { text: '身份证号', value: 1 },
  { text: '香港身份证号', value: 33 },
  { text: '香港回乡证号', value: 36 },
  { text: '澳门身份证号', value: 34 },
  { text: '澳门回乡证号', value: 37 },
  { text: '台湾身份证号', value: 35 },
  { text: '台湾回乡证号', value: 38 },
  { text: '港澳通行证号', value: 18 },
  { text: '台湾通行证号', value: 19 },
  { text: '护照号', value: 20 },
  { text: '外国人护照号', value: 21 }
];

export default IDType;

/**
 * @param value 证件类型id
 * @param addEndStr 是否添加 xxx号 字符
 * @Message 和证件类型一起显示，不显示 号，单独显示，则显示号
 * @Eg 证件类型：xxx号
 * @Eg xxx号：xxx
 */
export const transfromIdType = (value: number, addEndStr = true): string => {
  if (!addEndStr) {
    const _string = IDType.find((val) => Number(value) === val.value)?.text || '';
    return _string.replace(/号$/, '');
  }
  return IDType.find((val) => Number(value) === val.value)?.text || '';
};

/** 上传文档类型 */
export const uploadDocType = ['.doc', '.docx', '.txt', '.pdf'];
