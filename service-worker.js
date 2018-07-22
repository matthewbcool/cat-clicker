(function() {
    'use strict';
    let staticCacheName = 'cat-clicker-v2';
    self.addEventListener('install', function(event) {
      console.log('Service worker installing...');
      event.waitUntil(
        caches.open('cat-clicker-cache-v1').then(function(cache){
          return cache.addAll(
            [
              '/',
              'app.js',
              'styles.css',
              'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/BgzbIuBFvPz-png__700.jpg',
              'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
              'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
              'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350',
              'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg',
              'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'
            ]
          );
        })
      );
      self.skipWaiting();
    });
    
    self.addEventListener('activate', function(event) {
      /*
      event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.filter(function(cacheName){
              return cacheName.startsWith('cat-') &&
                     cacheName != staticCacheName;
          }).map(function(cacheName){
            return caches.delete(cacheName);
          })
         )
        })
      )
      */
     console.log('activated!')
    });
  
  
  
    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          if (response) return response;
          return fetch(event.request);
        })
      );
    });
  
  })();