# 导演工作与视听叙事学习实验室

> Director's Audio-Visual Lab —— 面向初学者的导演知识与视听创作学习工作台

一个以 **React + TypeScript + Vite** 构建的前端学习应用，帮助用户从理解电影作品逐步过渡到独立完成短片创作。界面采用深色电影工作室风格，融入场记板、胶片、分镜等视觉元素，营造沉浸式的创作学习氛围。

应用以 **八大专业学习模块** 为核心架构，每个领域拥有独立的页面组件、专属知识结构与示例数据，可在不同 Git 分支中独立扩展而互不影响。

## ✨ 功能特性

### 八大专业学习模块（核心）

每个领域都是独立的学习模块，首页以领域入口卡片呈现（含学习目标预览、核心知识方向标签、进入按钮），点击进入独立的领域详情页。

| 领域 | 路由 | 核心知识方向 |
|------|------|-------------|
| 导演基础 | `/domains/director-basics` | 导演职责与角色、创作流程、分镜头脚本、剧组协作 |
| 剧本与叙事 | `/domains/screenplay` | 人物、冲突、情节结构、叙事时间 |
| 镜头语言 | `/domains/camera-language` | 景别、机位、镜头运动 |
| 场面调度 | `/domains/mise-en-scene` | 空间关系、人物走位、光影、色彩 |
| 演员指导 | `/domains/actor-guidance` | 沟通方法、情绪引导、群像调度、即兴表演 |
| 摄影构图 | `/domains/cinematography` | 构图、光线、景深与焦距、色彩 |
| 声音设计 | `/domains/sound-design` | 对白、环境声、音效、音乐 |
| 剪辑节奏 | `/domains/editing` | 剪辑点、蒙太奇、节奏、时间重构 |

每个领域详情页包含：
- **学习目标**：完成本模块后应达到的能力
- **核心知识方向**：领域专属的知识结构划分（每个方向含关键知识点）
- **代表性内容**：关键概念、原则与知识卡片
- **关联课程**：与本领域相关的课程（弱关联课程库）

### 首页工作台
- **学习概览**：进行中、已完成、收藏、累计学习时长的统计卡片
- **八大领域入口**：展示各领域学习目标与知识方向，点击进入独立模块
- **最近学习记录**：继续上次进度，按时间倒序展示
- **为你推荐**：优先推荐未完成的入门级课程
- **创作练习入口**：引导进入实践型领域

### 课程库
- **关键词搜索**：支持标题、副标题、简介、标签、讲师多字段检索
- **分类筛选**：八大领域快速切换，URL 同步便于分享
- **难度筛选**：入门 / 进阶 / 高阶
- **排序**：默认 / 时长升降 / 难度
- **空结果反馈**：搜索无结果时提供重置入口

### 课程详情
- 渐变封面、章节列表、知识标签、讲师与时长信息
- **进度控制**：滑块调节、+10% 快捷、重置、标记完成
- **收藏切换**：一键加入 / 取消收藏
- 学习状态自动推导（未开始 / 学习中 / 已完成）

### 收藏与持久化
- 收藏课程独立页面管理
- 所有学习状态（进度、收藏、最近学习）通过 **localStorage** 持久化，刷新后自动恢复
- 本地存储读写异常统一捕获，不阻塞页面渲染
- 数据损坏自动降级为默认状态，避免白屏

## 🛠 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8 |
| 路由 | react-router-dom 7 |
| 状态管理 | Zustand 5（含 persist 中间件） |
| 图标 | lucide-react |
| 样式 | 原生 CSS（CSS 变量主题） |
| 代码检查 | oxlint |

## 📁 项目结构

```
director/
├── index.html
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts
├── README.md
└── src/
    ├── main.tsx                    # 应用入口
    ├── App.tsx                     # 路由配置
    ├── index.css                   # 全局主题（深色电影工作室）
    ├── types/
    │   ├── index.ts                # 核心类型：Category / Course / CourseProgress …
    │   └── domain.ts               # 领域模块类型：DomainModule / KnowledgeDirection …
    ├── data/
    │   ├── categories.ts           # 八大领域基础元数据（名称、图标、主题色）
    │   ├── courses.ts              # 课程示例数据（含搜索/筛选辅助函数）
    │   └── domains.ts              # 八大领域专属数据（学习目标/知识方向/代表性内容）
    ├── store/
    │   └── useLearningStore.ts     # Zustand 状态 + localStorage 持久化
    ├── utils/
    │   ├── storage.ts              # 安全 localStorage 封装（异常降级）
    │   └── icons.ts                # 分类图标名称 -> 组件映射
    ├── components/
    │   ├── layout/                 # Header / Layout（导航、页脚）
    │   ├── common/                 # CourseCard / SearchBar / ProgressBar / EmptyState / Toast …
    │   └── home/                   # Hero / LearningOverview / DomainSection / RecentLearning / Recommended / PracticeEntry
    └── pages/
        ├── HomePage.tsx            # 工作台首页
        ├── DomainPage.tsx          # 领域详情页（八大领域共用，数据驱动）
        ├── CoursesPage.tsx         # 课程库（搜索/筛选/排序）
        ├── CourseDetailPage.tsx    # 课程详情（进度/收藏/章节）
        ├── FavoritesPage.tsx       # 我的收藏
        └── NotFoundPage.tsx        # 404
```

## 🔀 路由

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | 工作台首页 | 学习概览 + 八大领域入口 + 最近学习 + 推荐 |
| `/domains/:id` | 领域详情页 | 八大领域的独立展示页面 |
| `/courses` | 课程库 | 搜索、筛选、排序 |
| `/courses/:id` | 课程详情 | 进度控制、收藏、章节 |
| `/favorites` | 我的收藏 | 收藏的课程列表 |
| `*` | 404 | 未匹配路由 |

## 🧩 数据模型

### 领域模块（`DomainModule`）

每个领域拥有独立的知识结构，**不依赖课程列表**，可独立扩展：

```ts
interface DomainModule {
  id: CategoryId                     // 与分类 ID 一致，便于与课程库弱关联
  name: string
  englishName: string
  description: string
  icon: string                       // lucide 图标名称
  accent: string                     // 主题色
  learningGoals: string[]            // 学习目标
  knowledgeDirections: {             // 核心知识方向（领域专属）
    name: string
    summary: string
    keyPoints: string[]
  }[]
  representativeContent: {           // 代表性内容（知识卡片 / 原则）
    title: string
    description: string
    tags?: string[]
  }[]
}
```

### 课程（`Course`）

```ts
interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  categoryId: CategoryId
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number          // 预计学习时长（分钟）
  tags: string[]
  cover: { from: string; to: string }
  chapters: Chapter[]
  instructor: string
}
```

### 学习进度（`CourseProgress`）

```ts
interface CourseProgress {
  courseId: string
  progress: number          // 0 - 100
  status: 'not-started' | 'in-progress' | 'completed'
  lastStudiedAt: string | null
  favorite: boolean
}
```

## 🏗 架构设计要点

### 领域模块的独立性

- 每个领域的数据定义在 `src/data/domains.ts` 中，各领域的数据块相互独立，修改某一领域不影响其他领域
- `DomainPage.tsx` 是数据驱动的通用页面，根据 `domain.id` 渲染对应领域的专属内容
- 领域与课程库通过 `categoryId` 弱关联（`getDomainCourses`），领域页面可选择性展示关联课程，也可完全独立发展
- 未来为某领域增加专业功能（如镜头模拟器、分镜编辑器）时，只需在该领域的数据块中扩展，并在 `DomainPage` 中添加对应的渲染分支，或新建独立子页面

### 状态管理

- 使用 **Zustand** 集中管理学习状态（`progress` 映射 + `recent` 最近记录）
- 通过 `persist` 中间件写入 `localStorage`（key: `director-lab-state-v1`）
- 自定义安全存储层统一捕获读写异常，数据损坏时自动降级
- 提供 `useLearningStats` / `useCourseProgress` 两个派生 Hook，避免在 selector 中返回新对象导致无限重渲染
- 进度、收藏、最近学习记录以 `courseId` 为键存储，与领域结构解耦，领域调整不影响已有学习数据

### 复用策略

- 复用现有 `Layout`、`Header` 导航、`Toast`、`EmptyState`、`CourseCard` 等公共组件
- 复用全局 CSS 变量主题与 `container`、`btn`、`tag` 等通用样式类
- 领域页面的关联课程区复用 `CourseCard`，保证收藏与进度功能一致

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm（或 pnpm / yarn）

### 安装与启动

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 访问 http://localhost:5173

# 生产构建
npm run build

# 预览构建产物
npm run preview

# 代码检查
npm run lint

# TypeScript 类型检查
npx tsc --noEmit
```

## 🧪 已验证的交互流程

1. 首页加载 → 八大领域入口卡片正常渲染，每卡含学习目标与知识方向标签
2. 点击领域入口 → 进入对应领域详情页，展示学习目标、核心知识方向、代表性内容、关联课程
3. 领域详情页直接访问（刷新）→ 正常渲染，无白屏
4. 课程库搜索「蒙太奇」→ 命中 1 门；搜索无意义词 → 空结果提示
5. 点击分类芯片 → 课程按领域筛选，URL 同步 `?category=xxx`
6. 进入课程详情 → 点击「开始学习」进度变为 5%、状态「学习中」
7. 点击「收藏」→ 按钮切换为「已收藏」，刷新页面后状态保留
8. 点击「标记完成」→ 进度 100%、状态「已完成」，首页统计同步更新
9. 「我的收藏」页 → 展示已收藏课程；全部取消后显示空状态
10. 访问不存在的课程 ID → 提示「课程不存在」；访问未知领域 ID → 提示「领域不存在」；访问未知路由 → 404 页面
11. 导航栏「学习领域」下拉 → 指向各领域独立页面

## 🔮 后续迭代方向

- 各领域可独立增加专业练习系统（如镜头景别练习器、分镜脚本编辑器、声音层次模拟器等）
- 接入后端 API 与用户认证，实现多端学习数据同步
- 为课程增加视频播放、章节测验与学习笔记功能
- 增加学习路径规划与能力评估体系

## 📝 说明

- 当前阶段为纯前端实现，课程与领域数据为内置示例，未接入真实后端或用户认证
- 学习状态仅保存在浏览器本地，清除浏览器数据会重置进度
- 界面针对桌面端与平板端优化，移动端提供折叠导航
