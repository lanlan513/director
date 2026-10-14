import type { Difficulty } from '../../types'

const LABELS: Record<Difficulty, string> = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '高阶',
}

const STYLES: Record<Difficulty, string> = {
  beginner: 'diff-beginner',
  intermediate: 'diff-intermediate',
  advanced: 'diff-advanced',
}

interface Props {
  difficulty: Difficulty
  size?: 'sm' | 'md'
}

const DifficultyBadge = ({ difficulty, size = 'sm' }: Props) => (
  <span className={`diff-badge ${STYLES[difficulty]} ${size === 'md' ? 'diff-md' : ''}`}>
    {LABELS[difficulty]}
  </span>
)

export default DifficultyBadge
