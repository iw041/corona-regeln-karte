window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceworker.js');
    }

    /* ################ Pan and zoom for SVG map ################ */
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


/* ################ Tooltips for showing disctrict names ################ */
var tooltip = document.querySelector('.map-tooltip');

// iterate throw all "path" and "polygon" tags of SVG
[].forEach.call(document.querySelectorAll("path.map-district-area, polygon.map-district-area"), function(item) {
  // load and display Corona Regeln links in specific div
  item.addEventListener('click', function(){
    // TODO: map ID to district's name and lookup disctrict's Corona Regeln URL
    // alternative idea: open directly the disctrict's Corona Regeln URL (window.open('URL'))
  });

  // display tooltip with district's name when mouse enters
  item.addEventListener('mouseenter', function() {
  	var sel = this,
    		pos = sel.getBoundingClientRect()
    
    tooltip.innerHTML = sel.id  // TODO: set district's name (not polygon/path ID)

    tooltip.style.display = 'block';
    tooltip.style.top = pos.top + 'px';
    tooltip.style.left = pos.left + 'px';
  });

  // attach tooltip to mouse movements (comment this part if a fixed position is required)
  item.addEventListener('mousemove', function(e) {
  	tooltip.style.top = e.clientY + 'px';
    tooltip.style.left = e.clientX + 'px';
  });
  
  // hide tooltip when mouse leaves
  item.addEventListener('mouseleave', function(){
  	tooltip.style.display = 'none';
  });
});