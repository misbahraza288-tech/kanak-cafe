/* Purana app yahan se shift ho gaya — ye service worker khud ko hata deta hai aur naye app pe bhejta hai */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: "window" }))
    .then((cs) => cs.forEach((c) => c.navigate("https://misbahraza288-tech.github.io/misbah-sites/kanak-cafe/"))));
});
