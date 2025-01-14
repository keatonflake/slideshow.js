const addButton = document.getElementById("add");
const fileInput = document.getElementById("fileInput");

addButton.addEventListener("click", () => {
    fileInput.classList.toggle("hidden");
});

const slideshow = document.getElementById("slideshow");
let images = [];
let index = 0;

fileInput.addEventListener("change", (event) => {
    images = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
    index = 0;
    if (images.length > 0) {
        startSlideshow();
    }
});

function startSlideshow() {
    if (images.length === 0) return;

    let imgElement = slideshow.querySelector("img");
    if (!imgElement) {
        imgElement = document.createElement("img");
        slideshow.appendChild(imgElement);
    }

    imgElement.src = images[index];
    index = (index + 1) % images.length;

    setTimeout(startSlideshow, 6000);
}
