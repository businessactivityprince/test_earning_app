self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/mob-nav.css",
        "/alert.css",
        "/loader.css",
        "/auth.js",
        "/mob-nav.js",
        "/splash_screen.gif",
        "https://i.ibb.co/jvj24zH3/icon.png"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== "app-cache-v1") {
          return caches.delete(key);
        }
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
