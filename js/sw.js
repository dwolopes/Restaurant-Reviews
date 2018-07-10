var staticCacheName = 'rev-restaurant-static-v1'

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([
        '/css/grid.css',
        '/css/styles.css',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/index.html',
        '/restaurant.html'
        // Preciso fazer o cache do arquivo sw?
      ])
    })
  )
})

this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('rev-restaurant-static-') &&
                           cacheName != staticCacheName
        }).map(function (cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    new Response('Hello <b>World</b>', {
      headers: {'Content-Type': 'text/html'}
    })
  )
})
