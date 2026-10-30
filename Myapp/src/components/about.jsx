import '../App.css'
import Hero from './hero'

// ---------- ข้อมูลของหน้า About (แก้ข้อความตรงนี้ได้เลย) ----------
const stats = [
  { value: '2020', label: 'ปีที่ก่อตั้ง' },
  { value: '120+', label: 'ลูกค้า' },
  { value: '300+', label: 'โปรเจกต์' },
  { value: '25', label: 'ทีมงาน' }
]

// path ของไอคอน (แบบ lucide) ใช้สีตาม currentColor
const icons = {
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  cloud: <path d="M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19z" />,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>
}

const services = [
  { icon: 'code', title: 'Web Development', desc: 'เว็บไซต์และระบบหลังบ้านด้วย React และ Node.js' },
  { icon: 'phone', title: 'Mobile App', desc: 'แอปมือถือ iOS / Android ใช้งานง่าย ลื่นไหล' },
  { icon: 'cloud', title: 'Cloud & DevOps', desc: 'วางระบบบนคลาวด์ ปลอดภัย ขยายตัวได้' },
  { icon: 'chip', title: 'AI & Data', desc: 'นำข้อมูลและ AI มาช่วยตัดสินใจทางธุรกิจ' }
]

const values = ['ใส่ใจลูกค้า', 'เรียนรู้ไม่หยุด', 'ทำงานเป็นทีม', 'โปร่งใส', 'คุณภาพมาก่อน']

const timeline = [
  { year: '2020', text: 'ก่อตั้ง YangGai ด้วยทีมงาน 3 คน' },
  { year: '2022', text: 'เปิดบริการ Mobile App และ Cloud' },
  { year: '2024', text: 'ขยายทีมเป็น 25 คน ลูกค้ากว่า 100 ราย' },
  { year: '2026', text: 'เริ่มให้บริการโซลูชัน AI & Data' }
]

function Icon({ name }) {
  return (
    <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function About({ onNavigate }) {
  return (
    <>
      {/* ---------- แนะนำบริษัท ---------- */}
      <Hero
        eyebrow="About us"
        title={<>สร้างเทคโนโลยี<br />ที่ใช้งานได้จริง</>}
        subtitle={<>
          <strong>YangGai Technology</strong> คือทีมนักพัฒนาซอฟต์แวร์ที่ช่วยธุรกิจไทย
          เปลี่ยนไอเดียให้เป็นเว็บ แอป และระบบดิจิทัลที่เติบโตไปพร้อมกับองค์กร
        </>}
      />

      <div className="page page-overlap">
        {/* ---------- ตัวเลขเด่น ---------- */}
        <section className="card">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- พันธกิจ / วิสัยทัศน์ ---------- */}
        <section className="about-grid">
          <div className="card about-mini">
            <Icon name="target" />
            <h2 className="about-h2">พันธกิจ</h2>
            <p>ส่งมอบซอฟต์แวร์คุณภาพ ตรงเวลา และเข้าใจปัญหาของลูกค้าจริง ๆ</p>
          </div>
          <div className="card about-mini">
            <Icon name="eye" />
            <h2 className="about-h2">วิสัยทัศน์</h2>
            <p>เป็นบริษัทเทคโนโลยีที่ธุรกิจไทยไว้วางใจเป็นอันดับแรก</p>
          </div>
        </section>

        {/* ---------- บริการ ---------- */}
        <section className="card">
          <h2 className="card-title about-section-title">บริการของเรา</h2>
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.title} className="service">
                <span className="service-icon"><Icon name={s.icon} /></span>
                <div>
                  <p className="service-title">{s.title}</p>
                  <p className="service-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- ค่านิยม + เส้นทาง ---------- */}
        <section className="card">
          <h2 className="card-title about-section-title">ค่านิยมองค์กร</h2>
          <div className="value-list">
            {values.map((v) => (
              <span key={v} className="badge">{v}</span>
            ))}
          </div>

          <h2 className="card-title about-section-title about-gap">เส้นทางของเรา</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year} className="timeline-item">
                <span className="timeline-year">{t.year}</span>
                <span>{t.text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- ปุ่มไปหน้าสมาชิก ---------- */}
        <section className="card about-cta">
          <div>
            <p className="service-title">อยากรู้จักทีมของเรา?</p>
            <p className="service-desc">ดูรายชื่อสมาชิกทั้งหมดของ YangGai</p>
          </div>
          <button className="button button-primary" onClick={() => onNavigate?.('member')}>
            ดูสมาชิก →
          </button>
        </section>
      </div>
    </>
  )
}

export default About
