import type { LucideIcon } from 'lucide-react'
import { Film } from 'lucide-react'

interface Props {
  icon?: LucideIcon
  title: string
  description?: string
  action?: React.ReactNode
}

const EmptyState = ({ icon: Icon = Film, title, description, action }: Props) => (
  <div className="empty-state">
    <Icon className="empty-icon" size={48} strokeWidth={1.2} />
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {action && <div style={{ marginTop: 20 }}>{action}</div>}
  </div>
)

export default EmptyState
