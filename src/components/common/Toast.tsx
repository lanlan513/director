import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { CheckCircle2, Info, X } from 'lucide-react'

type ToastType = 'success' | 'info'
interface ToastItem {
  id: number
  message: string
  type: ToastType
}

interface ToastContextValue {
  toast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // 降级：若未包裹 Provider，返回一个仅打印的函数，避免运行时报错
    return { toast: (m: string) => console.info('[toast]', m) }
  }
  return ctx
}

let toastId = 0

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (message: string, type: ToastType = 'info') => {
      const id = ++toastId
      setToasts((prev) => [...prev, { id, message, type }])
      window.setTimeout(() => remove(id), 2400)
    },
    [remove],
  )

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>
            {t.type === 'success' ? (
              <CheckCircle2 size={16} color="var(--success)" />
            ) : (
              <Info size={16} color="var(--info)" />
            )}
            <span>{t.message}</span>
            <button
              onClick={() => remove(t.id)}
              style={{ marginLeft: 6, color: 'var(--text-muted)', display: 'flex' }}
              aria-label="关闭提示"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
