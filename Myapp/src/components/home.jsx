import '../App.css'
import Hero from './hero'
import Profile from './profile'
import { menus } from './menus'
import MenuIcon from './menuicon'

// คำทักทายตามช่วงเวลา
function greeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'สวัสดีตอนเช้า ☀️'
  if (hour < 17) return 'สวัสดีตอนบ่าย 🌤️'
  return 'สวัสดีตอนเย็น 🌙'
}

// การ์ดเมนูลัด (ใช้ไอคอนจาก menus)
const shortcuts = [
  { page: 'about', title: 'เกี่ยวกับเรา', desc: 'รู้จัก YangGai' },
  { page: 'member', title: 'สมาชิกทีม', desc: 'ดูรายชื่อทีมงาน' }
]

// ข่าวสาร (เลื่อนซ้าย-ขวาได้)
const updates = [
  { tag: 'ข่าวบริษัท', title: 'เปิดตัวบริการ AI & Data', date: '28 ต.ค. 2026' },
  { tag: 'กิจกรรม', title: 'Workshop React สำหรับทีมใหม่', date: '15 พ.ย. 2026' },
  { tag: 'รับสมัคร', title: 'รับสมัคร Frontend Developer', date: '1 ธ.ค. 2026' }
]

function Home({ onNavigate }) {
  return (
    <>
      <Hero
        eyebrow={greeting()}
        title="ยินดีต้อนรับสู่ YangGai"
        subtitle="แอปสำหรับทีมงาน · React Lesson"
      />

      <div className="page page-overlap">
        <Profile />

        <section>
          <h2 className="section-title">เมนูลัด</h2>
          <div className="shortcut-grid">
            {shortcuts.map((s) => {
              const menu = menus.find((m) => m.id === s.page)
              return (
                <button key={s.page} className="card shortcut" onClick={() => onNavigate(s.page)}>
                  <span className="shortcut-icon">
                    <MenuIcon>{menu.icon}</MenuIcon>
                  </span>
                  <span className="shortcut-title">{s.title}</span>
                  <span className="shortcut-desc">{s.desc}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="section-title">อัปเดตล่าสุด</h2>
          <div className="scroller">
            {updates.map((u) => (
              <article key={u.title} className="card update-card">
                <span className="badge">{u.tag}</span>
                <p className="update-title">{u.title}</p>
                <p className="update-date">{u.date}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
