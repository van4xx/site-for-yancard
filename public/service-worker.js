const CACHE_NAME = 'otzyvi-pro-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  '/favicon.ico',
  '/favicon.svg',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json'
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Активация нового Service Worker сразу после установки
  self.skipWaiting();
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Если это запрос к навигации (HTML), то кешируем его
        if (event.request.mode === 'navigate' || 
            (event.request.method === 'GET' && 
             event.request.headers.get('accept').includes('text/html'))) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseClone);
            });
        }
        return response;
      })
      .catch(() => {
        // При офлайн проверяем кеш
        return caches.match(event.request)
          .then(response => {
            // Если ресурс есть в кеше, возвращаем его
            if (response) {
              return response;
            }
            
            // Если это HTML-запрос и ресурса нет в кеше, показываем офлайн страницу
            if (event.request.mode === 'navigate' || 
                (event.request.method === 'GET' && 
                 event.request.headers.get('accept').includes('text/html'))) {
              return caches.match('/offline.html');
            }
            
            // Для других типов запросов возвращаем пустой ответ
            return new Response('', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  // Удаление старых версий кеша
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Контроль клиентов сразу после активации
  return self.clients.claim();
});

// Обработка push-уведомлений
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body || 'Новое уведомление от Отзывы PRO',
    icon: '/logo192.png',
    badge: '/badge.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || 'Отзывы PRO', 
      options
    )
  );
});

// Обработка клика по уведомлению
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({type: 'window'})
      .then(windowClients => {
        // Если есть открытые окна, фокусируемся на первом
        if (windowClients.length > 0) {
          return windowClients[0].focus();
        }
        // Иначе открываем новое окно
        return clients.openWindow(event.notification.data.url);
      })
  );
}); 