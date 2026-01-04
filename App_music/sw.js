const CACHE_NAME = 'music-app-v1';
// Liste des fichiers à sauvegarder pour le mode hors-ligne
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/cover1.jpg',
  './images/cover2.jpg',
  './musiques/chanson1.mp3',
  './musiques/chanson2.mp3'
];

// Installation : on met les fichiers en cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Récupération : on sert les fichiers depuis le cache si on est hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});