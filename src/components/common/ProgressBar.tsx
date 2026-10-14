interface Props {
  progress: number
  showLabel?: boolean
  height?: number
}

const ProgressBar = ({ progress, showLabel = false, height }: Props) => {
  const pct = Math.max(0, Math.min(100, Math.round(progress)))
  const completed = pct >= 100
  return (
    <div className="progress-wrap" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div className={`progress-bar ${completed ? 'completed' : ''}`} style={height ? { height } : undefined}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      {showLabel && (
        <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 32, textAlign: 'right' }}>
          {pct}%
        </span>
      )}
    </div>
  )
}

export default ProgressBar
