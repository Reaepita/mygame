// 自我养成系统 MVU 变量结构（Zod 4）
// z / _ 由 forge 运行时注入，本文件禁止任何 import 语句

const 身体参数Schema = z.object({
  身高: z.coerce.number().prefault(1.68),
  体重: z.coerce.number().prefault(59),
  三围: z.string().prefault('124L-60-95'),
}).prefault({
  身高: 1.68,
  体重: 59,
  三围: '124L-60-95',
});

const 衣物Schema = z.object({
  着装风格: z.string().prefault('无 (当前处于全裸状态)'),
  上装: z.string().prefault('无'),
  下装: z.string().prefault('无'),
  内衣: z.string().prefault('无'),
  袜子: z.string().prefault('无'),
  鞋履: z.string().prefault('无'),
  可变大衣物: z.record(
    z.string().describe('衣物名'),
    z.string().describe('材质/款式/状态描述'),
  ).prefault({}),
}).prefault({
  着装风格: '无 (当前处于全裸状态)',
  上装: '无',
  下装: '无',
  内衣: '无',
  袜子: '无',
  鞋履: '无',
  可变大衣物: {},
});

const 点数统计Schema = z.object({
  总获得点数: z.coerce.number().prefault(100),
  总花费点数: z.coerce.number().prefault(0),
  点数交易日志: z.record(
    z.string().describe('时间戳 YYYY-MM-DD HH:MM:SS'),
    z.string().describe('获得/花费 数量 来源或用途'),
  ).prefault({}),
}).prefault({ 总获得点数: 100, 总花费点数: 0, 点数交易日志: {} });

const 私密档案Schema = z.object({
  口腔: z.string().prefault('湿润柔软/尚未进食，残留着睡前薄荷牙膏的凉意'),
  胸部: z.string().prefault('124L罩杯长乳/体积感与垂坠感并存/ふわぷに柔软/乳头因清晨凉意微微挺立'),
  腿部: z.string().prefault('修长白皙/久坐不出门的宅女线条，大腿软肉丰盈'),
  足部: z.string().prefault('尺寸普通/肤质细嫩/趾甲未涂甲油，脚心因盘腿久压微微泛红'),
}).prefault({
  口腔: '湿润柔软/尚未进食，残留着睡前薄荷牙膏的凉意',
  胸部: '124L罩杯长乳/体积感与垂坠感并存/ふわぷに柔软/乳头因清晨凉意微微挺立',
  腿部: '修长白皙/久坐不出门的宅女线条，大腿软肉丰盈',
  足部: '尺寸普通/肤质细嫩/趾甲未涂甲油，脚心因盘腿久压微微泛红',
});

const 角色Schema = z.object({
  当前位置: z.string().prefault('新出租屋'),
  神性侵蚀度: z.coerce.number().prefault(0).transform(v => _.clamp(v, 0, 100)),
  当前身体参数: 身体参数Schema,
  衣物: 衣物Schema,
  可用点数: z.coerce.number().prefault(100).transform(v => Math.max(0, v)),
  身体强度阶位: z.string().prefault('凡人'),
  速度阶位: z.string().prefault('凡人'),
  速度数值: z.coerce.number().prefault(10).transform(v => Math.max(0, v)),
  身体强度: z.coerce.number().prefault(10).transform(v => Math.max(0, v)),
  已解锁权能: z.record(
    z.string().describe('权能名'),
    z.string().describe('等级与效果'),
  ).prefault({}),
  点数统计: 点数统计Schema,
  颜值: z.coerce.number().prefault(78).transform(v => _.clamp(v, 0, 100)),
  当前气质: z.string().prefault('沉迷游戏的宅女气质/对现实略感疏离'),
  当前姿势: z.string().prefault('盘腿坐在床上，身体前倾，专注地凝视着眼前悬浮的蓝色面板'),
  临时状态: z.string().prefault('系统绑定后的余惊与兴奋交织，肾上腺素尚未退去'),
  身体改造: z.string().prefault('无'),
  私密档案: 私密档案Schema,
}).prefault({
  当前位置: '新出租屋',
  神性侵蚀度: 0,
  当前身体参数: {
    身高: 1.68,
    体重: 59,
    三围: '124L-60-95',
  },
  衣物: {
    着装风格: '无 (当前处于全裸状态)',
    上装: '无',
    下装: '无',
    内衣: '无',
    袜子: '无',
    鞋履: '无',
    可变大衣物: {},
  },
  可用点数: 100,
  身体强度阶位: '凡人',
  速度阶位: '凡人',
  速度数值: 10,
  身体强度: 10,
  已解锁权能: {},
  点数统计: { 总获得点数: 100, 总花费点数: 0, 点数交易日志: {} },
  颜值: 78,
  当前气质: '沉迷游戏的宅女气质/对现实略感疏离',
  当前姿势: '盘腿坐在床上，身体前倾，专注地凝视着眼前悬浮的蓝色面板',
  临时状态: '系统绑定后的余惊与兴奋交织，肾上腺素尚未退去',
  身体改造: '无',
  私密档案: {
    口腔: '湿润柔软/尚未进食，残留着睡前薄荷牙膏的凉意',
    胸部: '124L罩杯长乳/体积感与垂坠感并存/ふわぷに柔软/乳头因清晨凉意微微挺立',
    腿部: '修长白皙/久坐不出门的宅女线条，大腿软肉丰盈',
    足部: '尺寸普通/肤质细嫩/趾甲未涂甲油，脚心因盘腿久压微微泛红',
  },
});

const 已造成的损失Schema = z.object({
  经济损失: z.coerce.number().prefault(0).transform(v => Math.max(0, v)),
  人员伤亡: z.coerce.number().prefault(0).transform(v => Math.max(0, v)),
}).prefault({ 经济损失: 0, 人员伤亡: 0 });

const 环境Schema = z.object({
  已造成的损失: 已造成的损失Schema,
}).prefault({ 已造成的损失: { 经济损失: 0, 人员伤亡: 0 } });

const 世界Schema = z.object({
  当前纪元: z.string().prefault('神性萌芽'),
  日期: z.string().prefault('初始之日'),
  时间: z.string().prefault('09:10'),
  他人对该角色态度: z.record(
    z.string().describe('人物或群体名'),
    z.string().describe('态度描述'),
  ).prefault({}),
  已知魔女: z.record(
    z.string().describe('魔女名'),
    z.string().describe('独有能力/实力层级/性格/对主角态度/当前状态'),
  ).prefault({}),
  内心想法: z.string().prefault(''),
  环境: 环境Schema,
}).prefault({
  当前纪元: '神性萌芽',
  日期: '初始之日',
  时间: '09:10',
  他人对该角色态度: {},
  已知魔女: {},
  内心想法: '',
  环境: { 已造成的损失: { 经济损失: 0, 人员伤亡: 0 } },
});

export const Schema = z.object({
  角色: 角色Schema,
  世界: 世界Schema,
});

export type 养成状态 = z.infer<typeof Schema>;
