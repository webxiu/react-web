export enum ResponseErrorDesc {
  UNMARSHAL_ERROR = '数据解析失败',
  REQUEST_DATA_ERROR = '请求数据错误',
  DATABASE_ERROR = '数据库操作失败',
  PEOPLE_NOT_EXIST = '人员不存在',
  DOCUMENT_NOT_EXIST = '文档不存在',
  UPLOAD_FILE_DATA_EMPTY = '上传错误，文件为空',
  NAME_NOT_FOUND = '找不到姓名',
  ALGO_ERROR = '算法错误',
  OTHER_ERROR = '其它错误',
  TOKEN_EXPIRED = '令牌过期',
  TOKEN_NOT_VALID_YET = '令牌未激活',
  TOKEN_INVALID = '无效令牌',
  TOKEN_GET_FAIL = '获取令牌失败',
  ACCOUNT_NOT_EXIST = '账号不存在',
  PASSWORD_WRONG = '密码错误',
  ACCOUNT_OR_PASSWORD_WRONG = '账号或密码错误',
  VERIFY_FAIL = '请求校验失败',
  ROLE_NOT_EXIST = '角色不存在',
  TAG_EXIST_CHILDREN = '标签存在子级'
}

/** 音频分析- 超时时间设置(10分钟) */
export const timeout: number = 1000 * 60 * 10;
