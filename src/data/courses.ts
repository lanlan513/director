import type { Course } from '../types'

/**
 * 课程示例数据
 * 覆盖八大知识领域，每门课程包含标题、简介、难度、时长、标签与章节结构
 */
export const COURSES: Course[] = [
  // ===== 导演基础 =====
  {
    id: 'dir-001',
    title: '导演的角色与全景视野',
    subtitle: '从剧本到成片的总指挥',
    description:
      '本课程系统介绍导演在影视创作中的核心定位：如何解读剧本、拆解场景、与各部门协作，并在拍摄与剪辑阶段保持统一的创作愿景。通过经典案例分析，理解导演如何在艺术表达与制作约束之间取得平衡。',
    categoryId: 'director-basics',
    difficulty: 'beginner',
    duration: 120,
    tags: ['导演职责', '创作流程', '团队协作'],
    cover: { from: '#f5a623', to: '#8b4513' },
    instructor: '陈牧野',
    chapters: [
      { id: 'ch1', title: '导演是谁：从作者论到协作创作', duration: 25 },
      { id: 'ch2', title: '剧本拆解与导演阐述', duration: 30 },
      { id: 'ch3', title: '前期筹备与拍摄计划', duration: 35 },
      { id: 'ch4', title: '后期阶段的导演把控', duration: 30 },
    ],
  },
  {
    id: 'dir-002',
    title: '分镜头脚本创作实战',
    subtitle: '把文字转化为可拍摄的画面',
    description:
      '学习如何将剧本文字转化为可视化的分镜头脚本，掌握镜头编号、景别标注、运镜说明与画面描述的规范写法，并通过短片案例练习完成一份可执行的分镜表。',
    categoryId: 'director-basics',
    difficulty: 'intermediate',
    duration: 90,
    tags: ['分镜', '可视化', '前期筹备'],
    cover: { from: '#d4880c', to: '#3d2817' },
    instructor: '林知遥',
    chapters: [
      { id: 'ch1', title: '分镜表的基本结构', duration: 20 },
      { id: 'ch2', title: '景别与运镜的标注语言', duration: 25 },
      { id: 'ch3', title: '绘制分镜草图', duration: 30 },
      { id: 'ch4', title: '分镜评审与修改', duration: 15 },
    ],
  },
  {
    id: 'dir-003',
    title: '剧组协作与现场指挥',
    subtitle: '导演的现场领导力',
    description:
      '拍摄现场是高压力的协作环境。本课程讲解导演如何与摄影、美术、录音、演员等部门高效沟通，处理现场突发状况，保持创作节奏与团队士气。',
    categoryId: 'director-basics',
    difficulty: 'intermediate',
    duration: 105,
    tags: ['现场管理', '沟通', '团队'],
    cover: { from: '#b8860b', to: '#4a3520' },
    instructor: '周屿',
    chapters: [
      { id: 'ch1', title: '导演与各部门的协作边界', duration: 25 },
      { id: 'ch2', title: '走戏与技术排练', duration: 30 },
      { id: 'ch3', title: '现场突发状况处理', duration: 30 },
      { id: 'ch4', title: '保持创作节奏', duration: 20 },
    ],
  },

  // ===== 剧本与叙事 =====
  {
    id: 'scr-001',
    title: '三幕式结构与故事引擎',
    subtitle: '搭建能驱动观众的剧情骨架',
    description:
      '从亚里士多德到悉德·菲尔德，拆解三幕式结构的核心要素：建置、对抗与解决，理解激励事件、转折点与高潮如何推动故事前进，并完成一个短片故事大纲。',
    categoryId: 'screenplay',
    difficulty: 'beginner',
    duration: 110,
    tags: ['三幕式', '故事结构', '大纲'],
    cover: { from: '#e2574c', to: '#7b1d1d' },
    instructor: '苏白',
    chapters: [
      { id: 'ch1', title: '故事的基本单位：场景', duration: 20 },
      { id: 'ch2', title: '第一幕：建置与激励事件', duration: 30 },
      { id: 'ch3', title: '第二幕：对抗与中点', duration: 35 },
      { id: 'ch4', title: '第三幕：高潮与结局', duration: 25 },
    ],
  },
  {
    id: 'scr-002',
    title: '人物弧光与动机设计',
    subtitle: '让角色自己推动剧情',
    description:
      '一个令人难忘的角色源于清晰的欲望与深层需求。本课程讲解人物弧线的三种类型，如何设计角色的外在目标与内在冲突，以及让动机驱动情节而非情节驱动角色。',
    categoryId: 'screenplay',
    difficulty: 'intermediate',
    duration: 95,
    tags: ['人物塑造', '弧光', '动机'],
    cover: { from: '#c0392b', to: '#5a1414' },
    instructor: '苏白',
    chapters: [
      { id: 'ch1', title: '欲望 vs 需求：人物的双层驱动', duration: 25 },
      { id: 'ch2', title: '正向弧光、负向弧光与平坦弧光', duration: 25 },
      { id: 'ch3', title: '用行动而非台词塑造人物', duration: 25 },
      { id: 'ch4', title: '人物小传写作练习', duration: 20 },
    ],
  },
  {
    id: 'scr-003',
    title: '非线性叙事与时间重构',
    subtitle: '打破线性时间的叙事实验',
    description:
      '倒叙、插叙、多线并行、环形叙事——当故事不再按时间顺序讲述时，导演如何用结构本身制造悬念与意义。通过《记忆碎片》《低俗小说》等案例理解非线性叙事的设计原则。',
    categoryId: 'screenplay',
    difficulty: 'advanced',
    duration: 130,
    tags: ['非线性', '叙事结构', '时间'],
    cover: { from: '#a93226', to: '#3d0c0c' },
    instructor: '苏白',
    chapters: [
      { id: 'ch1', title: '为什么要打破线性', duration: 25 },
      { id: 'ch2', title: '倒叙与框架叙事', duration: 30 },
      { id: 'ch3', title: '多线并行与交叉剪辑', duration: 40 },
      { id: 'ch4', title: '环形叙事与闭合结构', duration: 35 },
    ],
  },

  // ===== 镜头语言 =====
  {
    id: 'cam-001',
    title: '景别的语法与情绪功能',
    subtitle: '从大远景到大特写的表意系统',
    description:
      '景别不仅是画面大小，更是导演与观众之间的心理距离。本课程逐一拆解大远景、远景、全景、中景、近景、特写与大特写的叙事功能，以及何时切换景别以引导观众情绪。',
    categoryId: 'camera-language',
    difficulty: 'beginner',
    duration: 85,
    tags: ['景别', '镜头语法', '情绪'],
    cover: { from: '#3aa6ff', to: '#0d3b66' },
    instructor: '何川',
    chapters: [
      { id: 'ch1', title: '景别的物理与心理距离', duration: 20 },
      { id: 'ch2', title: '环境与人物的比例关系', duration: 25 },
      { id: 'ch3', title: '特写的力量与滥用', duration: 25 },
      { id: 'ch4', title: '景别切换的节奏控制', duration: 15 },
    ],
  },
  {
    id: 'cam-002',
    title: '运镜手法与空间表达',
    subtitle: '推、拉、摇、移、跟的叙事逻辑',
    description:
      '运动镜头赋予画面时间维度。系统讲解推镜、拉镜、摇镜、移镜、跟随镜头与升降镜头的运动逻辑，以及手持、斯坦尼康、轨道、摇臂等器材如何影响画面质感与观众感受。',
    categoryId: 'camera-language',
    difficulty: 'intermediate',
    duration: 120,
    tags: ['运镜', '运动镜头', '空间'],
    cover: { from: '#2980b9', to: '#123a5c' },
    instructor: '何川',
    chapters: [
      { id: 'ch1', title: '为什么运动：动机优先于技巧', duration: 20 },
      { id: 'ch2', title: '推与拉：心理距离的变化', duration: 25 },
      { id: 'ch3', title: '摇与移：空间的揭示', duration: 30 },
      { id: 'ch4', title: '跟随与环绕：沉浸与张力', duration: 25 },
      { id: 'ch5', title: '器材选择与画面质感', duration: 20 },
    ],
  },
  {
    id: 'cam-003',
    title: '焦距、景深与视角',
    subtitle: '光学如何塑造我们看世界的方式',
    description:
      '广角、标准、长焦与微距镜头各有其视觉性格。本课程讲解焦距对透视、景深与空间压缩的影响，以及主观镜头、客观镜头、过肩镜头等视角如何建立观众与角色的关系。',
    categoryId: 'camera-language',
    difficulty: 'intermediate',
    duration: 100,
    tags: ['焦距', '景深', '视角'],
    cover: { from: '#1f6feb', to: '#0a2540' },
    instructor: '何川',
    chapters: [
      { id: 'ch1', title: '焦距与透视关系', duration: 25 },
      { id: 'ch2', title: '景深的叙事控制', duration: 30 },
      { id: 'ch3', title: '主观与客观视角', duration: 25 },
      { id: 'ch4', title: '过肩镜头与对话场景', duration: 20 },
    ],
  },

  // ===== 场面调度 =====
  {
    id: 'mes-001',
    title: '场面调度基础：演员与空间',
    subtitle: '在二维画面中构建三维叙事',
    description:
      '场面调度是导演在画框内安排演员与布景的艺术。本课程讲解前景、中景、背景的层次运用，演员走位的轴线原则，以及如何通过空间关系表达人物权力与情感。',
    categoryId: 'mise-en-scene',
    difficulty: 'beginner',
    duration: 100,
    tags: ['场面调度', '空间', '走位'],
    cover: { from: '#9b59ff', to: '#3b1a6b' },
    instructor: '叶知秋',
    chapters: [
      { id: 'ch1', title: '画框内的空间层次', duration: 20 },
      { id: 'ch2', title: '180度轴线法则', duration: 25 },
      { id: 'ch3', title: '走位与权力关系', duration: 30 },
      { id: 'ch4', title: '纵深调度 vs 横向调度', duration: 25 },
    ],
  },
  {
    id: 'mes-002',
    title: '光影与色彩的叙事功能',
    subtitle: '用光线和颜色讲述潜台词',
    description:
      '光不只是照亮，色彩不只是装饰。学习三点布光、伦勃朗光、逆光剪影等布光技法，理解暖冷色调、饱和度与对比度如何暗示情绪、时间与人物状态。',
    categoryId: 'mise-en-scene',
    difficulty: 'intermediate',
    duration: 115,
    tags: ['布光', '色彩', '情绪'],
    cover: { from: '#8e44ad', to: '#2c1340' },
    instructor: '叶知秋',
    chapters: [
      { id: 'ch1', title: '光的方向与质感', duration: 25 },
      { id: 'ch2', title: '三点布光与变体', duration: 30 },
      { id: 'ch3', title: '色彩心理学与调色板', duration: 30 },
      { id: 'ch4', title: '色彩与情绪的案例分析', duration: 30 },
    ],
  },
  {
    id: 'mes-003',
    title: '长镜头调度与场面设计',
    subtitle: '在一个镜头内完成完整叙事',
    description:
      '长镜头是场面调度的终极考验。分析《鸟人》《1917》等作品的长镜头设计，学习如何在不剪辑的情况下通过演员调度、摄影机运动与场景转换维持戏剧张力。',
    categoryId: 'mise-en-scene',
    difficulty: 'advanced',
    duration: 140,
    tags: ['长镜头', '调度', '一镜到底'],
    cover: { from: '#7d3c98', to: '#1f0b2e' },
    instructor: '叶知秋',
    chapters: [
      { id: 'ch1', title: '长镜头的叙事价值', duration: 25 },
      { id: 'ch2', title: '场景转换的调度技巧', duration: 35 },
      { id: 'ch3', title: '演员与摄影机的协同排练', duration: 40 },
      { id: 'ch4', title: '技术实现与隐藏剪辑', duration: 40 },
    ],
  },

  // ===== 演员指导 =====
  {
    id: 'act-001',
    title: '与演员建立有效沟通',
    subtitle: '从结果导向到过程引导',
    description:
      '导演最常见的错误是告诉演员"演得悲伤一点"。本课程讲解如何用动作目标、情境想象与潜台词替代结果式指令，帮助演员找到真实可信的表演动机。',
    categoryId: 'actor-guidance',
    difficulty: 'beginner',
    duration: 90,
    tags: ['演员沟通', '表演引导', '台词'],
    cover: { from: '#ff6b9d', to: '#7b2244' },
    instructor: '沈澜',
    chapters: [
      { id: 'ch1', title: '结果式指令的陷阱', duration: 20 },
      { id: 'ch2', title: '用动作目标引导表演', duration: 25 },
      { id: 'ch3', title: '情境与想象的力量', duration: 25 },
      { id: 'ch4', title: '潜台词与潜层动作', duration: 20 },
    ],
  },
  {
    id: 'act-002',
    title: '情绪戏与高潮戏的指导',
    subtitle: '引导演员抵达真实的情感深处',
    description:
      '哭戏、争吵戏、爆发戏对演员和导演都是挑战。学习如何为情绪戏建立安全的创作空间，使用情绪记忆、感官触发与节奏控制，帮助演员在镜头前释放真实情感而不流于夸张。',
    categoryId: 'actor-guidance',
    difficulty: 'intermediate',
    duration: 105,
    tags: ['情绪表演', '高潮戏', '安全空间'],
    cover: { from: '#e84393', to: '#5a1430' },
    instructor: '沈澜',
    chapters: [
      { id: 'ch1', title: '情绪戏的准备与铺垫', duration: 25 },
      { id: 'ch2', title: '情绪记忆与替代法', duration: 30 },
      { id: 'ch3', title: '节奏：情绪的呼吸', duration: 25 },
      { id: 'ch4', title: '保护演员的心理安全', duration: 25 },
    ],
  },
  {
    id: 'act-003',
    title: '群像戏与即兴表演',
    subtitle: '让多个角色在画面中各有生命',
    description:
      '群像戏需要导演同时调度多名演员的注意力与互动。本课程讲解群像构图中的焦点分配、即兴表演的边界与引导，以及如何让配角和背景演员也有存在感。',
    categoryId: 'actor-guidance',
    difficulty: 'advanced',
    duration: 110,
    tags: ['群像', '即兴', '群戏调度'],
    cover: { from: '#d63384', to: '#3d0c22' },
    instructor: '沈澜',
    chapters: [
      { id: 'ch1', title: '群像中的焦点与层次', duration: 25 },
      { id: 'ch2', title: '即兴表演的引导技巧', duration: 30 },
      { id: 'ch3', title: '背景演员的存在感', duration: 25 },
      { id: 'ch4', title: '群戏的排练方法', duration: 30 },
    ],
  },

  // ===== 摄影构图 =====
  {
    id: 'cin-001',
    title: '构图法则与画面平衡',
    subtitle: '三分法、对称与黄金螺旋的实践',
    description:
      '构图是摄影的语法。系统学习三分法、对称构图、引导线、框架构图与黄金螺旋，理解如何在画框内安排视觉元素以引导观众视线、表达主题。',
    categoryId: 'cinematography',
    difficulty: 'beginner',
    duration: 95,
    tags: ['构图', '视觉引导', '平衡'],
    cover: { from: '#2ecc71', to: '#0e4f2c' },
    instructor: '江屿',
    chapters: [
      { id: 'ch1', title: '画框与视觉重量', duration: 20 },
      { id: 'ch2', title: '三分法与井字构图', duration: 20 },
      { id: 'ch3', title: '对称与不对称', duration: 25 },
      { id: 'ch4', title: '引导线与框架构图', duration: 30 },
    ],
  },
  {
    id: 'cin-002',
    title: '自然光与人工光的造型',
    subtitle: '用光线塑造体积、质感与时间',
    description:
      '光线是摄影的画笔。学习自然光的时段选择与利用，人工光的灯具特性与布光方案，以及如何通过光比、光质与光位塑造人物立体感与画面氛围。',
    categoryId: 'cinematography',
    difficulty: 'intermediate',
    duration: 125,
    tags: ['光线', '布光', '质感'],
    cover: { from: '#27ae60', to: '#0a3d1f' },
    instructor: '江屿',
    chapters: [
      { id: 'ch1', title: '自然光的时段魔法', duration: 25 },
      { id: 'ch2', title: '人工灯具的特性', duration: 30 },
      { id: 'ch3', title: '光比与光质的控制', duration: 35 },
      { id: 'ch4', title: '氛围光与实用光', duration: 35 },
    ],
  },
  {
    id: 'cin-003',
    title: '色彩分级与视觉风格',
    subtitle: '从拍摄到调色的色彩管理',
    description:
      '色彩是最直接的情绪语言。学习色彩理论在摄影中的应用、拍摄时的白平衡与Log设置，以及后期调色如何建立统一的视觉风格，服务于故事的情感基调。',
    categoryId: 'cinematography',
    difficulty: 'advanced',
    duration: 135,
    tags: ['色彩', '调色', '视觉风格'],
    cover: { from: '#1e8449', to: '#072410' },
    instructor: '江屿',
    chapters: [
      { id: 'ch1', title: '色彩理论与色温', duration: 30 },
      { id: 'ch2', title: '拍摄时的色彩控制', duration: 35 },
      { id: 'ch3', title: 'Log 与色彩空间', duration: 30 },
      { id: 'ch4', title: '建立统一调色风格', duration: 40 },
    ],
  },

  // ===== 声音设计 =====
  {
    id: 'snd-001',
    title: '声音设计的层次与逻辑',
    subtitle: '构建看不见的叙事世界',
    description:
      '声音由对白、音效、环境声与配乐四个层次构成。本课程讲解各层次的功能定位，如何通过声音建立空间感、时间感与心理氛围，以及声画关系的基本类型。',
    categoryId: 'sound-design',
    difficulty: 'beginner',
    duration: 100,
    tags: ['声音层次', '声画关系', '空间感'],
    cover: { from: '#1abc9c', to: '#0d5c4f' },
    instructor: '温屿',
    chapters: [
      { id: 'ch1', title: '声音的四个层次', duration: 20 },
      { id: 'ch2', title: '环境声与空间感', duration: 25 },
      { id: 'ch3', title: '声画同步与声画分立', duration: 30 },
      { id: 'ch4', title: '声音的叙事功能', duration: 25 },
    ],
  },
  {
    id: 'snd-002',
    title: '对白录制与后期处理',
    subtitle: '让每一句台词都清晰可信',
    description:
      '对白是观众获取信息的主要渠道。学习同期录音的话筒选择与布置、如何规避环境噪声，以及后期对白的降噪、均衡与音量标准化处理流程。',
    categoryId: 'sound-design',
    difficulty: 'intermediate',
    duration: 110,
    tags: ['录音', '对白', '后期'],
    cover: { from: '#16a085', to: '#083d35' },
    instructor: '温屿',
    chapters: [
      { id: 'ch1', title: '话筒类型与指向性', duration: 25 },
      { id: 'ch2', title: '同期录音的布置技巧', duration: 30 },
      { id: 'ch3', title: '降噪与修复', duration: 30 },
      { id: 'ch4', title: '均衡与动态处理', duration: 25 },
    ],
  },
  {
    id: 'snd-003',
    title: '配乐与情绪节奏',
    subtitle: '音乐如何操纵观众心跳',
    description:
      '配乐是电影情绪的隐形指挥。学习如何为场景选择合适的音乐风格、节奏与配器，理解配乐的进入与退出时机，以及音乐留白对张力的放大作用。',
    categoryId: 'sound-design',
    difficulty: 'intermediate',
    duration: 95,
    tags: ['配乐', '情绪', '节奏'],
    cover: { from: '#138d75', to: '#062e27' },
    instructor: '温屿',
    chapters: [
      { id: 'ch1', title: '音乐的叙事功能', duration: 20 },
      { id: 'ch2', title: '配乐的风格选择', duration: 25 },
      { id: 'ch3', title: '进入与退出的时机', duration: 25 },
      { id: 'ch4', title: '沉默的力量：音乐留白', duration: 25 },
    ],
  },

  // ===== 剪辑节奏 =====
  {
    id: 'edt-001',
    title: '剪辑的语法：连续性剪辑',
    subtitle: '建立顺畅的时空幻觉',
    description:
      '连续性剪辑是好莱坞经典叙事的基础。学习动作衔接、视线匹配、景别递进与 30 度法则，理解如何在不打断观众沉浸感的前提下完成时空压缩。',
    categoryId: 'editing',
    difficulty: 'beginner',
    duration: 100,
    tags: ['连续性剪辑', '衔接', '时空'],
    cover: { from: '#f39c12', to: '#7a4a06' },
    instructor: '唐墨',
    chapters: [
      { id: 'ch1', title: '剪辑点的选择', duration: 20 },
      { id: 'ch2', title: '动作衔接与视线匹配', duration: 25 },
      { id: 'ch3', title: '景别递进与 30 度法则', duration: 30 },
      { id: 'ch4', title: '时空压缩与扩展', duration: 25 },
    ],
  },
  {
    id: 'edt-002',
    title: '蒙太奇与节奏控制',
    subtitle: '用剪辑创造意义与张力',
    description:
      '从库里肖夫到爱森斯坦，蒙太奇证明了剪辑不只是连接，更是创造。学习叙事蒙太奇与表现蒙太奇的类型，以及通过镜头长度、景别变化与音效配合控制节奏。',
    categoryId: 'editing',
    difficulty: 'intermediate',
    duration: 120,
    tags: ['蒙太奇', '节奏', '张力'],
    cover: { from: '#e67e22', to: '#5d2e04' },
    instructor: '唐墨',
    chapters: [
      { id: 'ch1', title: '库里肖夫效应', duration: 20 },
      { id: 'ch2', title: '叙事蒙太奇与表现蒙太奇', duration: 30 },
      { id: 'ch3', title: '镜头长度与节奏', duration: 35 },
      { id: 'ch4', title: '音画同步的节奏设计', duration: 35 },
    ],
  },
  {
    id: 'edt-003',
    title: '短片剪辑实战：从粗剪到精剪',
    subtitle: '完整的短片剪辑工作流',
    description:
      '以一部 10 分钟短片为例，讲解从素材整理、粗剪、精剪、声音编辑到调色输出的完整流程，理解每个阶段的目标与判断标准。',
    categoryId: 'editing',
    difficulty: 'advanced',
    duration: 150,
    tags: ['短片', '工作流', '精剪'],
    cover: { from: '#d35400', to: '#4a1e00' },
    instructor: '唐墨',
    chapters: [
      { id: 'ch1', title: '素材整理与标记', duration: 25 },
      { id: 'ch2', title: '粗剪：搭建故事骨架', duration: 35 },
      { id: 'ch3', title: '精剪：节奏与细节打磨', duration: 40 },
      { id: 'ch4', title: '声音编辑与混音', duration: 25 },
      { id: 'ch5', title: '调色与输出', duration: 25 },
    ],
  },
]

/** 按分类 ID 获取课程 */
export const getCoursesByCategory = (categoryId: string): Course[] =>
  COURSES.filter((c) => c.categoryId === categoryId)

/** 按 ID 获取课程 */
export const getCourseById = (id: string): Course | undefined =>
  COURSES.find((c) => c.id === id)

/** 搜索课程（标题、副标题、标签、讲师） */
export const searchCourses = (keyword: string): Course[] => {
  const k = keyword.trim().toLowerCase()
  if (!k) return COURSES
  return COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(k) ||
      c.subtitle.toLowerCase().includes(k) ||
      c.description.toLowerCase().includes(k) ||
      c.instructor.toLowerCase().includes(k) ||
      c.tags.some((t) => t.toLowerCase().includes(k)),
  )
}
