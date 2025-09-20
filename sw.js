    // sw.js
<<<<<<< HEAD
    const CACHE_NAME = 'raj-enterprise-v1'; // Update version for new deployments
    const urlsToCache = [
      '/', // index.html
      '/index.html',
      '/manifest.json',
      // Add paths to your CSS, JS, and image files
      // Example:
      // '/style.css', // If you move internal CSS to external file
      // '/script.js', // If you move internal JS to external file
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      // If you have actual icon files:
      // '/assets/icons/icon-192x192.png',
      // '/assets/icons/icon-512x512.png',
      // Any other custom assets like images
=======
    const CACHE_NAME = "raj-enterprise-cache-v1";
    const BASE_PATH = "/raj-enterprises-app";
    
    const urlsToCache = [
      `${BASE_PATH}/`,
      `${BASE_PATH}/index.html`,
      `${BASE_PATH}/manifest.json`,
      `${BASE_PATH}/icons/icons-192x192.png`,
      `${BASE_PATH}/icons/icons-512x512.png`
>>>>>>> 71156b581857922e7937e9e25d4f3e4338989a03
    ];

    // Install event: cache all listed assets
    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            console.log('Service Worker: Caching app shell');
            return cache.addAll(urlsToCache);
          })
      );
    });

    // Fetch event: serve from cache first, then fall back to network
    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            // Cache hit - return response
            if (response) {
              return response;
            }
            // No cache hit - fetch from network
            return fetch(event.request).then(
              response => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }
                // Clone the response. A response is a stream and can only be consumed once.
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
                return response;
              }
            ).catch(error => {
              // This catch is important for full offline support.
              // If the network request fails AND the item is not in cache,
              // you can return a fallback page/resource here.
              console.error('Service Worker: Fetch failed and no cache match for', event.request.url, error);
              // For example, return an offline page:
              // return caches.match('/offline.html');
            });
          })
      );
    });

    // Activate event: clean up old caches
    self.addEventListener('activate', event => {
      const cacheWhitelist = [CACHE_NAME];
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                console.log('Service Worker: Deleting old cache', cacheName);
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });
<<<<<<< HEAD
    
=======
    
>>>>>>> 71156b581857922e7937e9e25d4f3e4338989a03
