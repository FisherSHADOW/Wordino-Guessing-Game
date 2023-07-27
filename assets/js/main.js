// loader 
$(window).on("load", function() {
   
    setTimeout(function() {
      $('.loader-container').fadeOut();
    }, 2000); 
  });
  // main page text animation
setTimeout(function(){
    function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
        let paths = document.querySelectorAll("path");
        let mode=repeat?'infinite':'forwards'
        for (let i = 0; i < paths.length; i++) {
            const path = paths[i];
            const length = path.getTotalLength();
            path.style["stroke-dashoffset"] = `${length}px`;
            path.style["stroke-dasharray"] = `${length}px`;
            path.style["stroke-width"] = `${strokeWidth}px`;
            path.style["stroke"] = `${strokeColor}`;
            path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
            path.style["animation-delay"] = `${i * delay}s`;
        }
    }
    setTextAnimation(0.1,7,2,'ease-in','#ffc857',false);
    },2000);
    //end of main page text animation 

    setTimeout(function () {
        $('.article-container').fadeIn(2000);
    },4000)