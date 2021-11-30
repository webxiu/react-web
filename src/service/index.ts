
/**
 * @readOnly {只读， 脚本更改}
 * @Message {来源} {npm run codec:service}
 * @Swagger 自动生成接口请求信息
 * 
*/

import axiosInstance, { AxiosRequestConfig, AppAxiosRequestConfig, InjectAbort } from '@/axios';

import { BaseServeResponse } from '@/Types/BaseTypes';

/** ========================= **************** CheckFileExistApi ****************** ========================= */
/** 请求检查文件是否已经存在，返回存在的文件 请求参数 */
export interface CheckFileExistApi$$Request {
    /** 文件名列表 */
    file_name_list: string[];
}
/** 请求检查文件是否已经存在，返回存在的文件 响应参数*/
export interface CheckFileExistApi$$Response {
    /** 已经存在的文件名列表 */
    file_name_list: string[];
}
/** 请求检查文件是否已经存在，返回存在的文件 */

export const CheckFileExistApi = (request: CheckFileExistApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<CheckFileExistApi$$Response>>('/v1/CheckFileExistApi',  request, InjectAbort(CheckFileExistApi, config));
};
    

/** ========================= **************** GetWaitAnalysisDocumentNumApi ****************** ========================= */
/** 获取未完成分析文档的数目 请求参数 */
export interface GetWaitAnalysisDocumentNumApi$$Request {}
/** 获取未完成分析文档的数目 响应参数*/
export interface GetWaitAnalysisDocumentNumApi$$Response {
    /** 未完成分析的文档数目 */
    number: number;
    /** 分析出错的文档列表 */
    document_list: string[];
}
/** 获取未完成分析文档的数目 */

export const GetWaitAnalysisDocumentNumApi = (request: GetWaitAnalysisDocumentNumApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetWaitAnalysisDocumentNumApi$$Response>>('/v1/GetWaitAnalysisDocumentNumApi',  request, InjectAbort(GetWaitAnalysisDocumentNumApi, config));
};
    

/** ========================= **************** AddAnalysisFileApi ****************** ========================= */
/** 添加文件任务到算法分析 请求参数 */
export interface AddAnalysisFileApi$$Request {
    /** 文件id */
    file_id: string;
}
/** 添加文件任务到算法分析 响应参数*/
export interface AddAnalysisFileApi$$Response {}
/** 添加文件任务到算法分析 */

export const AddAnalysisFileApi = (request: AddAnalysisFileApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AddAnalysisFileApi$$Response>>('/v1/AddAnalysisFileApi',  request, InjectAbort(AddAnalysisFileApi, config));
};
    

/** ========================= **************** GetFileStatusApi ****************** ========================= */
/** 获取文件的算法分析状态 请求参数 */
export interface GetFileStatusApi$$Request {
    /** 文件id */
    file_id: string;
}
/** 获取文件的算法分析状态 响应参数*/
export interface GetFileStatusApi$$Response {
    /** 状态 */
    nlp_status: string;
}
/** 获取文件的算法分析状态 */

export const GetFileStatusApi = (request: GetFileStatusApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetFileStatusApi$$Response>>('/v1/GetFileStatusApi',  request, InjectAbort(GetFileStatusApi, config));
};
    

/** ========================= **************** BatchDeleteDocumentApi ****************** ========================= */
/** 批量删除文档 请求参数 */
export interface BatchDeleteDocumentApi$$Request {
    /** 待删除文档id列表 */
    document_id_list: string[];
}
/** 批量删除文档 响应参数*/
export interface BatchDeleteDocumentApi$$Response {
    /** 删除失败文档id列表 */
    false_document_id_list: string[];
}
/** 批量删除文档 */

export const BatchDeleteDocumentApi = (request: BatchDeleteDocumentApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<BatchDeleteDocumentApi$$Response>>('/v1/BatchDeleteDocumentApi',  request, InjectAbort(BatchDeleteDocumentApi, config));
};
    

/** ========================= **************** DocumentBasicInfoApi ****************** ========================= */
/** 文档库详情页/文档基本信息 请求参数 */
export interface DocumentBasicInfoApi$$Request {
    /** 文档id */
    document_id: string;
}
/** 文档库详情页/文档基本信息 响应参数*/
export interface DocumentBasicInfoApi$$Response {
    /** 文档名称 */
    document_name: string;
    /** 文档标题 */
    document_title: string;
    /** 文档id */
    document_id: string;
    /** 涉及领域列表 */
    involve_field_list: InvolveFieldListItemTypes[];
    /** 业务归属大队 */
    belong_brigade: string;
    /** 关键词 */
    key_word: string;
    /** 导入时间 */
    create_time: number;
    /** 提交时间 */
    commit_time: number;
}
/** 文档库详情页/文档基本信息 */

export const DocumentBasicInfoApi = (request: DocumentBasicInfoApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<DocumentBasicInfoApi$$Response>>('/v1/DocumentBasicInfoApi',  request, InjectAbort(DocumentBasicInfoApi, config));
};
    

/** ========================= **************** DocumentDetailsApi ****************** ========================= */
/** 文档详情，返回实体词和关键词，文档内容通过下载文档获取 请求参数 */
export interface DocumentDetailsApi$$Request {
    /** 文档id */
    document_id: string;
}
/** 文档详情，返回实体词和关键词，文档内容通过下载文档获取 响应参数*/
export interface DocumentDetailsApi$$Response {
    /** 人名，多个人名中间用逗号分隔 */
    people_name_list: string[];
    /** 身份证号 */
    id_number_list: string[];
    /** 手机号码 */
    phone_number_list: string[];
    /** 地名 */
    address_list: string[];
    /** 日期 */
    date_list: string[];
    /** 机构团体名 */
    organization_list: string[];
    /** 其他证件号 */
    other_id_number_list: string[];
    /** 社交媒体账号 */
    media_account_list: string[];
    /** 银行卡号 */
    bank_card_number_list: string[];
    /** 邮箱 */
    e_mail_number_list: string[];
    /** 文化程度 */
    education_list: string[];
    /** 政治面貌 */
    political_identity_list: string[];
    /** 关键词 */
    key_word_list: string[];
    /** 人员关系 */
    relationship_list: string[];
    /** 文本 */
    text: string;
    /** 涉及领域 */
    involve_field_list: InvolveFieldListItemTypes[];
}
/** 文档详情，返回实体词和关键词，文档内容通过下载文档获取 */

export const DocumentDetailsApi = (request: DocumentDetailsApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<DocumentDetailsApi$$Response>>('/v1/DocumentDetailsApi',  request, InjectAbort(DocumentDetailsApi, config));
};
    

/** ========================= **************** ListDocumentApi ****************** ========================= */
/** 文档库列表 请求参数 */
export interface ListDocumentApi$$Request {
    /** 文档名 */
    file_name: string;
    /** 文档标题 */
    title: string;
    /** 涉及领域 */
    field: string;
    /** 涉及人员 */
    people: string;
    /** 关键词 */
    key_word: string;
    /** 归属大队 */
    belong_brigade: string;
    /** 导入时间-开始 */
    begin_time: number;
    /** 导入时间-结束 */
    end_time: number;
    /** 提交时间-开始 */
    commit_begin_time: number;
    /** 提交时间-结束 */
    commit_end_time: number;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 文档库列表 响应参数*/
export interface ListDocumentApi$$Response {
    /** 文档信息列表 */
    document_info_list: DocumentInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 文档库列表 */

export const ListDocumentApi = (request: ListDocumentApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListDocumentApi$$Response>>('/v1/ListDocumentApi',  request, InjectAbort(ListDocumentApi, config));
};
    

/** ========================= **************** ListDocumentPeopleApi ****************** ========================= */
/** 文档涉及人员信息列表 请求参数 */
export interface ListDocumentPeopleApi$$Request {
    /** 文档id */
    document_id: string;
}
/** 文档涉及人员信息列表 响应参数*/
export interface ListDocumentPeopleApi$$Response {
    /** 涉及人员信息列表 */
    document_people_info_list: DocumentPeopleInfoListItemTypes[];
}
/** 文档涉及人员信息列表 */

export const ListDocumentPeopleApi = (request: ListDocumentPeopleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListDocumentPeopleApi$$Response>>('/v1/ListDocumentPeopleApi',  request, InjectAbort(ListDocumentPeopleApi, config));
};
    

/** ========================= **************** GetTextAnalysisApi ****************** ========================= */
/** 文本输入智能分析 请求参数 */
export interface GetTextAnalysisApi$$Request {
    /** 文本 */
    text: string;
}
/** 文本输入智能分析 响应参数*/
export interface GetTextAnalysisApi$$Response {
    /** 实体和关键词信息 */
    document_details_info: DocumentDetailsInfoItemTypes;
    /** 涉及领域 */
    involve_field_info: InvolveFieldInfoItemTypes;
    /** 涉及人员信息列表 */
    document_people_info_list: DocumentPeopleInfoListItemTypes[];
    /** 关系图谱 */
    diagram_info: DiagramInfoItemTypes;
}
/** 文本输入智能分析 */

export const GetTextAnalysisApi = (request: GetTextAnalysisApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetTextAnalysisApi$$Response>>('/v1/GetTextAnalysisApi',  request, InjectAbort(GetTextAnalysisApi, config));
};
    

/** ========================= **************** ListPeopleApi ****************** ========================= */
/** 人员库列表 请求参数 */
export interface ListPeopleApi$$Request {
    /** 证件号 */
    main_identity_number: string;
    /** 证件类型 */
    main_identity_type: number;
    /** 姓名 */
    name: string;
    /** 性别 */
    gender: string;
    /** 民族 */
    nation: string;
    /** 涉及领域 */
    field: string;
    /** 手机号码 */
    phone_number: string;
    /** 户籍地 */
    permanent_address: string;
    /** 居住地 */
    residential_address: string;
    /** 导入时间-开始 */
    begin_time: number;
    /** 导入时间-结束 */
    end_time: number;
    /** 归属业务大队 */
    group_id: string;
    /** 标签 */
    tag: string;
    /** 最新文档时间-开始 */
    lately_begin_time: number;
    /** 最新文档时间-结束 */
    lately_end_time: number;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 人员库列表 响应参数*/
export interface ListPeopleApi$$Response {
    /** 人员信息列表 */
    people_info_list: PeopleInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 人员库列表 */

export const ListPeopleApi = (request: ListPeopleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListPeopleApi$$Response>>('/v1/ListPeopleApi',  request, InjectAbort(ListPeopleApi, config));
};
    

/** ========================= **************** ListPeopleDocumentApi ****************** ========================= */
/** 人员库详情，查看相关文档弹窗 请求参数 */
export interface ListPeopleDocumentApi$$Request {
    /** 文档id列表 */
    document_id_list: string[];
}
/** 人员库详情，查看相关文档弹窗 响应参数*/
export interface ListPeopleDocumentApi$$Response {
    /** 文档信息列表 */
    document_info_list: DocumentInfoListItemTypes[];
}
/** 人员库详情，查看相关文档弹窗 */

export const ListPeopleDocumentApi = (request: ListPeopleDocumentApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListPeopleDocumentApi$$Response>>('/v1/ListPeopleDocumentApi',  request, InjectAbort(ListPeopleDocumentApi, config));
};
    

/** ========================= **************** PeopleBasicInfoApi ****************** ========================= */
/** 人员库详情/人员基本信息 请求参数 */
export interface PeopleBasicInfoApi$$Request {
    /** 证件号 */
    main_identity_number: string;
}
/** 人员库详情/人员基本信息 响应参数*/
export interface PeopleBasicInfoApi$$Response {
    /** 证件号 */
    main_identity_number: string;
    /** 证件类型 */
    main_identity_type: number;
    /** 身份证号 */
    id_number: string;
    /** 姓名列表 */
    name_list: string[];
    /** 绰号列表 */
    assumed_name_list: AssumedNameListItemTypes[];
    /** 英文名列表 */
    foreign_name_list: ForeignNameListItemTypes[];
    /** 性别 */
    gender: string;
    /** 民族 */
    nation: string;
    /** 手机号码列表 */
    phone_number_info_list: PhoneNumberInfoListItemTypes[];
    /** 户籍地信息列表 */
    permanent_address_info_list: PermanentAddressInfoListItemTypes[];
    /** 居住地信息列表 */
    residential_address_info_list: ResidentialAddressInfoListItemTypes[];
    /** 文化程度 */
    education: string;
    /** 政治面貌 */
    political_identity: string;
    /** 银行卡号列表 */
    bank_card_number_list: BankCardNumberListItemTypes[];
    /** 邮箱列表 */
    email_number_list: EmailNumberListItemTypes[];
    /** 港澳通行证列表 */
    hk_mc_card_list: HkMcCardListItemTypes[];
    /** 台湾通行证列表 */
    tai_wan_card_list: TaiWanCardListItemTypes[];
    /** 护照号码列表 */
    passport_card_list: PassportCardListItemTypes[];
    /** 外国人护照号列表 */
    foreigner_passport_card_list: ForeignerPassportCardListItemTypes[];
    /** 境外身份证号列表 */
    foreigner_id_number_list: ForeignerIdNumberListItemTypes[];
    /** 香港身份证号列表 */
    hk_id_number_list: HkIdNumberListItemTypes[];
    /** 澳门身份证号列表 */
    mc_id_number_list: McIdNumberListItemTypes[];
    /** 台湾身份证号列表 */
    tw_id_number_list: TwIdNumberListItemTypes[];
    /** 香港回乡证号列表 */
    hk_return_home_card_list: HkReturnHomeCardListItemTypes[];
    /** 澳门回乡证号列表 */
    mc_return_home_card_list: McReturnHomeCardListItemTypes[];
    /** 台湾回乡证号列表 */
    tw_return_home_card_list: TwReturnHomeCardListItemTypes[];
    /** QQ号列表 */
    qq_number_list: QqNumberListItemTypes[];
    /** 微信号列表 */
    wei_xin_number_list: WeiXinNumberListItemTypes[];
    /** Twitter号列表 */
    twitter_number_list: TwitterNumberListItemTypes[];
    /** 微信昵称 */
    wei_xin_nickname: WeiXinNicknameItemTypes[];
    /** 籍贯 */
    native_place: NativePlaceItemTypes[];
    /** 首次导入时间 */
    first_create_time: number;
    /** 最后导入时间 */
    end_create_time: number;
    /** 业务所属大队 */
    group_list: string[];
    /** 标签 */
    tag_list: string[];
    /** 最新文档时间 */
    lately_time: number;
    /** 人员简介 */
    introduction: string;
}
/** 人员库详情/人员基本信息 */

export const PeopleBasicInfoApi = (request: PeopleBasicInfoApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleBasicInfoApi$$Response>>('/v1/PeopleBasicInfoApi',  request, InjectAbort(PeopleBasicInfoApi, config));
};
    

/** ========================= **************** PeopleDocumentAnalysisApi ****************** ========================= */
/** 人员库详情/文档数据分析 请求参数 */
export interface PeopleDocumentAnalysisApi$$Request {
    /** 证件号 */
    main_identity_number: string;
}
/** 人员库详情/文档数据分析 响应参数*/
export interface PeopleDocumentAnalysisApi$$Response {
    /** 涉及文档数量 */
    involve_document_num: InvolveDocumentNumItemTypes;
    /** 文档涵盖时间范围 */
    document_date_range_start: number;
    /** 文档涵盖时间范围 */
    document_date_range_end: number;
    /** 涉及领域信息列表 */
    involve_field_info_list: InvolveFieldInfoListItemTypes[];
    /** 一级领域统计 */
    first_field_count: number;
    /** 出现在同个文档的人员 */
    relevant_people_info_list: RelevantPeopleInfoListItemTypes[];
}
/** 人员库详情/文档数据分析 */

export const PeopleDocumentAnalysisApi = (request: PeopleDocumentAnalysisApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleDocumentAnalysisApi$$Response>>('/v1/PeopleDocumentAnalysisApi',  request, InjectAbort(PeopleDocumentAnalysisApi, config));
};
    

/** ========================= **************** PeopleRelationDiagramApi ****************** ========================= */
/** 人员关系图 请求参数 */
export interface PeopleRelationDiagramApi$$Request {
    /** 证件号 */
    main_identity_number: string;
    /** 层级 enum: LEVEL_TWO, LEVEL_THREE, LEVEL_ALL */
    level: string;
    /** 展示模式 ALL(全部), RELATION(有人物关系的) */
    mode: string;
}
/** 人员关系图 响应参数*/
export interface PeopleRelationDiagramApi$$Response {
    /** 人员列表 */
    people_list: PeopleListItemTypes[];
    /** 所有父级信息 */
    father_people: FatherPeopleItemTypes[];
    /** 目标人员文档信息 */
    document_brief_info: DocumentBriefInfoItemTypes[];
}
/** 人员关系图 */

export const PeopleRelationDiagramApi = (request: PeopleRelationDiagramApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleRelationDiagramApi$$Response>>('/v1/PeopleRelationDiagramApi',  request, InjectAbort(PeopleRelationDiagramApi, config));
};
    

/** ========================= **************** PeopleRelationExternalApi ****************** ========================= */
/** 人员关系对外接口(星火) 请求参数 */
export interface PeopleRelationExternalApi$$Request {
    /** 证件号 */
    main_identity_number: string;
}
/** 人员关系对外接口(星火) 响应参数*/
export interface PeopleRelationExternalApi$$Response {
    /** 子级人员列表 */
    child_people_list: ChildPeopleListItemTypes[];
}
/** 人员关系对外接口(星火) */

export const PeopleRelationExternalApi = (request: PeopleRelationExternalApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleRelationExternalApi$$Response>>('/v1/PeopleRelationExternalApi',  request, InjectAbort(PeopleRelationExternalApi, config));
};
    

/** ========================= **************** PeopleInfoModifyApi ****************** ========================= */
/** 人员信息修改 请求参数 */
export interface PeopleInfoModifyApi$$Request {
    /** 人员id */
    main_identity_number: string;
    /** 信息修改列表 */
    modify_list: ModifyListItemTypes[];
}
/** 人员信息修改 响应参数*/
export interface PeopleInfoModifyApi$$Response {}
/** 人员信息修改 */

export const PeopleInfoModifyApi = (request: PeopleInfoModifyApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleInfoModifyApi$$Response>>('/v1/PeopleInfoModifyApi',  request, InjectAbort(PeopleInfoModifyApi, config));
};
    

/** ========================= **************** GetPeopleApi ****************** ========================= */
/** 星火获取人员列表 请求参数 */
export interface GetPeopleApi$$Request {
    /** IsExcel(有表格的人员)，NoExcel(无表格人员) */
    people_type: string;
    /** 开始时间(时间戳，毫秒) */
    begin_time: number;
    /** 结束时间 */
    end_time: number;
}
/** 星火获取人员列表 响应参数*/
export interface GetPeopleApi$$Response {
    /** 人员信息列表 */
    people_info_list: PeopleInfoListItemTypes[];
}
/** 星火获取人员列表 */

export const GetPeopleApi = (request: GetPeopleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetPeopleApi$$Response>>('/v1/GetPeopleApi',  request, InjectAbort(GetPeopleApi, config));
};
    

/** ========================= **************** BatchQueryPersonApi ****************** ========================= */
/** 批量查询人员 请求参数 */
export interface BatchQueryPersonApi$$Request {
    /** 批量查询表格id */
    file_id: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 批量查询人员 响应参数*/
export interface BatchQueryPersonApi$$Response {
    /** 人员信息列表 */
    people_info_list: PeopleInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 批量查询人员 */

export const BatchQueryPersonApi = (request: BatchQueryPersonApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<BatchQueryPersonApi$$Response>>('/v1/BatchQueryPersonApi',  request, InjectAbort(BatchQueryPersonApi, config));
};
    

/** ========================= **************** PingApi ****************** ========================= */
/** 检查网络状态 请求参数 */
export interface PingApi$$Request {}
/** 检查网络状态 响应参数*/
export interface PingApi$$Response {}
/** 检查网络状态 */

export const PingApi = (request: PingApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PingApi$$Response>>('/v1/PingApi',  request, InjectAbort(PingApi, config));
};
    

/** ========================= **************** AllPeopleCountApi ****************** ========================= */
/** 跨领域Top20人员 请求参数 */
export interface AllPeopleCountApi$$Request {
    /** 时间 enum:LAST_WEEK; LAST_MONTH; LAST_YEAR; ALL_TIME */
    time: string;
    /** 统计维度 enum:FIELD_COUNT; DOCUMENT_COUNT */
    dimension: string;
}
/** 跨领域Top20人员 响应参数*/
export interface AllPeopleCountApi$$Response {
    /** 人员列表 */
    people_list: PeopleListItemTypes[];
}
/** 跨领域Top20人员 */

export const AllPeopleCountApi = (request: AllPeopleCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AllPeopleCountApi$$Response>>('/v1/AllPeopleCountApi',  request, InjectAbort(AllPeopleCountApi, config));
};
    

/** ========================= **************** DocumentPeopleCountApi ****************** ========================= */
/** 文档和人员数最多的top20领域 请求参数 */
export interface DocumentPeopleCountApi$$Request {
    /** 时间 enum:LAST_WEEK; LAST_MONTH; LAST_YEAR; ALL_TIME */
    time: string;
}
/** 文档和人员数最多的top20领域 响应参数*/
export interface DocumentPeopleCountApi$$Response {
    /** 文档和人员统计数据 */
    data_list: DataListItemTypes[];
}
/** 文档和人员数最多的top20领域 */

export const DocumentPeopleCountApi = (request: DocumentPeopleCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<DocumentPeopleCountApi$$Response>>('/v1/DocumentPeopleCountApi',  request, InjectAbort(DocumentPeopleCountApi, config));
};
    

/** ========================= **************** FieldPeopleCountApi ****************** ========================= */
/** 各领域出现频率最高的top20人员 请求参数 */
export interface FieldPeopleCountApi$$Request {
    /** 领域 */
    field: string;
    /** 时间 enum:LAST_WEEK; LAST_MONTH; LAST_YEAR; ALL_TIME */
    time: string;
}
/** 各领域出现频率最高的top20人员 响应参数*/
export interface FieldPeopleCountApi$$Response {
    /** 人员列表 */
    people_list: PeopleListItemTypes[];
}
/** 各领域出现频率最高的top20人员 */

export const FieldPeopleCountApi = (request: FieldPeopleCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<FieldPeopleCountApi$$Response>>('/v1/FieldPeopleCountApi',  request, InjectAbort(FieldPeopleCountApi, config));
};
    

/** ========================= **************** GetHeadCountApi ****************** ========================= */
/** 获取数据总览统计 请求参数 */
export interface GetHeadCountApi$$Request {}
/** 获取数据总览统计 响应参数*/
export interface GetHeadCountApi$$Response {
    /** 导入文档数 */
    document_count: number;
    /** 提取人员数 */
    people_count: number;
    /** 文档涉及领域数 */
    field_count: number;
    /** 提取的有效证件数 */
    id_card_count: number;
    /** 提取的手机号码数 */
    phone_count: number;
    /** 任务数 */
    task_count: number;
}
/** 获取数据总览统计 */

export const GetHeadCountApi = (request: GetHeadCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetHeadCountApi$$Response>>('/v1/GetHeadCountApi',  request, InjectAbort(GetHeadCountApi, config));
};
    

/** ========================= **************** PeopleAddressCountApi ****************** ========================= */
/** 人员地域分布统计 请求参数 */
export interface PeopleAddressCountApi$$Request {
    /** 显示类型 enum:PERMANENT_ADDRESS #户籍地; RESIDENTIAL_ADDRESS #居住地 */
    type: string;
}
/** 人员地域分布统计 响应参数*/
export interface PeopleAddressCountApi$$Response {
    /** 各省数据列表 */
    address_data_list: AddressDataListItemTypes[];
}
/** 人员地域分布统计 */

export const PeopleAddressCountApi = (request: PeopleAddressCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<PeopleAddressCountApi$$Response>>('/v1/PeopleAddressCountApi',  request, InjectAbort(PeopleAddressCountApi, config));
};
    

/** ========================= **************** UploadDocumentTrendApi ****************** ========================= */
/** 文档导入数量趋势 请求参数 */
export interface UploadDocumentTrendApi$$Request {
    /** 时间 enum:LAST_WEEK; LAST_MONTH; LAST_YEAR; ALL_TIME */
    time: string;
    /** 领域选择，如果为空则返回全部数据 */
    field: string;
}
/** 文档导入数量趋势 响应参数*/
export interface UploadDocumentTrendApi$$Response {
    /** 导入数量 */
    trend_data: TrendDataItemTypes[];
}
/** 文档导入数量趋势 */

export const UploadDocumentTrendApi = (request: UploadDocumentTrendApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<UploadDocumentTrendApi$$Response>>('/v1/UploadDocumentTrendApi',  request, InjectAbort(UploadDocumentTrendApi, config));
};
    

/** ========================= **************** ListAllFieldNameApi ****************** ========================= */
/** 获取领域名称 请求参数 */
export interface ListAllFieldNameApi$$Request {}
/** 获取领域名称 响应参数*/
export interface ListAllFieldNameApi$$Response {
    /** 领域列表 */
    field_list: FieldListItemTypes[];
}
/** 获取领域名称 */

export const ListAllFieldNameApi = (request: ListAllFieldNameApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListAllFieldNameApi$$Response>>('/v1/ListAllFieldNameApi',  request, InjectAbort(ListAllFieldNameApi, config));
};
    

/** ========================= **************** TagPeopleCountApi ****************** ========================= */
/** 分级研析 请求参数 */
export interface TagPeopleCountApi$$Request {
    /** 自定义时间 */
    time_begin: number;
    /** 自定义时间 */
    time_end: number;
    /** 一级领域名称 */
    first_field: string;
    /** 二级领域名称 */
    second_field: string;
    /** 统计类型：ExactCount 精确统计, FuzzyCount 模糊统计 */
    count_type: string;
}
/** 分级研析 响应参数*/
export interface TagPeopleCountApi$$Response {
    /** 频次均等统计柱子 */
    times_column_list: TimesColumnListItemTypes[];
    /** 人数均等统计柱子 */
    person_column_list: PersonColumnListItemTypes[];
    /** 人数均等各频次人数 */
    person_times: PersonTimesItemTypes[];
}
/** 分级研析 */

export const TagPeopleCountApi = (request: TagPeopleCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<TagPeopleCountApi$$Response>>('/v1/TagPeopleCountApi',  request, InjectAbort(TagPeopleCountApi, config));
};
    

/** ========================= **************** ListRoleApi ****************** ========================= */
/** 角色列表 请求参数 */
export interface ListRoleApi$$Request {}
/** 角色列表 响应参数*/
export interface ListRoleApi$$Response {
    /** 角色列表 */
    role_info_list: RoleInfoListItemTypes[];
}
/** 角色列表 */

export const ListRoleApi = (request: ListRoleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListRoleApi$$Response>>('/v1/role/ListRoleApi',  request, InjectAbort(ListRoleApi, config));
};
    

/** ========================= **************** ListTagApi ****************** ========================= */
/** 标签列表 请求参数 */
export interface ListTagApi$$Request {}
/** 标签列表 响应参数*/
export interface ListTagApi$$Response {
    /** 标签列表 */
    tag_info_list: TagInfoListItemTypes[];
}
/** 标签列表 */

export const ListTagApi = (request: ListTagApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListTagApi$$Response>>('/v1/tag/ListTagApi',  request, InjectAbort(ListTagApi, config));
};
    

/** ========================= **************** AddTagApi ****************** ========================= */
/** 添加标签 请求参数 */
export interface AddTagApi$$Request {
    /** 父级ID */
    parent_id: number;
    /** 标签名 */
    name: string;
}
/** 添加标签 响应参数*/
export interface AddTagApi$$Response {}
/** 添加标签 */

export const AddTagApi = (request: AddTagApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AddTagApi$$Response>>('/v1/tag/AddTagApi',  request, InjectAbort(AddTagApi, config));
};
    

/** ========================= **************** UpdateTagApi ****************** ========================= */
/** 更新标签 请求参数 */
export interface UpdateTagApi$$Request {
    /** 标签ID */
    id: number;
    /** 父级ID */
    parent_id: number;
    /** 标签名 */
    name: string;
}
/** 更新标签 响应参数*/
export interface UpdateTagApi$$Response {}
/** 更新标签 */

export const UpdateTagApi = (request: UpdateTagApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<UpdateTagApi$$Response>>('/v1/tag/UpdateTagApi',  request, InjectAbort(UpdateTagApi, config));
};
    

/** ========================= **************** DeleteTagApi ****************** ========================= */
/** 删除标签 请求参数 */
export interface DeleteTagApi$$Request {
    /** 标签ID */
    id: number;
}
/** 删除标签 响应参数*/
export interface DeleteTagApi$$Response {}
/** 删除标签 */

export const DeleteTagApi = (request: DeleteTagApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<DeleteTagApi$$Response>>('/v1/tag/DeleteTagApi',  request, InjectAbort(DeleteTagApi, config));
};
    

/** ========================= **************** AdminListTaskApi ****************** ========================= */
/** 管理员任务列表 请求参数 */
export interface AdminListTaskApi$$Request {
    /** 证件号 */
    main_identity_number: string;
    /** 证件类型 */
    main_identity_type: number;
    /** 姓名 */
    name: string;
    /** 提交单位 */
    submit_unit: string;
    /** 任务状态, enum:ADMIN_WAIT_DISTRIBUTE(待分发),ADMIN_DISTRIBUTED(已分发),ADMIN_WAIT_REVIEW(待审核),ADMIN_REVIEWED(已审核) */
    task_status: string;
    /** 无归属大队人员 */
    uncredited: boolean;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 管理员任务列表 响应参数*/
export interface AdminListTaskApi$$Response {
    /** 任务列表 */
    task_info_list: TaskInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 管理员任务列表 */

export const AdminListTaskApi = (request: AdminListTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AdminListTaskApi$$Response>>('/v1/task/AdminListTaskApi',  request, InjectAbort(AdminListTaskApi, config));
};
    

/** ========================= **************** AdminStatisticsApi ****************** ========================= */
/** 管理员考核统计 请求参数 */
export interface AdminStatisticsApi$$Request {
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 管理员考核统计 响应参数*/
export interface AdminStatisticsApi$$Response {
    /** 统计列表 */
    statistics_info_list: StatisticsInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 管理员考核统计 */

export const AdminStatisticsApi = (request: AdminStatisticsApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AdminStatisticsApi$$Response>>('/v1/task/AdminStatisticsApi',  request, InjectAbort(AdminStatisticsApi, config));
};
    

/** ========================= **************** AdminAllocateTaskApi ****************** ========================= */
/** 管理员分发任务 请求参数 */
export interface AdminAllocateTaskApi$$Request {
    /** 任务ID集合 */
    id_list: number[];
    /** 大队ID集合 */
    group_id_list: string[];
}
/** 管理员分发任务 响应参数*/
export interface AdminAllocateTaskApi$$Response {}
/** 管理员分发任务 */

export const AdminAllocateTaskApi = (request: AdminAllocateTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AdminAllocateTaskApi$$Response>>('/v1/task/AdminAllocateTaskApi',  request, InjectAbort(AdminAllocateTaskApi, config));
};
    

/** ========================= **************** AdminAuditTaskApi ****************** ========================= */
/** 管理员审核任务 请求参数 */
export interface AdminAuditTaskApi$$Request {
    /** 任务ID */
    id: number;
    /** 大队ID集合 */
    group_id_list: string[];
}
/** 管理员审核任务 响应参数*/
export interface AdminAuditTaskApi$$Response {}
/** 管理员审核任务 */

export const AdminAuditTaskApi = (request: AdminAuditTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AdminAuditTaskApi$$Response>>('/v1/task/AdminAuditTaskApi',  request, InjectAbort(AdminAuditTaskApi, config));
};
    

/** ========================= **************** AuditorListTaskApi ****************** ========================= */
/** 审核员任务列表 请求参数 */
export interface AuditorListTaskApi$$Request {
    /** 证件号 */
    main_identity_number: string;
    /** 证件类型 */
    main_identity_type: number;
    /** 姓名 */
    name: string;
    /** 最新文档时间-开始 */
    newest_document_time_begin: number;
    /** 最新文档时间-结束 */
    newest_document_time_end: number;
    /** 研判人 */
    judge_user: number;
    /** 研判结果, enum:PERSON_BELONG_BRIGADE(本大队业务领域人员),PERSON_NOT_BELONG_BRIGADE(非本大队业务领域人员) */
    judge_result: string;
    /** 标签 */
    tag: string;
    /** 任务状态, enum:AUDITOR_WAIT_DISTRIBUTE(待分发),AUDITOR_WAIT_REVIEW(待审核),AUDITOR_REVIEWED(已审核) */
    task_status: string;
    /** 待审核子状态, enum:PERSON_BELONG_BRIGADE(本大队业务领域人员),PERSON_NOT_BELONG_BRIGADE(非本大队业务领域人员) */
    wait_judge_status: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 审核员任务列表 响应参数*/
export interface AuditorListTaskApi$$Response {
    /** 任务列表 */
    task_info_list: TaskInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 审核员任务列表 */

export const AuditorListTaskApi = (request: AuditorListTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorListTaskApi$$Response>>('/v1/task/AuditorListTaskApi',  request, InjectAbort(AuditorListTaskApi, config));
};
    

/** ========================= **************** AuditorStatisticsApi ****************** ========================= */
/** 审核员考核统计 请求参数 */
export interface AuditorStatisticsApi$$Request {
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 审核员考核统计 响应参数*/
export interface AuditorStatisticsApi$$Response {
    /** 统计列表 */
    statistics_info_list: StatisticsInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 审核员考核统计 */

export const AuditorStatisticsApi = (request: AuditorStatisticsApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorStatisticsApi$$Response>>('/v1/task/AuditorStatisticsApi',  request, InjectAbort(AuditorStatisticsApi, config));
};
    

/** ========================= **************** AuditorAllocateTaskApi ****************** ========================= */
/** 审核员分发任务 请求参数 */
export interface AuditorAllocateTaskApi$$Request {
    /** 任务ID集合 */
    id_list: number[];
    /** 警员ID */
    user_id: number;
}
/** 审核员分发任务 响应参数*/
export interface AuditorAllocateTaskApi$$Response {}
/** 审核员分发任务 */

export const AuditorAllocateTaskApi = (request: AuditorAllocateTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorAllocateTaskApi$$Response>>('/v1/task/AuditorAllocateTaskApi',  request, InjectAbort(AuditorAllocateTaskApi, config));
};
    

/** ========================= **************** AuditorPassTaskApi ****************** ========================= */
/** 审核员通过任务 请求参数 */
export interface AuditorPassTaskApi$$Request {
    /** 任务ID列表 */
    id_list: number[];
}
/** 审核员通过任务 响应参数*/
export interface AuditorPassTaskApi$$Response {}
/** 审核员通过任务 */

export const AuditorPassTaskApi = (request: AuditorPassTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorPassTaskApi$$Response>>('/v1/task/AuditorPassTaskApi',  request, InjectAbort(AuditorPassTaskApi, config));
};
    

/** ========================= **************** AuditorAuditTaskApi ****************** ========================= */
/** 审核员审核任务 请求参数 */
export interface AuditorAuditTaskApi$$Request {
    /** 任务ID */
    id: number;
    /** 是否本领域 */
    is_field: boolean;
    /** 标签 */
    tag: number;
    /** 原因 */
    reason: string;
}
/** 审核员审核任务 响应参数*/
export interface AuditorAuditTaskApi$$Response {}
/** 审核员审核任务 */

export const AuditorAuditTaskApi = (request: AuditorAuditTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorAuditTaskApi$$Response>>('/v1/task/AuditorAuditTaskApi',  request, InjectAbort(AuditorAuditTaskApi, config));
};
    

/** ========================= **************** AuditorNoPassTaskApi ****************** ========================= */
/** 审核员不通过任务 请求参数 */
export interface AuditorNoPassTaskApi$$Request {
    /** 任务ID */
    task_id: number;
    /** 原因，enum:IS_NOT_FIELD(非本大队人员);TAG_WRONG(标签有误);PERSON_INFO_WRONG(人员信息有误) */
    reason: string[];
}
/** 审核员不通过任务 响应参数*/
export interface AuditorNoPassTaskApi$$Response {}
/** 审核员不通过任务 */

export const AuditorNoPassTaskApi = (request: AuditorNoPassTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<AuditorNoPassTaskApi$$Response>>('/v1/task/AuditorNoPassTaskApi',  request, InjectAbort(AuditorNoPassTaskApi, config));
};
    

/** ========================= **************** JudgeListTaskApi ****************** ========================= */
/** 研判员任务列表 请求参数 */
export interface JudgeListTaskApi$$Request {
    /** 证件号 */
    main_identity_number: string;
    /** 证件类型 */
    main_identity_type: number;
    /** 姓名 */
    name: string;
    /** 提交单位 */
    submit_unit: number;
    /** 最新文档时间-开始 */
    newest_document_time_begin: number;
    /** 最新文档时间-结束 */
    newest_document_time_end: number;
    /** 研判结果 */
    judge_result: string;
    /** 任务状态, enum:JUDGE_WAIT_JUDGE(待研判),JUDGE_JUDGED(已研判) */
    task_status: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 研判员任务列表 响应参数*/
export interface JudgeListTaskApi$$Response {
    /** 任务列表 */
    task_info_list: TaskInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 研判员任务列表 */

export const JudgeListTaskApi = (request: JudgeListTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<JudgeListTaskApi$$Response>>('/v1/task/JudgeListTaskApi',  request, InjectAbort(JudgeListTaskApi, config));
};
    

/** ========================= **************** JudgeTaskApi ****************** ========================= */
/** 研判任务 请求参数 */
export interface JudgeTaskApi$$Request {
    /** 任务ID */
    id: number;
    /** 是否本领域 */
    is_field: boolean;
    /** 标签 */
    tag: number;
    /** 原因 */
    reason: string;
    /** 信息修改列表 */
    modify_list: ModifyListItemTypes[];
}
/** 研判任务 响应参数*/
export interface JudgeTaskApi$$Response {}
/** 研判任务 */

export const JudgeTaskApi = (request: JudgeTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<JudgeTaskApi$$Response>>('/v1/task/JudgeTaskApi',  request, InjectAbort(JudgeTaskApi, config));
};
    

/** ========================= **************** ListAllocatedPeopleApi ****************** ========================= */
/** 已分发人员列表 请求参数 */
export interface ListAllocatedPeopleApi$$Request {
    /** 大队或用户ID */
    id: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 已分发人员列表 响应参数*/
export interface ListAllocatedPeopleApi$$Response {
    /** 已分发人员列表 */
    allocated_people_info_list: AllocatedPeopleInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 已分发人员列表 */

export const ListAllocatedPeopleApi = (request: ListAllocatedPeopleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListAllocatedPeopleApi$$Response>>('/v1/task/ListAllocatedPeopleApi',  request, InjectAbort(ListAllocatedPeopleApi, config));
};
    

/** ========================= **************** ListJudgedPeopleApi ****************** ========================= */
/** 已研判人员列表 请求参数 */
export interface ListJudgedPeopleApi$$Request {
    /** 大队或用户ID */
    id: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 已研判人员列表 响应参数*/
export interface ListJudgedPeopleApi$$Response {
    /** 已研判人员列表 */
    judged_people_info_list: JudgedPeopleInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 已研判人员列表 */

export const ListJudgedPeopleApi = (request: ListJudgedPeopleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListJudgedPeopleApi$$Response>>('/v1/task/ListJudgedPeopleApi',  request, InjectAbort(ListJudgedPeopleApi, config));
};
    

/** ========================= **************** GetTaskApi ****************** ========================= */
/** 获取任务详情 请求参数 */
export interface GetTaskApi$$Request {
    /** 任务ID */
    id: number;
}
/** 获取任务详情 响应参数*/
export interface GetTaskApi$$Response {
    /** 人员信息 */
    people_info: PeopleInfoItemTypes;
    /** 涉及文档列表 */
    document_info_list: DocumentInfoListItemTypes[];
    /** 研判记录列表 */
    judge_record_info_list: JudgeRecordInfoListItemTypes[];
}
/** 获取任务详情 */

export const GetTaskApi = (request: GetTaskApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetTaskApi$$Response>>('/v1/task/GetTaskApi',  request, InjectAbort(GetTaskApi, config));
};
    

/** ========================= **************** ListJudgerApi ****************** ========================= */
/** 研判员列表 请求参数 */
export interface ListJudgerApi$$Request {
    /** 大队ID */
    groupID: string;
}
/** 研判员列表 响应参数*/
export interface ListJudgerApi$$Response {
    /** 研判员列表 */
    user_info_list: UserInfoListItemTypes[];
}
/** 研判员列表 */

export const ListJudgerApi = (request: ListJudgerApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListJudgerApi$$Response>>('/v1/task/ListJudgerApi',  request, InjectAbort(ListJudgerApi, config));
};
    

/** ========================= **************** ListGroupOnlyApi ****************** ========================= */
/** 大队列表 请求参数 */
export interface ListGroupOnlyApi$$Request {}
/** 大队列表 响应参数*/
export interface ListGroupOnlyApi$$Response {
    /** 大队列表 */
    group_info_list: GroupInfoListItemTypes[];
}
/** 大队列表 */

export const ListGroupOnlyApi = (request: ListGroupOnlyApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListGroupOnlyApi$$Response>>('/v1/task/ListGroupOnlyApi',  request, InjectAbort(ListGroupOnlyApi, config));
};
    

/** ========================= **************** TaskDocumentDetailsApi ****************** ========================= */
/** 任务文档详情，返回实体词和关键词，文档内容通过下载文档获取 请求参数 */
export interface TaskDocumentDetailsApi$$Request {
    /** 任务ID */
    task_id: number;
    /** 文档id */
    document_id: string;
}
/** 任务文档详情，返回实体词和关键词，文档内容通过下载文档获取 响应参数*/
export interface TaskDocumentDetailsApi$$Response {
    /** 人名，多个人名中间用逗号分隔 */
    people_name_list: string[];
    /** 身份证号 */
    id_number_list: string[];
    /** 手机号码 */
    phone_number_list: string[];
    /** 地名 */
    address_list: string[];
    /** 日期 */
    date_list: string[];
    /** 机构团体名 */
    organization_list: string[];
    /** 其他证件号 */
    other_id_number_list: string[];
    /** 社交媒体账号 */
    media_account_list: string[];
    /** 银行卡号 */
    bank_card_number_list: string[];
    /** 邮箱 */
    e_mail_number_list: string[];
    /** 文化程度 */
    education_list: string[];
    /** 政治面貌 */
    political_identity_list: string[];
    /** 关键词 */
    key_word_list: string[];
    /** 人员关系 */
    relationship_list: string[];
    /** 文本 */
    text: string;
    /** 涉及领域 */
    involve_field_list: InvolveFieldListItemTypes[];
}
/** 任务文档详情，返回实体词和关键词，文档内容通过下载文档获取 */

export const TaskDocumentDetailsApi = (request: TaskDocumentDetailsApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<TaskDocumentDetailsApi$$Response>>('/v1/task/TaskDocumentDetailsApi',  request, InjectAbort(TaskDocumentDetailsApi, config));
};
    

/** ========================= **************** ListUserApi ****************** ========================= */
/** 用户列表 请求参数 */
export interface ListUserApi$$Request {
    /** 大队ID */
    groupID: string;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 用户列表 响应参数*/
export interface ListUserApi$$Response {
    /** 用户列表 */
    user_info_list: UserInfoListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 用户列表 */

export const ListUserApi = (request: ListUserApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListUserApi$$Response>>('/v1/user/ListUserApi',  request, InjectAbort(ListUserApi, config));
};
    

/** ========================= **************** SetRoleApi ****************** ========================= */
/** 设置角色 请求参数 */
export interface SetRoleApi$$Request {
    /** 用户ID */
    id: number;
    /** 角色ID */
    role_id: number;
}
/** 设置角色 响应参数*/
export interface SetRoleApi$$Response {}
/** 设置角色 */

export const SetRoleApi = (request: SetRoleApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<SetRoleApi$$Response>>('/v1/user/SetRoleApi',  request, InjectAbort(SetRoleApi, config));
};
    

/** ========================= **************** ListGroupApi ****************** ========================= */
/** 大队列表 请求参数 */
export interface ListGroupApi$$Request {}
/** 大队列表 响应参数*/
export interface ListGroupApi$$Response {
    /** 大队列表 */
    group_info_list: GroupInfoListItemTypes[];
}
/** 大队列表 */

export const ListGroupApi = (request: ListGroupApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<ListGroupApi$$Response>>('/v1/user/ListGroupApi',  request, InjectAbort(ListGroupApi, config));
};
    

/** ========================= **************** LoginApi ****************** ========================= */
/** 登录 请求参数 */
export interface LoginApi$$Request {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
}
/** 登录 响应参数*/
export interface LoginApi$$Response {
    /** 登录授权令牌 */
    token: string;
    /** 用户ID */
    id: number;
    /** 账号 */
    account: string;
    /** 姓名 */
    name: string;
    /** 角色信息 */
    role_info: RoleInfoItemTypes;
    /** 大队信息 */
    group_info: GroupInfoItemTypes;
}
/** 登录 */

export const LoginApi = (request: LoginApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<LoginApi$$Response>>('/v1/user/LoginApi',  request, InjectAbort(LoginApi, config));
};
    

/** ========================= **************** TaskCountApi ****************** ========================= */
/** 用户任务数 请求参数 */
export interface TaskCountApi$$Request {}
/** 用户任务数 响应参数*/
export interface TaskCountApi$$Response {
    /** 任务数 */
    count: number;
}
/** 用户任务数 */

export const TaskCountApi = (request: TaskCountApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<TaskCountApi$$Response>>('/v1/user/TaskCountApi',  request, InjectAbort(TaskCountApi, config));
};
    

/** ========================= **************** OperateLogApi ****************** ========================= */
/** 操作日志 请求参数 */
export interface OperateLogApi$$Request {
    /** 用户账号 */
    account: string;
    /** 用户姓名 */
    name: string;
    /** 用户角色id */
    role_id: number;
    /** 单位id */
    group_id: string;
    /** 操作模块;enum:LOG_JUDGE(人员研判),LOG_PERSON_INFO(人员详情) */
    operate_type: string;
    /** 操作时间-开始 ms */
    time_begin: number;
    /** 操作时间-结束 ms */
    time_end: number;
    /** 页码 */
    page: number;
    /** 单页个数 */
    count: number;
}
/** 操作日志 响应参数*/
export interface OperateLogApi$$Response {
    /** 日志列表 */
    log_list: LogListItemTypes[];
    /** 总数 */
    total_count: number;
}
/** 操作日志 */

export const OperateLogApi = (request: OperateLogApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<OperateLogApi$$Response>>('/v1/user/OperateLogApi',  request, InjectAbort(OperateLogApi, config));
};
    

/** ========================= **************** GetUserInfoApi ****************** ========================= */
/** 获取用户信息 请求参数 */
export interface GetUserInfoApi$$Request {}
/** 获取用户信息 响应参数*/
export interface GetUserInfoApi$$Response {
    /** 登录授权令牌 */
    token: string;
    /** 用户ID */
    id: number;
    /** 账号 */
    account: string;
    /** 姓名 */
    name: string;
    /** 角色信息 */
    role_info: RoleInfoItemTypes;
    /** 大队信息 */
    group_info: GroupInfoItemTypes;
}
/** 获取用户信息 */

export const GetUserInfoApi = (request: GetUserInfoApi$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<GetUserInfoApi$$Response>>('/v1/user/GetUserInfoApi',  request, InjectAbort(GetUserInfoApi, config));
};
    

/** ========================= **************** upload ****************** ========================= */
/** 上传 请求参数 */
export interface upload$$Request {}
/** 上传 响应参数*/
export interface upload$$Response {
    /** 文件信息列表 */
    fileInfoList: FileInfoListItemTypes[];
}
/** 上传 */

export const upload = (request: upload$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<upload$$Response>>('/v1/upload',  request, InjectAbort(upload, config));
};
    

/** ========================= **************** UploadQueryExcel ****************** ========================= */
/** 上传批量查询人员的表格 请求参数 */
export interface UploadQueryExcel$$Request {}
/** 上传批量查询人员的表格 响应参数*/
export interface UploadQueryExcel$$Response {
    /** 文件id */
    file_id: string;
}
/** 上传批量查询人员的表格 */

export const UploadQueryExcel = (request: UploadQueryExcel$$Request, config?: AxiosRequestConfig) => {
  return axiosInstance.post<BaseServeResponse<UploadQueryExcel$$Response>>('/v1/UploadQueryExcel',  request, InjectAbort(UploadQueryExcel, config));
};
    

/** ========================= **************** download ****************** ========================= */
/** 下载 请求参数 */
export interface download$$Request {}
/** 下载 响应参数*/
export interface download$$Response {}
/** 下载 */

export const download = (config: AppAxiosRequestConfig<download$$Request>) => {
  return axiosInstance.get<BaseServeResponse<download$$Response>>('/v1/download', InjectAbort(download, config));
};
    

/** ========================= **************** ExportPeopleApi ****************** ========================= */
/** 导出人员列表 请求参数 */
export interface ExportPeopleApi$$Request {}
/** 导出人员列表 响应参数*/
export interface ExportPeopleApi$$Response {}
/** 导出人员列表 */

export const ExportPeopleApi = (config: AppAxiosRequestConfig<ExportPeopleApi$$Request>) => {
  return axiosInstance.get<BaseServeResponse<ExportPeopleApi$$Response>>('/v1/ExportPeopleApi', InjectAbort(ExportPeopleApi, config));
};
    

/** ========================= **************** BatchExportPersonApi ****************** ========================= */
/** 批量下载人员 请求参数 */
export interface BatchExportPersonApi$$Request {}
/** 批量下载人员 响应参数*/
export interface BatchExportPersonApi$$Response {}
/** 批量下载人员 */

export const BatchExportPersonApi = (config: AppAxiosRequestConfig<BatchExportPersonApi$$Request>) => {
  return axiosInstance.get<BaseServeResponse<BatchExportPersonApi$$Response>>('/v1/BatchExportPersonApi', InjectAbort(BatchExportPersonApi, config));
};
    

/** ========================= **************** AdminStatisticsExportApi ****************** ========================= */
/** 管理员考核统计导出 请求参数 */
export interface AdminStatisticsExportApi$$Request {}
/** 管理员考核统计导出 响应参数*/
export interface AdminStatisticsExportApi$$Response {}
/** 管理员考核统计导出 */

export const AdminStatisticsExportApi = (config: AppAxiosRequestConfig<AdminStatisticsExportApi$$Request>) => {
  return axiosInstance.get<BaseServeResponse<AdminStatisticsExportApi$$Response>>('/v1/task/AdminStatisticsExportApi', InjectAbort(AdminStatisticsExportApi, config));
};
    

/** ========================= **************** AuditorStatisticsExportApi ****************** ========================= */
/** 审核员考核统计导出 请求参数 */
export interface AuditorStatisticsExportApi$$Request {}
/** 审核员考核统计导出 响应参数*/
export interface AuditorStatisticsExportApi$$Response {}
/** 审核员考核统计导出 */

export const AuditorStatisticsExportApi = (config: AppAxiosRequestConfig<AuditorStatisticsExportApi$$Request>) => {
  return axiosInstance.get<BaseServeResponse<AuditorStatisticsExportApi$$Response>>('/v1/task/AuditorStatisticsExportApi', InjectAbort(AuditorStatisticsExportApi, config));
};
    


export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface DocumentInfoListItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
  /** 涉及人员 */
  involve_people: string;
  /** 涉及领域 */
  involve_field_list: InvolveFieldListItemTypes[];
  /** 关键词 */
  key_word: string;
  /** 业务归属大队 */
  belong_brigade: string;
  /** 导入时间 */
  create_time: number;
  /** 提交时间 */
  commit_time: number;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface DocumentPeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名列表 */
  name: string[];
  /** 性别列表 */
  gender: string[];
  /** 民族列表 */
  nation: string[];
  /** 电话号码列表 */
  phone_number: string[];
  /** 户籍地列表 */
  permanent_address: string[];
  /** 居住地列表 */
  residential_address: string[];
  /** 绰号列表 */
  assumed_name_list: string[];
  /** 英文名列表 */
  foreign_name_list: string[];
  /** 文化程度 */
  education: string[];
  /** 政治面貌 */
  political_identity: string[];
  /** 银行卡号列表 */
  bank_card_number_list: string[];
  /** 邮箱列表 */
  email_number_list: string[];
  /** 港澳通行证列表 */
  hk_mc_card_list: string[];
  /** 台湾通行证列表 */
  tai_wan_card_list: string[];
  /** 护照号码列表 */
  passport_card_list: string[];
  /** 外国人护照号列表 */
  foreigner_passport_card_list: string[];
  /** 境外身份证号列表 */
  foreigner_id_number_list: string[];
  /** 香港身份证号列表 */
  hk_id_number_list: string[];
  /** 澳门身份证号列表 */
  mc_id_number_list: string[];
  /** 台湾身份证号列表 */
  tw_id_number_list: string[];
  /** 香港回乡证号列表 */
  hk_return_home_card_list: string[];
  /** 澳门回乡证号列表 */
  mc_return_home_card_list: string[];
  /** 台湾回乡证号列表 */
  tw_return_home_card_list: string[];
  /** QQ号列表 */
  qq_number_list: string[];
  /** 微信号列表 */
  wei_xin_number_list: string[];
  /** Twitter号列表 */
  twitter_number_list: string[];
  /** 微信昵称 */
  wei_xin_nickname: string[];
  /** 籍贯 */
  native_place: string[];
  /** 涉及领域列表 */
  involve_field_list: InvolveFieldListItemTypes[];
}
export interface DocumentDetailsInfoItemTypes {
  /** 人名，多个人名中间用逗号分隔 */
  people_name_list: string[];
  /** 身份证号 */
  id_number_list: string[];
  /** 手机号码 */
  phone_number_list: string[];
  /** 地名 */
  address_list: string[];
  /** 日期 */
  date_list: string[];
  /** 机构团体名 */
  organization_list: string[];
  /** 其他证件号 */
  other_id_number_list: string[];
  /** 社交媒体账号 */
  media_account_list: string[];
  /** 银行卡号 */
  bank_card_number_list: string[];
  /** 邮箱 */
  e_mail_number_list: string[];
  /** 文化程度 */
  education_list: string[];
  /** 政治面貌 */
  political_identity_list: string[];
  /** 关键词 */
  key_word_list: string[];
  /** 人员关系 */
  relationship_list: string[];
}
export interface InvolveFieldInfoItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface DocumentPeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名列表 */
  name: string[];
  /** 性别列表 */
  gender: string[];
  /** 民族列表 */
  nation: string[];
  /** 电话号码列表 */
  phone_number: string[];
  /** 户籍地列表 */
  permanent_address: string[];
  /** 居住地列表 */
  residential_address: string[];
  /** 绰号列表 */
  assumed_name_list: string[];
  /** 英文名列表 */
  foreign_name_list: string[];
  /** 文化程度 */
  education: string[];
  /** 政治面貌 */
  political_identity: string[];
  /** 银行卡号列表 */
  bank_card_number_list: string[];
  /** 邮箱列表 */
  email_number_list: string[];
  /** 港澳通行证列表 */
  hk_mc_card_list: string[];
  /** 台湾通行证列表 */
  tai_wan_card_list: string[];
  /** 护照号码列表 */
  passport_card_list: string[];
  /** 外国人护照号列表 */
  foreigner_passport_card_list: string[];
  /** 境外身份证号列表 */
  foreigner_id_number_list: string[];
  /** 香港身份证号列表 */
  hk_id_number_list: string[];
  /** 澳门身份证号列表 */
  mc_id_number_list: string[];
  /** 台湾身份证号列表 */
  tw_id_number_list: string[];
  /** 香港回乡证号列表 */
  hk_return_home_card_list: string[];
  /** 澳门回乡证号列表 */
  mc_return_home_card_list: string[];
  /** 台湾回乡证号列表 */
  tw_return_home_card_list: string[];
  /** QQ号列表 */
  qq_number_list: string[];
  /** 微信号列表 */
  wei_xin_number_list: string[];
  /** Twitter号列表 */
  twitter_number_list: string[];
  /** 微信昵称 */
  wei_xin_nickname: string[];
  /** 籍贯 */
  native_place: string[];
  /** 涉及领域列表 */
  involve_field_list: InvolveFieldListItemTypes[];
}
export interface RelationPeopleListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string[];
}
export interface PeopleRelationListItemTypes {
  /** 主体人员 */
  source_people: string;
  /** 目标人员 */
  target_people: string;
  /** 关系 */
  relationship: string;
}
export interface DiagramInfoItemTypes {
  /** 人员姓名列表 */
  relation_people_list: RelationPeopleListItemTypes[];
  /** 人物关系 */
  people_relation_list: PeopleRelationListItemTypes[];
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface PeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string[];
  /** 性别 */
  gender: string;
  /** 民族 */
  nation: string;
  /** 电话号码 */
  phone_number_list: string[];
  /** 户籍地 */
  permanent_address_list: string[];
  /** 居住地 */
  residential_address_list: string[];
  /** 涉及领域 */
  involve_field_list: InvolveFieldListItemTypes[];
  /** 首次导入时间 */
  first_create_time: number;
  /** 业务所属大队 */
  group_list: string[];
  /** 标签 */
  tag_list: string[];
  /** 最新文档时间 */
  lately_time: number;
}
export interface DocumentInfoListItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
}
export interface AssumedNameListItemTypes {
  /** 绰号 */
  assumed_name: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface ForeignNameListItemTypes {
  /** 英文名 */
  foreign_name: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface PhoneNumberInfoListItemTypes {
  /** 电话号码 */
  phone_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface PermanentAddressInfoListItemTypes {
  /** 户籍地 */
  permanent_address: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface ResidentialAddressInfoListItemTypes {
  /** 居住地 */
  residential_address: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface BankCardNumberListItemTypes {
  /** 银行卡号 */
  bank_card_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface EmailNumberListItemTypes {
  /** 邮箱 */
  email_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface HkMcCardListItemTypes {
  /** 港澳通行证 */
  hk_mc_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface TaiWanCardListItemTypes {
  /** 台湾通行证 */
  tai_wan_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface PassportCardListItemTypes {
  /** 护照号码 */
  passport_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface ForeignerPassportCardListItemTypes {
  /** 外国人护照号 */
  foreigner_passport_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface ForeignerIdNumberListItemTypes {
  /** 境外身份证号 */
  foreigner_id_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface HkIdNumberListItemTypes {
  /** 香港身份证号 */
  hk_id_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface McIdNumberListItemTypes {
  /** 澳门身份证号 */
  mc_id_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface TwIdNumberListItemTypes {
  /** 台湾身份证号 */
  hk_id_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface HkReturnHomeCardListItemTypes {
  /** 香港回乡证号 */
  hk_return_home_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface McReturnHomeCardListItemTypes {
  /** 澳门回乡证号 */
  mc_return_home_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface TwReturnHomeCardListItemTypes {
  /** 台湾回乡证号 */
  tw_return_home_card: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface QqNumberListItemTypes {
  /** QQ号 */
  qq_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface WeiXinNumberListItemTypes {
  /** 微信号 */
  wei_xin_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface TwitterNumberListItemTypes {
  /** twitter号 */
  twitter_number: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface WeiXinNicknameItemTypes {
  /** 文本内容 */
  text: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface NativePlaceItemTypes {
  /** 文本内容 */
  text: string;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface InvolveDocumentNumItemTypes {
  /** 文档数目 */
  number: number;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface InvolveFieldInfoListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
  /** 文档数目 */
  document_number: number;
  /** 比例*100 */
  ratio: number;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface RelevantPeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 文档数目 */
  document_number: number;
  /** 比例 */
  ratio: number;
  /** 文档id列表 */
  document_id_list: string[];
}
export interface PeopleListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 是否可以跳转 */
  can_jump: boolean;
  /** 级别 */
  level: number;
}
export interface DocumentInfoItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名称 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
  /** 一级领域列表 */
  fieldList: string[];
  /** 文档中关系 */
  relation: string[];
}
export interface ChildPeopleListItemTypes {
  /** 子级人员证件号 */
  child_identity_number: string;
  /** 子级人员证件类型 */
  child_identity_type: number;
  /** 子级人员姓名 */
  child_id_name: string;
  /** 与父级人员出现在共同文档数目 */
  count: number;
  /** 与父级共同文档的信息 */
  document_info: DocumentInfoItemTypes[];
}
export interface FatherPeopleItemTypes {
  /** 父级人员证件号 */
  father_identity_number: string;
  /** 父级人员证件类型 */
  father_identity_type: number;
  /** 子级人员列表 */
  child_people_list: ChildPeopleListItemTypes[];
}
export interface DocumentBriefInfoItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名称 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
  /** 一级领域列表 */
  fieldList: string[];
  /** 文档概述 */
  summary: string;
}
export interface DocumentInfoItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名称 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
  /** 一级领域列表 */
  fieldList: string[];
  /** 文档中关系 */
  relation: string[];
}
export interface ChildPeopleListItemTypes {
  /** 子级人员证件号 */
  child_identity_number: string;
  /** 子级人员证件类型 */
  child_identity_type: number;
  /** 子级人员姓名 */
  child_id_name: string;
  /** 与父级人员出现在共同文档数目 */
  count: number;
  /** 与父级共同文档的信息 */
  document_info: DocumentInfoItemTypes[];
}
export interface ModifyListItemTypes {
  /** 实体id(人员简介用200) */
  entity_id: number;
  /** 是否新增数据 */
  is_new: boolean;
  /** 旧的信息 */
  old_info: string;
  /** 新的信息 */
  new_info: string;
}
export interface PeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface PeopleInfoListItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string[];
  /** 性别 */
  gender: string;
  /** 民族 */
  nation: string;
  /** 电话号码 */
  phone_number_list: string[];
  /** 户籍地 */
  permanent_address_list: string[];
  /** 居住地 */
  residential_address_list: string[];
  /** 涉及领域 */
  involve_field_list: InvolveFieldListItemTypes[];
  /** 首次导入时间 */
  first_create_time: number;
  /** 业务所属大队 */
  group_list: string[];
  /** 标签 */
  tag_list: string[];
  /** 最新文档时间 */
  lately_time: number;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
}
export interface PeopleListItemTypes {
  /** 人员主要证件号 */
  main_identity_number: string;
  /** 主要证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 性别 */
  gender: string;
  /** 文档总数 */
  document_count: number;
  /** 统计 */
  count: number;
  /** 涉及领域 */
  involve_field_list: InvolveFieldListItemTypes[];
}
export interface DataListItemTypes {
  /** 涉及领域 */
  field: string;
  /** 文档统计 */
  document_count: number;
  /** 人员统计 */
  people_count: number;
}
export interface PeopleListItemTypes {
  /** 人员主要证件号 */
  main_identity_number: string;
  /** 主要证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 性别 */
  gender: string;
  /** 统计 */
  count: number;
}
export interface AddressDataListItemTypes {
  /** 省级名称 */
  name: string;
  /** 人数 */
  data: number;
}
export interface TrendDataItemTypes {
  /** 日期 */
  date: string;
  /** 文档数目统计 */
  count: number;
}
export interface FieldListItemTypes {
  /** 一级领域名称 */
  first_field_name: string;
  /** 二级领域名称列表 */
  second_field_name: string[];
}
export interface FileListItemTypes {
  /** 文件id */
  file_id: string;
  /** 文档标题 */
  file_title: string;
  /** 提交时间 */
  commit_time: number;
  /** 大队分类 */
  belong_brigade: string;
  /** 上报单位 */
  report_unit: string;
}
export interface PersonListItemTypes {
  /** 姓名 */
  name: string;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 文档列表 */
  file_list: FileListItemTypes[];
}
export interface TimesColumnListItemTypes {
  /** 左端点 */
  left_endpoint: number;
  /** 右端点 */
  right_endpoint: number;
  /** 数目 */
  count: number;
  /** 弹窗列表 */
  person_list: PersonListItemTypes[];
}
export interface FileListItemTypes {
  /** 文件id */
  file_id: string;
  /** 文档标题 */
  file_title: string;
  /** 提交时间 */
  commit_time: number;
  /** 大队分类 */
  belong_brigade: string;
  /** 上报单位 */
  report_unit: string;
}
export interface PersonListItemTypes {
  /** 姓名 */
  name: string;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 文档列表 */
  file_list: FileListItemTypes[];
}
export interface PersonColumnListItemTypes {
  /** 左端点 */
  left_endpoint: number;
  /** 右端点 */
  right_endpoint: number;
  /** 数目 */
  count: number;
  /** 弹窗列表 */
  person_list: PersonListItemTypes[];
}
export interface FileListItemTypes {
  /** 文件id */
  file_id: string;
  /** 文档标题 */
  file_title: string;
  /** 提交时间 */
  commit_time: number;
  /** 大队分类 */
  belong_brigade: string;
  /** 上报单位 */
  report_unit: string;
}
export interface PersonListItemTypes {
  /** 姓名 */
  name: string;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 文档列表 */
  file_list: FileListItemTypes[];
}
export interface PersonTimesItemTypes {
  /** 频次 */
  times: number;
  /** 该频次的人数 */
  number: number;
  /** 弹窗列表 */
  person_list: PersonListItemTypes[];
}
export interface AuthorityListItemTypes {
  /** 名称 */
  name: string;
  /** 父级 */
  parent: string;
  /** 标题 */
  title: string;
  /** 是否选择 */
  selected: boolean;
}
export interface RoleInfoListItemTypes {
  /** 角色ID */
  id: number;
  /** 名称 */
  name: string;
  /** 权限列表 */
  authorityList: AuthorityListItemTypes[];
}
export interface TagInfoListItemTypes {
  /** 标签ID */
  id: number;
  /** 父级ID */
  parent_id: number;
  /** 名称 */
  name: string;
}
export interface TaskInfoListItemTypes {
  /** 任务ID */
  id: number;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 涉及文档数量 */
  involve_document_num: number;
  /** 研判结果 */
  judge_result: string;
  /** 研判原因 */
  judge_reason: string;
  /** 提交单位 */
  submit_unit: string;
  /** 审核意见 */
  audit_opinion: string;
  /** 审核结果 */
  audit_result: string;
  /** 最新文档时间 */
  newest_document_time: number;
  /** 标签 */
  tag: string;
  /** 人员信息修改确认 */
  person_info_modify: string;
  /** 研判人 */
  judge_user: string;
  /** 操作时间 */
  operate_time: number;
}
export interface StatisticsInfoListItemTypes {
  /** 大队ID */
  id: string;
  /** 单位节点 */
  name: string;
  /** 被分发人员数 */
  allocated_num: number;
  /** 已研判人员数 */
  judged_num: number;
  /** 完成率 */
  percentage_complete: number;
}
export interface TaskInfoListItemTypes {
  /** 任务ID */
  id: number;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 涉及文档数量 */
  involve_document_num: number;
  /** 研判结果 */
  judge_result: string;
  /** 研判原因 */
  judge_reason: string;
  /** 提交单位 */
  submit_unit: string;
  /** 审核意见 */
  audit_opinion: string;
  /** 审核结果 */
  audit_result: string;
  /** 最新文档时间 */
  newest_document_time: number;
  /** 标签 */
  tag: string;
  /** 人员信息修改确认 */
  person_info_modify: string;
  /** 研判人 */
  judge_user: string;
  /** 操作时间 */
  operate_time: number;
}
export interface StatisticsInfoListItemTypes {
  /** 用户ID */
  id: string;
  /** 姓名 */
  name: string;
  /** 被分发人员数 */
  allocated_num: number;
  /** 已研判人员数 */
  judged_num: number;
  /** 完成率 */
  percentage_complete: number;
}
export interface TaskInfoListItemTypes {
  /** 任务ID */
  id: number;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 涉及文档数量 */
  involve_document_num: number;
  /** 研判结果 */
  judge_result: string;
  /** 研判原因 */
  judge_reason: string;
  /** 提交单位 */
  submit_unit: string;
  /** 审核意见 */
  audit_opinion: string;
  /** 审核结果 */
  audit_result: string;
  /** 最新文档时间 */
  newest_document_time: number;
  /** 标签 */
  tag: string;
  /** 人员信息修改确认 */
  person_info_modify: string;
  /** 研判人 */
  judge_user: string;
  /** 操作时间 */
  operate_time: number;
}
export interface ModifyListItemTypes {
  /** 实体id(人员简介用200) */
  entity_id: number;
  /** 是否新增数据 */
  is_new: boolean;
  /** 旧的信息 */
  old_info: string;
  /** 新的信息 */
  new_info: string;
}
export interface AllocatedPeopleInfoListItemTypes {
  /** ID */
  id: number;
  /** 姓名 */
  name: string;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 涉及文档数 */
  involve_document_num: number;
}
export interface JudgedPeopleInfoListItemTypes {
  /** ID */
  id: number;
  /** 姓名 */
  name: string;
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 涉及文档数 */
  involve_document_num: number;
  /** 研判情况 */
  judge_result: string;
  /** 研判原因 */
  judge_reason: string;
  /** 标签 */
  tag: string;
}
export interface PeopleInfoItemTypes {
  /** 证件号 */
  main_identity_number: string;
  /** 证件类型 */
  main_identity_type: number;
  /** 姓名 */
  name: string;
  /** 性别 */
  gender: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface DocumentInfoListItemTypes {
  /** 文档id */
  document_id: string;
  /** 文档名 */
  document_name: string;
  /** 文档标题 */
  document_title: string;
  /** 提交时间 */
  commit_time: number;
  /** 涉及领域 */
  involve_field_list: InvolveFieldListItemTypes[];
}
export interface ContentListItemTypes {
  /** 标题 */
  title: string;
  /** 内容 */
  body: string[];
}
export interface JudgeRecordInfoListItemTypes {
  /** 研判记录内容列表 */
  content_list: ContentListItemTypes[];
  /** 研判人 */
  judger: string;
  /** 操作类型 */
  action: string;
  /** 操作时间 */
  operation_time: string;
}
export interface UserInfoListItemTypes {
  /** 用户ID */
  id: number;
  /** 姓名 */
  name: string;
}
export interface GroupInfoListItemTypes {
  /** 大队ID */
  id: string;
  /** 上级ID */
  parent_id: string;
  /** 名称 */
  name: string;
}
export interface InvolveFieldListItemTypes {
  /** 一级领域 */
  first_field: string;
  /** 二级领域 */
  second_field: string;
}
export interface UserInfoListItemTypes {
  /** 用户ID */
  id: number;
  /** 账号 */
  account: string;
  /** 姓名 */
  name: string;
  /** 角色信息 */
  role_info: undefined;
  /** 大队信息 */
  group_info: undefined;
}
export interface GroupInfoListItemTypes {
  /** 大队ID */
  id: string;
  /** 上级ID */
  parent_id: string;
  /** 名称 */
  name: string;
}
export interface AuthorityListItemTypes {
  /** 名称 */
  name: string;
  /** 父级 */
  parent: string;
  /** 标题 */
  title: string;
  /** 是否选择 */
  selected: boolean;
}
export interface RoleInfoItemTypes {
  /** 角色ID */
  id: number;
  /** 名称 */
  name: string;
  /** 权限列表 */
  authorityList: AuthorityListItemTypes[];
}
export interface GroupInfoItemTypes {
  /** 大队ID */
  id: string;
  /** 上级ID */
  parent_id: string;
  /** 名称 */
  name: string;
}
export interface LogListItemTypes {
  /** undefined */
  id: number;
  /** 用户账号 */
  account: string;
  /** 用户姓名 */
  name: string;
  /** 用户角色id */
  role_id: number;
  /** 单位id */
  group_id: string;
  /** 操作模块 */
  operate_type: string;
  /** 操作内容 */
  content: string;
  /** 操作时间 */
  operation_time: string;
}
export interface AuthorityListItemTypes {
  /** 名称 */
  name: string;
  /** 父级 */
  parent: string;
  /** 标题 */
  title: string;
  /** 是否选择 */
  selected: boolean;
}
export interface RoleInfoItemTypes {
  /** 角色ID */
  id: number;
  /** 名称 */
  name: string;
  /** 权限列表 */
  authorityList: AuthorityListItemTypes[];
}
export interface GroupInfoItemTypes {
  /** 大队ID */
  id: string;
  /** 上级ID */
  parent_id: string;
  /** 名称 */
  name: string;
}
export interface FileInfoListItemTypes {
  /** 文件id */
  fileId: string;
  /** 文件名 */
  fileName: string;
}