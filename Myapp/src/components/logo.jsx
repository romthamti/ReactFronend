import { useId } from 'react'

// โลโก้บริษัท YangGai (ตัว Y ในรูปหกเหลี่ยม สไตล์วงจร)
function Logo({ className = 'logo-mark' }) {
  // id ของ gradient ต้องไม่ซ้ำกัน ถ้ามีโลโก้หลายอันในหน้าเดียว
  const gradId = useId()

  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path d="M24 2 43 13v22L24 46 5 35V13z" fill={`url(#${gradId})`} />
      <path d="M24 6.5 39 15v18l-15 8.5L9 33V15z" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <path d="M15 14l9 11 9-11M24 25v11" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="14" r="2.6" fill="#e0f2fe" />
      <circle cx="33" cy="14" r="2.6" fill="#e0f2fe" />
      <circle cx="24" cy="36" r="2.6" fill="#e0f2fe" />
    </svg>
  )
}

export default Logo
