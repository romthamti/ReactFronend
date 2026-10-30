import '../App.css'
import { useEffect, useState } from 'react'
import Logo from './logo'
import { menus } from './menus'

// App bar ด้านบน
// - มือถือ: แสดงแค่โลโก้ + ชื่อบริษัท (เมนูอยู่ที่ BottomNav ด้านล่าง)
// - จอใหญ่ (>= 768px): แสดงเมนูด้านขวาด้วย
function Header({ active, onNavigate }) {
  // เก็บ event สำหรับปุ่ม "ติดตั้งแอป" (PWA) — Chrome / Edge / Android จะส่งมาให้
  const [installEvent, setInstallEvent] = useState(null)

  useEffect(() => {
    const onPrompt = (e) => {
      e.preventDefault()
      setInstallEvent(e)
    }
    const onInstalled = () => setInstallEvent(null)

    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = async () => {
    installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }

  return (
    <header className="app-bar">
      <div className="app-bar-inner">
        <a href="#home" className="brand" onClick={() => onNavigate('home')}>
          <Logo />
          <span className="brand-text">
            <span className="brand-name">Yang<span>Gai</span></span>
            <span className="brand-tag">Technology Co., Ltd.</span>
          </span>
        </a>

        <nav className="top-nav">
          {menus.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className={`nav-link ${active === m.id ? 'active' : ''}`}
              aria-current={active === m.id ? 'page' : undefined}
              onClick={() => onNavigate(m.id)}
            >
              {m.label}
            </a>
          ))}
        </nav>

        {installEvent && (
          <button className="install-button" onClick={install}>
            ติดตั้งแอป
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
