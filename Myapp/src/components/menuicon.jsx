// กรอบ svg สำหรับไอคอนเมนู (ใช้สีตาม currentColor)
function MenuIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

export default MenuIcon
