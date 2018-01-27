
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../laurentvignaux/service-worker.js', { scope: '/laurentvignaux/' }).then(function(registration) {
      // Registration was successful
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  };