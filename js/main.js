window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceworker.js');
    }
  }

function displayName(e) {
  document.getElementById('district-name').firstChild.data = e.id;
}