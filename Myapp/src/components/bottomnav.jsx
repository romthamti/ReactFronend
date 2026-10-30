import '../App.css'
import { menus } from './menus'
import MenuIcon from './menuicon'

// แถบเมนูด้านล่างแบบแอปมือถือ (ซ่อนเมื่อจอกว้าง >= 768px)
function BottomNav({ active, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="เมนูหลัก">
      {menus.map((m) => (
        <a
          key={m.id}
          href={`#${m.id}`}
          className={`bottom-nav-item ${active === m.id ? 'active' : ''}`}
          aria-current={active === m.id ? 'page' : undefined}
          onClick={() => onNavigate(m.id)}
        >
          <span className="bottom-nav-icon">
            <MenuIcon>{m.icon}</MenuIcon>
          </span>
          <span className="bottom-nav-label">{m.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default BottomNav
