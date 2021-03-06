// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/laurentvignaux/',
  '/laurentvignaux/css/main.css',
  '/laurentvignaux/css/normalize.css',
  '/laurentvignaux/js/instafeed.min.js',
  '/laurentvignaux/js/main.js',
  '/laurentvignaux/img/lvdesign.png',
  '/laurentvignaux/page.html'
];

self.addEventListener('install', function(event) {
  //debugger;
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll(urlsToCache);
    })
  );
  console.log('Top -- A *new* Service Worker is installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content Yeah!');  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

//
self.addEventListener('push', function(event) {  
  var title = 'Yay a message.';  
  var body = 'We have received a push message.';  
  //var icon = '/img/smiley.svg';  
  var tag = 'simple-push-example-tag';
  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      //icon: icon,  
      tag: tag  
    })  
  );  
});