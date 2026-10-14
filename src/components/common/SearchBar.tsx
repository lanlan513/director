import { Search, X } from 'lucide-react'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
}

const SearchBar = ({ value, onChange, placeholder = '搜索课程、标签或讲师…', autoFocus }: Props) => (
  <div className="search-box">
    <Search className="search-icon" size={18} />
    <input
      className="search-input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
    {value && (
      <button className="search-clear" onClick={() => onChange('')} aria-label="清除搜索">
        <X size={16} />
      </button>
    )}
  </div>
)

export default SearchBar
