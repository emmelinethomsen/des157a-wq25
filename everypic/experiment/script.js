(function(){
    'use strict';
    console.log('reading js');

    window.addEventListener("scroll", function () {
        const triggerEl = document.querySelector("#two h2");
        const scalingEl = document.querySelector("#three");
      
        const triggerPoint = triggerEl.offsetTop + triggerEl.offsetHeight + 230;
      
        const scrollPastTrigger = window.scrollY - triggerPoint;
      
        const threshold = 170;
      
        let progress = Math.min(Math.max(scrollPastTrigger / threshold, 0), 1);
      
        scalingEl.style.transform = `scale(${progress})`;
      });
      

})();