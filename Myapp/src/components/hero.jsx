import '../App.css'

// ส่วนหัวไล่สีของแต่ละหน้า (Gradient Hero Header)
// การ์ดที่อยู่ถัดจาก Hero จะเลื่อนขึ้นมาทับขอบล่างเล็กน้อย ให้ดูเหมือนแอป
function Hero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export default Hero
