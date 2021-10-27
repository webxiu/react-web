export enum SendCode {
  Default = 0,
  Wrongful = -1,
  ErrId = 1,
  Illegal = 2,
  NoData = 3,
  IsData = 4,
  Other = 99
}
export enum SendMsg {
  Default = 'success',
  Wrongful = '无效的 URI',
  ErrId = '主键不合法',
  Illegal = '参数不合法',
  NoData = '数据不存在',
  IsData = '数据已存在',
  Other = '其他异常'
}

export type SendCodeType = SendCode | number;
export type SendMsgType = SendMsg | string;
export type SendType<T = unknown> = {
  code: SendCodeType;
  data: T;
  message: SendMsgType;
};

export interface BaseServeResponse<T> {
  hasError: boolean;
  errorId: string;
  errorDesc: string;
  data: T;
}

/** select 周期 */
export type CycleTabsTypes = 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR';
/** select 周期 */
export type CycleTypes = 'ALL_TIME' | 'LAST_WEEK' | 'LAST_MONTH' | 'LAST_YEAR';
/** select 跨领域 */
export type DimensionTypes = 'FIELD_COUNT' | 'DOCUMENT_COUNT';
/** select 文档领域 */
export type DocumentFieldTypes = 'ALL_FIELD' | 'ONE_FIELD' | 'TWO_FIELD';
/** 人员地域分布 户籍地 居住地 */
export type RegionalDistributionTypes = 'RESIDENTIAL_ADDRESS' | 'PERMANENT_ADDRESS';
