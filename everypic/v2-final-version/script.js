(function(){
  'use strict'; // Enforce strict mode to catch common coding mistakes
  console.log('reading js'); // Log a message to confirm the script is running

  // Add an event listener for the scroll event
  window.addEventListener("scroll", function () {
      // Select the h2 element inside the section with id "two"
      const triggerEl = document.querySelector("#two h2");

      // Select the section with id "three" that will be scaled
      const scalingEl = document.querySelector("#three");
    
      // Calculate the trigger point: position of the h2 element plus its height and an offset of 230px
      const triggerPoint = triggerEl.offsetTop + triggerEl.offsetHeight + 230;
    
      // Determine how far the user has scrolled past the trigger point -- part way down the second image
      const scrollPastTrigger = window.scrollY - triggerPoint;
    
      // Set a threshold to control how much the scaling effect progresses (how quickly it zooms in)
      const threshold = 170;
    
      // Calculate the progress of scaling (between 0 and total of 1)
      let progress = Math.min(Math.max(scrollPastTrigger / threshold, 0), 1);
    
      // Apply the scaling transformation to the selected element of #three
      scalingEl.style.transform = `scale(${progress})`;
  });



})();
