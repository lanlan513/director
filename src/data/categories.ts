import type { Category } from '../types'

/**
 * 导演知识八大领域分类
 * 每个分类拥有独立的主题色与图标，用于在 UI 中形成视觉区分
 */
export const CATEGORIES: Category[] = [
  {
    id: 'director-basics',
    name: '导演基础',
    englishName: 'Directing Fundamentals',
    description: '导演的角色定位、工作流程与创作思维，从剧本到成片的全局把控。',
    icon: 'Clapperboard',
    accent: '#f5a623',
  },
  {
    id: 'screenplay',
    name: '剧本与叙事',
    englishName: 'Screenplay & Narrative',
    description: '故事结构、人物弧光、三幕式与非线性叙事，学会用画面讲述故事。',
    icon: 'BookOpen',
    accent: '#e2574c',
  },
  {
    id: 'camera-language',
    name: '镜头语言',
    englishName: 'Camera Language',
    description: '景别、运镜、焦距与视角，理解镜头如何传递情绪与信息。',
    icon: 'Camera',
    accent: '#3aa6ff',
  },
  {
    id: 'mise-en-scene',
    name: '场面调度',
    englishName: 'Mise-en-Scène',
    description: '演员走位、空间层次、构图与灯光的协同编排，构建画面叙事。',
    icon: 'Grid3x3',
    accent: '#9b59ff',
  },
  {
    id: 'actor-guidance',
    name: '演员指导',
    englishName: 'Actor Direction',
    description: '与演员沟通、引导表演、调度情绪，让角色在镜头前真实可信。',
    icon: 'Users',
    accent: '#ff6b9d',
  },
  {
    id: 'cinematography',
    name: '摄影构图',
    englishName: 'Cinematography',
    description: '光线、色彩、景深与画面构图，用摄影造型塑造视觉风格。',
    icon: 'Aperture',
    accent: '#2ecc71',
  },
  {
    id: 'sound-design',
    name: '声音设计',
    englishName: 'Sound Design',
    description: '对白、音效、环境声与配乐的层次设计，声音是看不见的叙事。',
    icon: 'Volume2',
    accent: '#1abc9c',
  },
  {
    id: 'editing',
    name: '剪辑节奏',
    englishName: 'Editing Rhythm',
    description: '剪辑点、节奏控制、蒙太奇与连续性，在时间线上重塑故事。',
    icon: 'Scissors',
    accent: '#f39c12',
  },
]

/** 按 ID 查找分类 */
export const getCategoryById = (id: string): Category | undefined =>
  CATEGORIES.find((c) => c.id === id)
