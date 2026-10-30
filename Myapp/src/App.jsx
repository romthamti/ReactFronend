import './App.css'
import { useState } from 'react'
import Header from './components/header'
import BottomNav from './components/bottomnav'
import Home from './components/home'
import About from './components/about'
import Member from './components/member'

// อ่านหน้าเริ่มต้นจาก URL (#home, #about, #member) เผื่อกด refresh
const pages = ['home', 'about', 'member']
const initialPage = () => {
  const hash = window.location.hash.slice(1)
  return pages.includes(hash) ? hash : 'home'
}

function App() {
  // หน้าที่กำลังแสดงอยู่: 'home' | 'about' | 'member'
  const [page, setPage] = useState(initialPage)

  const navigate = (id) => {
    setPage(id)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app-shell">
      <Header active={page} onNavigate={navigate} />

      {/* key={page} ทำให้ animation เล่นใหม่ทุกครั้งที่เปลี่ยนหน้า */}
      <main className="app-main" key={page}>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'member' && <Member />}
      </main>

      <BottomNav active={page} onNavigate={navigate} />
    </div>
  )
}

export default App
