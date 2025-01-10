
const fileInput = document.getElementById('fileInput');
const slideshow = document.getElementById('slideshow');
let images = [];
let index = 0;

      // Handle file selection
fileInput.addEventListener('change', (event) => {
images = Array.from(event.target.files).map(file => {
    return URL.createObjectURL(file);
 });
  
index = 0; // Reset index
          if (images.length > 0) {
              startSlideshow();
          }
      });

      function startSlideshow() {
          if (images.length === 0) return;

          // Create img element if it doesn't exist
          let imgElement = slideshow.querySelector('img');
          if (!imgElement) {
              imgElement = document.createElement('img');
              slideshow.appendChild(imgElement);
          }

          // Set the current image
imgElement.src = images[index];
index = (index + 1) % images.length;

setTimeout(startSlideshow, 600);
      }