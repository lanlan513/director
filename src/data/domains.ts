import type { DomainModule } from '../types/domain'
import { CATEGORIES } from './categories'
import { getCoursesByCategory } from './courses'

/**
 * 八大专业学习模块
 *
 * 每个领域拥有独立的知识结构（learningGoals / knowledgeDirections /
 * representativeContent），与通用课程库（Course）解耦。课程仅作为"关联内容"
 * 通过 getCoursesByCategory 弱关联引入，便于未来各领域在独立分支中扩展。
 *
 * 修改某一领域的数据不会影响其他领域。
 */
export const DOMAINS: DomainModule[] = [
  // ============ 导演基础 ============
  {
    id: 'director-basics',
    name: CATEGORIES.find((c) => c.id === 'director-basics')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'director-basics')!.englishName,
    description:
      '导演的角色定位、工作流程与创作思维。从剧本解读到成片交付，建立导演的全局视野与协作能力。',
    icon: 'Clapperboard',
    accent: CATEGORIES.find((c) => c.id === 'director-basics')!.accent,
    learningGoals: [
      '理解导演在影视创作中的核心定位与职责边界',
      '掌握从剧本到成片的完整创作流程',
      '能够与摄影、美术、录音、演员等部门高效协作',
      '建立统一的创作愿景并贯穿拍摄与后期',
    ],
    knowledgeDirections: [
      {
        name: '导演职责与角色',
        summary: '导演作为创作核心的定位与权限',
        keyPoints: ['作者论与协作创作', '导演阐述的撰写', '艺术表达与制作约束的平衡', '决策优先级'],
      },
      {
        name: '创作流程',
        summary: '从前期到后期的全流程把控',
        keyPoints: ['剧本拆解与场景分析', '前期筹备与拍摄计划', '现场指挥与走戏', '后期阶段的导演把控'],
      },
      {
        name: '分镜头脚本',
        summary: '把文字转化为可拍摄画面的能力',
        keyPoints: ['分镜表的基本结构', '景别与运镜的标注语言', '分镜草图绘制', '分镜评审与修改'],
      },
      {
        name: '剧组协作',
        summary: '与各部门沟通的现场领导力',
        keyPoints: ['与各部门的协作边界', '走戏与技术排练', '现场突发状况处理', '保持创作节奏与士气'],
      },
    ],
    representativeContent: [
      {
        title: '导演阐述 (Director\'s Statement)',
        description: '开拍前向全剧组阐明创作意图、视觉风格与叙事基调的核心文档，是统一创作愿景的锚点。',
        tags: ['前期筹备', '沟通'],
      },
      {
        title: '主镜头思维 (Master Shot)',
        description: '先用一个全景镜头覆盖整场戏的时空关系，再切入近景补充细节，保证剪辑时的时空连贯性。',
        tags: ['拍摄', '调度'],
      },
      {
        title: '现场进度表 (Shooting Schedule)',
        description: '按场景而非剧本顺序安排拍摄，平衡演员档期、场地与光线，是现场管理的核心工具。',
        tags: ['现场管理', '计划'],
      },
    ],
  },

  // ============ 剧本与叙事 ============
  {
    id: 'screenplay',
    name: CATEGORIES.find((c) => c.id === 'screenplay')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'screenplay')!.englishName,
    description:
      '故事结构、人物弧光与叙事时间。学会用画面讲述故事，让人物自己推动情节，用结构制造悬念与意义。',
    icon: 'BookOpen',
    accent: CATEGORIES.find((c) => c.id === 'screenplay')!.accent,
    learningGoals: [
      '掌握经典叙事结构并能搭建故事骨架',
      '设计有欲望、有弧光、有动机的人物',
      '理解冲突如何驱动情节而非情节驱动人物',
      '运用非线性叙事结构制造悬念与意义',
    ],
    knowledgeDirections: [
      {
        name: '人物',
        summary: '角色塑造与弧光设计',
        keyPoints: ['欲望 vs 需求：双层驱动', '正向/负向/平坦弧光', '用行动而非台词塑造人物', '人物小传与潜台词'],
      },
      {
        name: '冲突',
        summary: '故事推进的核心引擎',
        keyPoints: ['外部冲突与内部冲突', '人物之间的目标对立', '冲突的升级与转折点', '没有冲突就没有场景'],
      },
      {
        name: '情节结构',
        summary: '三幕式与经典叙事骨架',
        keyPoints: ['建置-对抗-解决', '激励事件与转折点', '中点与高潮', '场景的进出场原则'],
      },
      {
        name: '叙事时间',
        summary: '线性与非线性的时间重构',
        keyPoints: ['倒叙与框架叙事', '多线并行与交叉剪辑', '环形叙事与闭合结构', '时间压缩与扩展'],
      },
    ],
    representativeContent: [
      {
        title: '激励事件 (Inciting Incident)',
        description: '打破主角日常平衡的事件，将主角推入故事主线，是第一幕的核心转折点。',
        tags: ['三幕式', '结构'],
      },
      {
        title: '人物弧光 (Character Arc)',
        description: '主角从故事开始到结束的内在变化轨迹，正向弧光让角色成长，负向弧光让角色堕落。',
        tags: ['人物', '弧光'],
      },
      {
        title: '展示而非告知 (Show, Don\'t Tell)',
        description: '通过动作、细节与情境传递信息，避免用台词直接说明角色状态或故事背景。',
        tags: ['叙事技巧', '台词'],
      },
    ],
  },

  // ============ 镜头语言 ============
  {
    id: 'camera-language',
    name: CATEGORIES.find((c) => c.id === 'camera-language')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'camera-language')!.englishName,
    description:
      '景别、机位与镜头运动。理解镜头如何传递情绪与信息，掌握电影摄影的基本语法。',
    icon: 'Camera',
    accent: CATEGORIES.find((c) => c.id === 'camera-language')!.accent,
    learningGoals: [
      '掌握各类景别的叙事功能与切换时机',
      '理解机位、角度与焦距如何塑造空间与心理',
      '运用不同运镜手法表达情绪与节奏',
      '建立"动机优先于技巧"的镜头选择思维',
    ],
    knowledgeDirections: [
      {
        name: '景别',
        summary: '画框大小决定的心理距离',
        keyPoints: ['大远景/远景/全景', '中景/近景', '特写/大特写', '景别切换的节奏控制'],
      },
      {
        name: '机位',
        summary: '摄影机的位置与角度',
        keyPoints: ['平视/俯拍/仰拍', '主观镜头与客观镜头', '过肩镜头与对话场景', '荷兰角与倾斜构图'],
      },
      {
        name: '镜头运动',
        summary: '运动赋予画面时间维度',
        keyPoints: ['推镜与拉镜：心理距离变化', '摇镜与移镜：空间揭示', '跟随与环绕：沉浸与张力', '手持与稳定器的质感差异'],
      },
    ],
    representativeContent: [
      {
        title: '30 度法则',
        description: '同一主体的连续两个镜头，机位角度差异需大于 30 度或景别有明显变化，否则会产生跳切。',
        tags: ['衔接', '剪辑语法'],
      },
      {
        title: '推镜头的动机',
        description: '推镜应服务于心理聚焦或情绪递进，无动机的推镜会让观众感到突兀与刻意。',
        tags: ['运镜', '动机'],
      },
      {
        title: '特写的力量与滥用',
        description: '特写是最强的情绪强调，但滥用会削弱其冲击力，关键在于克制与时机。',
        tags: ['景别', '情绪'],
      },
    ],
  },

  // ============ 场面调度 ============
  {
    id: 'mise-en-scene',
    name: CATEGORIES.find((c) => c.id === 'mise-en-scene')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'mise-en-scene')!.englishName,
    description:
      '演员走位、空间层次与光影色彩的协同编排。在画框内构建三维叙事，用空间关系表达权力与情感。',
    icon: 'Grid3x3',
    accent: CATEGORIES.find((c) => c.id === 'mise-en-scene')!.accent,
    learningGoals: [
      '掌握画框内的空间层次与纵深调度',
      '运用演员走位表达人物关系与权力',
      '理解 180 度轴线法则并合理运用',
      '通过光影与色彩传递潜台词与情绪',
    ],
    knowledgeDirections: [
      {
        name: '空间关系',
        summary: '画框内的层次与纵深',
        keyPoints: ['前景/中景/背景', '纵深调度 vs 横向调度', '框架构图与画中画', '留白与视觉重量'],
      },
      {
        name: '人物走位',
        summary: '演员调度与轴线原则',
        keyPoints: ['180 度轴线法则', '走位与权力关系', '双人对话的机位调度', '群像的焦点分配'],
      },
      {
        name: '光影',
        summary: '光线作为叙事手段',
        keyPoints: ['光的方向与质感', '三点布光与变体', '伦勃朗光与剪影', '自然光与人工光的结合'],
      },
      {
        name: '色彩',
        summary: '颜色的情绪与叙事功能',
        keyPoints: ['暖冷色调的情绪暗示', '饱和度与对比度', '色彩心理学与调色板', '色彩与人物状态的关联'],
      },
    ],
    representativeContent: [
      {
        title: '180 度轴线法则',
        description: '在对话场景中，摄影机应始终保持在两个主体连线的同一侧，避免观众对空间方向产生混淆。',
        tags: ['轴线', '对话调度'],
      },
      {
        title: '高低位调度',
        description: '通过演员站位的高低差表达权力关系——高位者往往拥有主导权，低位者处于弱势。',
        tags: ['走位', '权力关系'],
      },
      {
        title: '伦勃朗光',
        description: '在人物面部一侧形成三角形光斑的布光方式，常用于塑造立体感与戏剧性。',
        tags: ['布光', '质感'],
      },
    ],
  },

  // ============ 演员指导 ============
  {
    id: 'actor-guidance',
    name: CATEGORIES.find((c) => c.id === 'actor-guidance')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'actor-guidance')!.englishName,
    description:
      '与演员沟通、引导表演、调度情绪。用动作目标与情境想象替代结果式指令，让角色在镜头前真实可信。',
    icon: 'Users',
    accent: CATEGORIES.find((c) => c.id === 'actor-guidance')!.accent,
    learningGoals: [
      '掌握用动作目标引导表演的方法',
      '学会为情绪戏建立安全的创作空间',
      '理解即兴表演的边界与引导技巧',
      '能够调度群像戏中多名演员的焦点',
    ],
    knowledgeDirections: [
      {
        name: '沟通方法',
        summary: '从结果导向到过程引导',
        keyPoints: ['结果式指令的陷阱', '用动作目标引导表演', '情境与想象的力量', '潜台词与潜层动作'],
      },
      {
        name: '情绪引导',
        summary: '抵达真实情感深处',
        keyPoints: ['情绪戏的准备与铺垫', '情绪记忆与替代法', '节奏：情绪的呼吸', '保护演员的心理安全'],
      },
      {
        name: '群像调度',
        summary: '让多个角色各有生命',
        keyPoints: ['群像中的焦点与层次', '背景演员的存在感', '群戏的排练方法', '注意力的分配与转移'],
      },
      {
        name: '即兴表演',
        summary: '可控范围内的即兴创造',
        keyPoints: ['即兴的边界与规则', '"是的，而且"原则', '即兴与剧本的平衡', '捕捉意外的真实瞬间'],
      },
    ],
    representativeContent: [
      {
        title: '动作目标 (Action Verb)',
        description: '用具体的动作动词（如"说服""试探""回避"）替代情绪形容词（如"悲伤""愤怒"），帮助演员找到可执行的表演路径。',
        tags: ['沟通', '表演引导'],
      },
      {
        title: '安全空间',
        description: '在拍摄情绪戏前，导演需与演员建立信任与边界，让演员敢于暴露脆弱而不感到被评判。',
        tags: ['情绪戏', '心理安全'],
      },
      {
        title: '潜台词',
        description: '角色台词背后的真实意图。好的表演让观众听出"没说出口的话"，导演需引导演员理解潜层动机。',
        tags: ['表演', '台词'],
      },
    ],
  },

  // ============ 摄影构图 ============
  {
    id: 'cinematography',
    name: CATEGORIES.find((c) => c.id === 'cinematography')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'cinematography')!.englishName,
    description:
      '光线、色彩、景深与画面构图。用摄影造型塑造视觉风格，让每一帧都服务于故事的情感基调。',
    icon: 'Aperture',
    accent: CATEGORIES.find((c) => c.id === 'cinematography')!.accent,
    learningGoals: [
      '掌握经典构图法则并能服务于叙事',
      '理解自然光与人工光的造型逻辑',
      '运用焦距与景深控制视觉焦点',
      '建立从拍摄到调色的统一色彩风格',
    ],
    knowledgeDirections: [
      {
        name: '构图',
        summary: '画框内视觉元素的组织',
        keyPoints: ['三分法与井字构图', '对称与不对称', '引导线与框架构图', '黄金螺旋与视觉平衡'],
      },
      {
        name: '光线',
        summary: '光线塑造体积与质感',
        keyPoints: ['自然光的时段选择', '人工灯具的特性', '光比与光质的控制', '氛围光与实用光'],
      },
      {
        name: '景深与焦距',
        summary: '光学如何塑造空间',
        keyPoints: ['焦距与透视关系', '景深的叙事控制', '浅景深的焦点引导', '广角与长焦的视觉性格'],
      },
      {
        name: '色彩',
        summary: '从拍摄到调色的色彩管理',
        keyPoints: ['色彩理论与色温', '拍摄时的白平衡', 'Log 与色彩空间', '建立统一调色风格'],
      },
    ],
    representativeContent: [
      {
        title: '黄金时段 (Golden Hour)',
        description: '日出后与日落前的短暂时段，光线柔和呈暖金色，是拍摄人物与风景的理想光线。',
        tags: ['自然光', '时段'],
      },
      {
        title: '浅景深',
        description: '通过大光圈或长焦距使背景虚化，将观众注意力聚焦于主体，常用于人物特写与情感表达。',
        tags: ['景深', '焦点'],
      },
      {
        title: '互补色对比',
        description: '在色轮上相对的颜色（如蓝与橙）并置时会产生强烈的视觉张力，常用于塑造冲突或突出主体。',
        tags: ['色彩', '对比'],
      },
    ],
  },

  // ============ 声音设计 ============
  {
    id: 'sound-design',
    name: CATEGORIES.find((c) => c.id === 'sound-design')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'sound-design')!.englishName,
    description:
      '对白、环境声、音效与音乐的层次设计。声音是看不见的叙事，构建空间感、时间感与心理氛围。',
    icon: 'Volume2',
    accent: CATEGORIES.find((c) => c.id === 'sound-design')!.accent,
    learningGoals: [
      '理解声音四个层次的功能与配合',
      '掌握同期录音与后期对白处理',
      '运用环境声建立空间感与真实感',
      '理解配乐的进入/退出时机与情绪功能',
    ],
    knowledgeDirections: [
      {
        name: '对白',
        summary: '信息传递的主要渠道',
        keyPoints: ['同期录音的话筒布置', '环境噪声规避', '降噪与修复', '均衡与动态处理'],
      },
      {
        name: '环境声',
        summary: '构建空间感与时间感',
        keyPoints: ['环境声的空间定位', '室内外声学差异', '氛围层与细节层', '环境声的叙事暗示'],
      },
      {
        name: '音效',
        summary: '强化动作与质感的细节',
        keyPoints: ['拟音 (Foley) 的作用', '硬音效与设计音效', '音效的夸张与取舍', '声画同步与分立'],
      },
      {
        name: '音乐',
        summary: '情绪的隐形指挥',
        keyPoints: ['配乐的叙事功能', '风格与配器选择', '进入与退出的时机', '沉默的力量：音乐留白'],
      },
    ],
    representativeContent: [
      {
        title: '声画分立',
        description: '声音来源不在画面内，用于扩展画外空间、暗示信息或制造悬念，是声音叙事的高级手法。',
        tags: ['声画关系', '叙事'],
      },
      {
        title: '拟音 (Foley)',
        description: '在录音棚中同步画面动作录制的音效（脚步声、衣物摩擦等），增加画面的真实感与质感。',
        tags: ['音效', '后期'],
      },
      {
        title: '音乐留白',
        description: '在关键情绪点突然抽掉音乐，让沉默本身成为最强的情绪放大器，比持续配乐更有张力。',
        tags: ['配乐', '节奏'],
      },
    ],
  },

  // ============ 剪辑节奏 ============
  {
    id: 'editing',
    name: CATEGORIES.find((c) => c.id === 'editing')!.name,
    englishName: CATEGORIES.find((c) => c.id === 'editing')!.englishName,
    description:
      '剪辑点、节奏控制、蒙太奇与连续性。在时间线上重塑故事，用镜头的连接创造意义与张力。',
    icon: 'Scissors',
    accent: CATEGORIES.find((c) => c.id === 'editing')!.accent,
    learningGoals: [
      '掌握连续性剪辑的基本语法',
      '理解蒙太奇如何创造意义',
      '通过镜头长度与景别变化控制节奏',
      '建立从粗剪到精剪的完整工作流',
    ],
    knowledgeDirections: [
      {
        name: '剪辑点',
        summary: '何时切、如何切',
        keyPoints: ['动作衔接', '视线匹配', '景别递进与 30 度法则', '剪辑点的情绪选择'],
      },
      {
        name: '蒙太奇',
        summary: '剪辑不只是连接，更是创造',
        keyPoints: ['库里肖夫效应', '叙事蒙太奇', '表现蒙太奇', '冲突与并置的意义'],
      },
      {
        name: '节奏',
        summary: '镜头长度与情绪呼吸',
        keyPoints: ['镜头长度与节奏', '景别变化的节奏', '音画同步的节奏设计', '快慢节奏的交替'],
      },
      {
        name: '时间重构',
        summary: '在剪辑台上重塑时空',
        keyPoints: ['时空压缩与扩展', '交叉剪辑', '闪回与闪前', '连续性剪辑的幻觉维护'],
      },
    ],
    representativeContent: [
      {
        title: '库里肖夫效应',
        description: '同一个面部镜头与不同内容并置，观众会解读出不同的情绪——证明剪辑可以创造表演。',
        tags: ['蒙太奇', '理论'],
      },
      {
        title: 'J-Cut 与 L-Cut',
        description: '声音先于画面或画面先于声音进入的剪辑方式，让场景过渡更自然流畅，增强时空连续性。',
        tags: ['衔接', '音画关系'],
      },
      {
        title: '节奏的呼吸',
        description: '剪辑节奏应有张有弛，持续的快剪会让观众疲劳，适时的长镜头能让情绪沉淀。',
        tags: ['节奏', '情绪'],
      },
    ],
  },
]

/** 按 ID 获取领域模块 */
export const getDomainById = (id: string): DomainModule | undefined =>
  DOMAINS.find((d) => d.id === id)

/**
 * 获取领域关联的课程（弱关联：通过 categoryId 匹配课程库）。
 * 领域页面可选择性展示这些课程，也可不依赖课程库独立发展。
 */
export const getDomainCourses = (domainId: string) =>
  getCoursesByCategory(domainId)
