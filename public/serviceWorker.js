const CACHE_NAME = 'otzyvy-pro-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Стратегия кеширования: сначала сеть, затем кеш
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && 
       event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/offline.html');
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response; // Возвращаем из кеша, если найдено
          }
          
          return fetch(event.request)
            .then((response) => {
              // Не кешируем если это не успешный ответ или не GET запрос
              if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
                return response;
              }
              
              // Делаем клон ответа, так как response может быть использован только один раз
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            })
            .catch(() => {
              // Для изображений и других ресурсов возвращаем запасное содержимое
              if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
                return caches.match('/logo192.png');
              }
              return new Response('Контент временно недоступен', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/plain'
                })
              });
            });
        })
    );
  }
});

// Периодическое обновление кеша
self.addEventListener('sync', event => {
  if (event.tag === 'update-cache') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return Promise.all(
            URLS_TO_CACHE.map(url => 
              fetch(url).then(response => cache.put(url, response))
            )
          );
        })
    );
  }
}); 