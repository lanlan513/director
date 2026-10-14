# 导演工作与视听叙事学习实验室

> Director's Audio-Visual Lab —— 面向初学者的导演知识与视听创作学习工作台

一个以 **React + TypeScript + Vite** 构建的前端学习应用，帮助用户从理解电影作品逐步过渡到独立完成短片创作。界面采用深色电影工作室风格，融入场记板、胶片、分镜等视觉元素，营造沉浸式的创作学习氛围。

## ✨ 功能特性

### 首页工作台
- **学习概览**：进行中、已完成、收藏、累计学习时长的统计卡片
- **八大知识领域**：导演基础、剧本与叙事、镜头语言、场面调度、演员指导、摄影构图、声音设计、剪辑节奏
- **最近学习记录**：继续上次进度，按时间倒序展示
- **为你推荐**：优先推荐未完成的入门级课程
- **创作练习入口**：引导进入实践型课程

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

## 🛠 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8 |
| 路由 | react-router-dom 7 |
| 状态管理 | Zustand 5（含 persist 中间件） |
| 图标 | lucide-react |
| 样式 | 原生 CSS（CSS 变量主题） |

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
    │   └── index.ts                # 核心数据类型（Category / Course / CourseProgress …）
    ├── data/
    │   ├── categories.ts           # 八大知识领域分类数据
    │   └── courses.ts              # 课程示例数据（含搜索/筛选辅助函数）
    ├── store/
    │   └── useLearningStore.ts     # Zustand 状态 + localStorage 持久化
    ├── utils/
    │   ├── storage.ts              # 安全 localStorage 封装（异常降级）
    │   └── icons.ts                # 分类图标名称 -> 组件映射
    ├── components/
    │   ├── layout/                 # Header / Layout（导航、页脚）
    │   ├── common/                 # CourseCard / SearchBar / ProgressBar / EmptyState / Toast …
    │   └── home/                   # Hero / LearningOverview / CategorySection / RecentLearning / Recommended
    └── pages/
        ├── HomePage.tsx            # 工作台首页
        ├── CoursesPage.tsx         # 课程库（搜索/筛选/排序）
        ├── CourseDetailPage.tsx    # 课程详情（进度/收藏/章节）
        ├── FavoritesPage.tsx       # 我的收藏
        └── NotFoundPage.tsx        # 404
```

### 数据模型

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

interface CourseProgress {
  courseId: string
  progress: number          // 0 - 100
  status: 'not-started' | 'in-progress' | 'completed'
  lastStudiedAt: string | null
  favorite: boolean
}
```

### 状态管理设计

- 使用 **Zustand** 集中管理学习状态（`progress` 映射 + `recent` 最近记录）
- 通过 `persist` 中间件写入 `localStorage`（key: `director-lab-state-v1`）
- 自定义安全存储层统一捕获读写异常
- 提供 `useLearningStats` / `useCourseProgress` 两个派生 Hook，避免在 selector 中返回新对象导致无限重渲染

### 扩展预留

- 路由按页面独立划分，新增页面只需在 `App.tsx` 注册路由
- 数据访问集中在 `src/data/`，后续接入后端时可替换为 API 调用而不影响组件
- `types/` 中定义的接口可直接扩展字段（如视频 URL、测验题目等）

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
```

## 🧪 已验证的交互流程

1. 首页加载 → 统计归零、最近学习为空状态、推荐 3 门入门课程
2. 课程库搜索「蒙太奇」→ 命中 1 门；搜索无意义词 → 空结果提示
3. 点击分类芯片 → 课程按领域筛选，URL 同步 `?category=xxx`
4. 进入课程详情 → 点击「开始学习」进度变为 5%、状态「学习中」
5. 点击「收藏」→ 按钮切换为「已收藏」，刷新页面后状态保留
6. 点击「标记完成」→ 进度 100%、状态「已完成」，首页统计同步更新
7. 「我的收藏」页 → 展示已收藏课程；全部取消后显示空状态
8. 访问不存在的课程 ID → 提示「课程不存在」；访问未知路由 → 404 页面

## 📝 说明

- 当前阶段为纯前端实现，课程数据为内置示例，未接入真实后端或用户认证
- 学习状态仅保存在浏览器本地，清除浏览器数据会重置进度
- 界面针对桌面端与平板端优化，移动端提供折叠导航
