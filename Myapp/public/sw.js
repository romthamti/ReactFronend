// Service Worker แบบง่าย: ทำให้แอปเปิดได้แม้ออฟไลน์
// - หน้า HTML: ลองโหลดจากเน็ตก่อน ถ้าไม่ได้ค่อยใช้ของใน cache
// - ไฟล์อื่น (js, css, รูป, ฟอนต์): ใช้ของใน cache ก่อน ถ้าไม่มีค่อยโหลดแล้วเก็บไว้
const CACHE = 'yanggai-v2'

// หน้าแรกของแอป (เช่น /ReactFronend/ บน GitHub Pages) อ้างอิงจากที่อยู่ของ sw.js
const HOME = new URL('./', self.location).href

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([HOME, 'manifest.webmanifest', 'icon.svg'])))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  // ลบ cache เวอร์ชันเก่า
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(HOME, copy))
          return res
        })
        .catch(() => caches.match(HOME))
    )
    return
  }

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((res) => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((cache) => cache.put(request, copy))
          }
          return res
        })
    )
  )
})
