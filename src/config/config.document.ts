/** 人员信息修改的 EntityName 映射 */

//  1  //身份证号
//  2  //手机号码
//  3  //日期
//  4  //日期-时间
//  5  //性别
//  6  //民族
//  7  //人物(姓名)
//  8  //机构
//  9  //地点
//  10 //时间
//  11 //户籍地
//  12 //居住地
//  13 //句号、分号、问号、感叹号
//  14 //疑似身份证号
//  15 //化名(绰号)
//  16 //QQ号
//  17 //微信号
//  18 //港澳通行证号
//  19 //台湾通行证号
//  20 //护照号码
//  21 //外国人护照号
//  22 //境外身份证号
//  23 //港澳台身份证号
//  24 //身高
//  25 //血型
//  26 //文化程度
//  27 //推特
//  28 //邮箱
//  29 //银行卡号
//  30 //外文姓名(英文名)
//  31 //政治面貌
//  32 //职业
//  33 //香港身份证
//  34 //澳门身份证
//  35 //台湾身份证
//  36 //香港回乡证
//  37 //澳门回乡证
//  38 //台湾回乡证
//  39 //微信昵称
//  40 //籍贯

/**
 * 实体与关键词数据
 */

type EntityItem = { label: string; value: string };
export interface EntityMapType {
  [propsName: string]: string;
}

/** 实体value值 */
export const userEntity: EntityItem[] = [
  { label: '全部', value: 'entityAll' },
  { label: '人名', value: 'people_name_list' },
  { label: '身份证号', value: 'id_number_list' },
  { label: '手机号码', value: 'phone_number_list' },
  { label: '人员关系', value: 'relationship_list' },
  { label: '地名', value: 'address_list' },
  { label: '日期', value: 'date_list' },
  { label: '机构团体名', value: 'organization_list' },
  { label: '其他证件号', value: 'other_id_number_list' },
  { label: '社交媒体号', value: 'media_account_list' },
  { label: '银行卡号', value: 'bank_card_number_list' },
  { label: '邮箱', value: 'e_mail_number_list' },
  { label: '文化程度', value: 'education_list' },
  { label: '政治面貌', value: 'political_identity_list' }
];

/** 实体名称 */
export const conditionResule: EntityMapType = {
  people_name_list: '人名',
  address_list: '地名',
  organization_list: '机构团体名',
  key_word_list: '关键词',
  id_number_list: '身份证号',
  phone_number_list: '手机号码',
  relationship_list: '人员关系',
  date_list: '日期',
  other_id_number_list: '其他证件号',
  media_account_list: '社交媒体号',
  bank_card_number_list: '银行卡号',
  e_mail_number_list: '邮箱',
  education_list: '文化程度',
  political_identity_list: '政治面貌'
};

/** 文档导入弹窗自定义领域下拉option */
export const level2Options = [
  {
    text: '反颠覆及意识形态',
    value: [
      { text: '境外民运', value: '境外民运' },
      { text: '独立中文笔会', value: '独立中文笔会' },
      { text: '意识形态(左派)', value: '意识形态(左派)' },
      { text: '政治重点人', value: '政治重点人' },
      { text: '政治重点人(律师)', value: '政治重点人(律师)' },
      { text: '政治重点人(非法组织)', value: '政治重点人(非法组织)' },
      { text: '政治重点人(非法刊物)', value: '政治重点人(非法刊物)' },
      { text: '其他', value: '其他' },
      { text: '政治重点人(两乱)', value: '政治重点人(两乱)' },
      { text: '政治重点人(两案)', value: '政治重点人(两案)' },
      { text: '政治重点人(两非)', value: '政治重点人(两非)' },
      { text: '政治重点人(街头)', value: '政治重点人(街头)' },
      { text: '政治重点人(自由化)', value: '政治重点人(自由化)' },
      { text: '意识形态(右派)', value: '意识形态(右派)' },
      { text: '网上煽动', value: '网上煽动' },
      { text: '政治重点人(律)', value: '政治重点人(律)' }
    ]
  },
  {
    text: '港澳台',
    value: [
      { text: '香港反对派', value: '香港反对派' },
      { text: '激进势力', value: '激进势力' },
      { text: '港独', value: '港独' },
      { text: '爱国爱港力量', value: '爱国爱港力量' },
      { text: '黑社会', value: '黑社会' },
      { text: '西方驻港机构', value: '西方驻港机构' },
      { text: '香港媒体', value: '香港媒体' },
      { text: '涉澳', value: '涉澳' },
      { text: '涉台', value: '涉台' },
      { text: '其他', value: '其他' },
      { text: '反修例', value: '反修例' }
    ]
  },
  {
    text: '劳工维权和非政府组织',
    value: [
      { text: '外国使领馆', value: '外国使领馆' },
      { text: '重点境外NGO', value: '重点境外NGO' },
      { text: '春风', value: '春风' },
      { text: '劳维律师事务所', value: '劳维律师事务所' },
      { text: '小小鸟', value: '小小鸟' },
      { text: '其他', value: '其他' },
      { text: '境外NGO及代表处', value: '境外NGO及代表处' },
      { text: '劳工维权组织', value: '劳工维权组织' },
      { text: '劳工维权重点人', value: '劳工维权重点人' },
      { text: '社会组织', value: '社会组织' }
    ]
  },
  {
    text: '宗教',
    value: [
      { text: '基督教', value: '外国使领馆' },
      { text: '天主教', value: '重点境外NGO' },
      { text: '东正教', value: '春风' },
      { text: '伊斯兰教', value: '劳维律师事务所' },
      { text: '佛教', value: '小小鸟' },
      { text: '藏传佛教', value: '其他' },
      { text: '道教', value: '境外NGO及代表处' },
      { text: '其他', value: '劳工维权组织' }
    ]
  },
  {
    text: '会道门',
    value: [
      { text: '一贯道', value: '一贯道' },
      { text: '善人道', value: '善人道' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '民族',
    value: [
      { text: '维族', value: '维族' },
      { text: '回族', value: '回族' },
      { text: '藏族', value: '藏族' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '法轮功',
    value: [{ text: '法轮功', value: '法轮功' }]
  },
  {
    text: '有害气功组织',
    value: [
      { text: '中华养生益智功', value: '中华养生益智功' },
      { text: '华藏功', value: '华藏功' },
      { text: '香功', value: '香功' },
      { text: '菩提功', value: '菩提功' },
      { text: '元极功', value: '元极功' },
      { text: '中华昆仑女神功', value: '中华昆仑女神功' },
      { text: '三三九乘元功', value: '三三九乘元功' },
      { text: '万法归一功', value: '万法归一功' },
      { text: '慈悲功', value: '慈悲功' },
      { text: '沈昌人体科技', value: '沈昌人体科技' },
      { text: '人宇特能功', value: '人宇特能功' },
      { text: '一通健康法', value: '一通健康法' },
      { text: '日月气功', value: '日月气功' },
      { text: '中国自然特异功', value: '中国自然特异功' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '其他邪教组织',
    value: [
      { text: '呼喊派', value: '呼喊派' },
      { text: '常受教', value: '常受教' },
      { text: '能力主', value: '能力主' },
      { text: '中华大陆行政执事站', value: '中华大陆行政执事站' },
      { text: '全能神', value: '全能神' },
      { text: '统一教', value: '统一教' },
      { text: '观音法门', value: '观音法门' },
      { text: '圆顿法门', value: '圆顿法门' },
      { text: '灵仙真佛宗', value: '灵仙真佛宗' },
      { text: '新约教会', value: '新约教会' },
      { text: '血水圣灵全备福音布道团', value: '血水圣灵全备福音布道团' },
      { text: '以利亚福音宣教总会', value: '以利亚福音宣教总会' },
      { text: '天父的儿女', value: '天父的儿女' },
      { text: '达米宣教会', value: '达米宣教会' },
      { text: '门徒会', value: '门徒会' },
      { text: '被立王', value: '被立王' },
      { text: '三班仆人派', value: '三班仆人派' },
      { text: '全范围教会', value: '全范围教会' },
      { text: '华南教会', value: '华南教会' },
      { text: '灵灵教', value: '灵灵教' },
      { text: '主神教', value: '主神教' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '类邪教组织',
    value: [
      { text: '光环密宗功', value: '光环密宗功' },
      { text: '相应飞渡昆仑', value: '相应飞渡昆仑' },
      { text: '心灵法门', value: '心灵法门' },
      { text: '雷尔教', value: '雷尔教' },
      { text: '银河联邦', value: '银河联邦' },
      { text: '茶道会', value: '茶道会' },
      { text: '韩国新天地教会', value: '韩国新天地教会' },
      { text: '其他', value: '其他' }
    ]
  },

  {
    text: '有害培训机构',
    value: [{ text: '有害培训机构', value: '有害培训机构' }]
  },
  {
    text: '涉军',
    value: [
      { text: '越战退役人员', value: '越战退役人员' },
      { text: '原基建工程兵', value: '原基建工程兵' },
      { text: '企退军转干部', value: '企退军转干部' },
      { text: '其他', value: '其他' }
    ]
  },

  {
    text: '涉日保钓及其他争端',
    value: [{ text: '涉日保钓及其他争端', value: '涉日保钓及其他争端' }]
  },

  {
    text: '高校文化',
    value: [
      { text: '校园反恐', value: '校园反恐' },
      { text: '宗教渗透', value: '宗教渗透' },
      { text: '非政府组织', value: '非政府组织' },
      { text: '新闻媒体', value: '新闻媒体' },
      { text: '校园舆情', value: '校园舆情' },
      { text: '校园不稳定因素', value: '校园不稳定因素' },
      { text: '其他', value: '其他' }
    ]
  },

  {
    text: '特殊利益群体',
    value: [
      { text: '企退协', value: '企退协' },
      { text: '寻子联盟', value: '寻子联盟' },
      { text: '临聘教师', value: '临聘教师' },
      { text: '港商权益关注组', value: '港商权益关注组' },
      { text: '网约车司机', value: '网约车司机' },
      { text: '出租车司机', value: '出租车司机' },
      { text: '货柜车司机', value: '货柜车司机' },
      { text: '失独家庭群体', value: '失独家庭群体' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '不稳定因素',
    value: [
      { text: '环境问题', value: '环境问题' },
      { text: '劳资纠纷', value: '劳资纠纷' },
      { text: '房产物管纠纷', value: '房产物管纠纷' },
      { text: '经济纠纷', value: '经济纠纷' },
      { text: '村务问题', value: '村务问题' },
      { text: '教育问题', value: '教育问题' },
      { text: '执法问题', value: '执法问题' },
      { text: '规划拆迁问题', value: '规划拆迁问题' },
      { text: '金融类涉众案事件', value: '金融类涉众案事件' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '热点舆情',
    value: [{ text: '热点舆情', value: '热点舆情' }]
  },
  {
    text: '周边国家（地区）',
    value: [
      { text: '东南亚', value: '东南亚' },
      { text: '朝鲜半岛', value: '朝鲜半岛' },
      { text: '日本', value: '日本' },
      { text: '美国', value: '美国' },
      { text: '其他', value: '其他' }
    ]
  },
  {
    text: '其他',
    value: [{ text: '其他', value: '其他' }]
  }
];
