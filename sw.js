// FotoObra: keeps the app working without internet.
const CACHE = 'fotoobra-v4';
const FILES = ['./', './index.html', './app/', './app/index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './assets/fonts.css',
  ...['Inter-400', 'Inter-600', 'Inter-800', 'Oswald-500', 'Oswald-700'].flatMap(f => [`./assets/fonts/${f}-latin.woff2`, `./assets/fonts/${f}-cyrillic.woff2`])];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Network first (so updates arrive), cache when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const page = new URL(e.request.url).pathname.includes('/app/') ? './app/index.html' : './index.html';
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.status === 200) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || (e.request.mode === 'navigate' ? caches.match(page) : Response.error())))
  );
});
