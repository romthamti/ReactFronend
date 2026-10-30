import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ลงทะเบียน Service Worker (PWA) เฉพาะตอน build จริง
// ตอน dev ไม่เปิด เพราะ cache จะทำให้ไม่เห็นโค้ดที่แก้ล่าสุด
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    // BASE_URL = '/ReactFronend/' ตอน build (ตั้งไว้ใน vite.config.js)
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
  })
}
