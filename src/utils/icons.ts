import {
  Clapperboard,
  BookOpen,
  Camera,
  Grid3x3,
  Users,
  Aperture,
  Volume2,
  Scissors,
  type LucideIcon,
} from 'lucide-react'

/** 分类图标名称 -> Lucide 组件 的映射 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Clapperboard,
  BookOpen,
  Camera,
  Grid3x3,
  Users,
  Aperture,
  Volume2,
  Scissors,
}

export const getCategoryIcon = (name: string): LucideIcon =>
  ICON_MAP[name] ?? Clapperboard
