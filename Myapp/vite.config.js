import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages เปิดเว็บที่ https://romthamti.github.io/ReactFronend/
  // จึงต้องบอก Vite ว่าไฟล์ทั้งหมดอยู่ใต้ /ReactFronend/ (ตอน dev ใช้ / เหมือนเดิม)
  base: command === 'build' ? '/ReactFronend/' : '/',
}))
