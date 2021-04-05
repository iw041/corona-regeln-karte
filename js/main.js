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

var tooltip = document.querySelector('.map-tooltip');

// iterate throw all `path` tags
[].forEach.call(document.querySelectorAll("path.map-district-area, polygon.map-district-area"), function(item) {  
  // attach mouseenter event
  item.addEventListener('mouseenter', function() {
  	var sel = this,
    		pos = sel.getBoundingClientRect()
    
    tooltip.innerHTML = sel.id
    tooltip.style.display = 'block';
    tooltip.style.top = pos.top + 'px';
    tooltip.style.left = pos.left + 'px';
  });
  
  // when mouse leave hide the tooltip
  item.addEventListener('mouseleave', function(){
  	tooltip.style.display = 'none';
  });
});