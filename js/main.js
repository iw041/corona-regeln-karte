window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceworker.js');
    }

    // ################ Pan and zoom for SVG map ################
    window.panZoomInstance = svgPanZoom('#map-svg', {
      panEnabled: true,
      zoomEnabled: true,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      controlIconsEnabled: false,
      fit: true,
      center: true,
      zoomScaleSensitivity: 0.5,
      minZoom: 1.0,
      maxZoom: 10
    });
}

function displayName(e) {
  document.getElementById('district-name').firstChild.data = e.id;
}
