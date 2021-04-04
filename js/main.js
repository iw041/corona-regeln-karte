window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceworker.js');
    }

    // ################ Pan and zoom for SVG map ################
    window.panZoomInstance = svgPanZoom('#map-svg', {
      zoomEnabled: true,
      controlIconsEnabled: false,
      fit: true,
      center: true,
      minZoom: 0.5
    });

    // Zoom out
    //panZoomInstance.zoom(0.5);

    function customPanBy(amount){ // {x: 1, y: 2}
      var animationTime = 300 // ms
        , animationStepTime = 15 // one frame per 30 ms
        , animationSteps = animationTime / animationStepTime
        , animationStep = 0
        , intervalID = null
        , stepX = amount.x / animationSteps
        , stepY = amount.y / animationSteps

      intervalID = setInterval(function(){
        if (animationStep++ < animationSteps) {
          panZoomInstance.panBy({x: stepX, y: stepY})
        } else {
          // Cancel interval
          clearInterval(intervalID)
        }
      }, animationStepTime)
    }

}

function displayName(e) {
  document.getElementById('district-name').firstChild.data = e.id;
}
