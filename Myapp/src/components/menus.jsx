// เมนูทั้งหมดใน app (ใช้ร่วมกันทั้ง Header และ BottomNav)
// icon เป็น path แบบ lucide วาดด้วย currentColor
export const menus = [
  {
    id: 'home',
    label: 'Home',
    icon: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" /></>
  },
  {
    id: 'about',
    label: 'About',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></>
  },
  {
    id: 'member',
    label: 'Member',
    icon: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5A6.5 6.5 0 0 1 21.5 20" /></>
  }
]
