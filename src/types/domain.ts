// 导演工作与视听叙事学习实验室 —— 专业学习模块类型定义
// 每个领域是一个独立的专业学习模块，拥有专属的知识结构与内容，
// 与通用课程库（Course）解耦，便于在不同分支中独立扩展。

import type { CategoryId } from './index'

/** 核心知识方向（领域专属，每个领域有不同的方向划分） */
export interface KnowledgeDirection {
  /** 方向名称，例如「景别」「机位」「镜头运动」 */
  name: string
  /** 一句话说明该方向在本领域中的定位 */
  summary: string
  /** 该方向下的关键知识点/概念 */
  keyPoints: string[]
}

/** 代表性内容条目（领域专属的知识卡片 / 原则 / 案例锚点） */
export interface DomainContentItem {
  title: string
  /** 内容摘要 */
  description: string
  /** 可选：相关标签 */
  tags?: string[]
}

/** 专业学习模块（八大领域） */
export interface DomainModule {
  /** 与 CategoryId 保持一致，便于与课程库建立弱关联 */
  id: CategoryId
  name: string
  englishName: string
  description: string
  /** lucide 图标名称 */
  icon: string
  /** 主题色 */
  accent: string
  /** 学习目标：完成本模块后应达到的能力 */
  learningGoals: string[]
  /** 核心知识方向（领域专属结构，不与其他领域共用） */
  knowledgeDirections: KnowledgeDirection[]
  /** 代表性内容：本领域的关键知识卡片/原则 */
  representativeContent: DomainContentItem[]
}
