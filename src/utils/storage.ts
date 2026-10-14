// 安全的 localStorage 封装：统一处理读取失败、写入异常与兼容降级

/** 读取并 JSON 反序列化（适合直接存对象的场景） */
export const safeGetItem = <T = unknown>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch (err) {
    console.warn(`[storage] 读取 "${key}" 失败，使用默认值。`, err)
    return fallback
  }
}

/** JSON 序列化后写入（适合直接存对象的场景） */
export const safeSetItem = <T = unknown>(key: string, value: T): boolean => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (err) {
    console.warn(`[storage] 写入 "${key}" 失败。`, err)
    return false
  }
}

/** 读取原始字符串（不做 JSON 解析，供 zustand persist 等已自行编码的存储层使用） */
export const safeGetRaw = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key)
  } catch (err) {
    console.warn(`[storage] 读取 "${key}" 失败。`, err)
    return null
  }
}

/** 写入原始字符串（不做 JSON 序列化） */
export const safeSetRaw = (key: string, value: string): boolean => {
  try {
    window.localStorage.setItem(key, value)
    return true
  } catch (err) {
    console.warn(`[storage] 写入 "${key}" 失败。`, err)
    return false
  }
}

export const safeRemoveItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key)
  } catch (err) {
    console.warn(`[storage] 移除 "${key}" 失败。`, err)
  }
}

export const isStorageAvailable = (): boolean => {
  try {
    const testKey = '__ls_test__'
    window.localStorage.setItem(testKey, '1')
    window.localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}
