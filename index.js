// Add more
const addButton = document.getElementById("add")
const fileInput = document.getElementById('fileInput');

addButton.addEventListener("click", () => {
    fileInput.classList.toggle("hidden")
})

// Slideshow Section

const slideshow = document.getElementById('slideshow');
let images = [];
let index = 0;

fileInput.addEventListener('change', (event) => {
images = Array.from(event.target.files).map(file => {
    return URL.createObjectURL(file);
 });
  
index = 0;
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

imgElement.src = images[index];
index = (index + 1) % images.length;

setTimeout(startSlideshow, 6000);
      }