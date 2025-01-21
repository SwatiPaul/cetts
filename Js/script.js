addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}
(function(){
	if(typeof _bsa !== 'undefined' && _bsa) {
  		// format, zoneKey, segment:value, options
  		_bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
  	}
})();

(function(){
if(typeof _bsa !== 'undefined' && _bsa) {
	// format, zoneKey, segment:value, options
	_bsa.init('fancybar', 'CKYDL2JN', 'placement:demo');
}
})();

(function(){
	if(typeof _bsa !== 'undefined' && _bsa) {
  		// format, zoneKey, segment:value, options
  		_bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
  	}
})();
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-98H8KRKT85');

  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Change this value to adjust when the background changes
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Ensure the slider loops smoothly by duplicating the content dynamically
const slider = document.querySelector('.slider');
const images = Array.from(slider.children);

// Clone the first set of images and append them for smooth infinite scrolling
images.forEach(img => {
  const clone = img.cloneNode(true);
  slider.appendChild(clone);
});

// Testimonias

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= testimonialCards.length) {
    currentIndex = 0; // Loop back to the first card
  }

  // Slide to the next card
  testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Buses

// Data for each category
const categoryData = {
    car12: [
      { img: "/Image/Img02.jpeg", alt: "12 Seater AC Bus - Image 1" },
      { img: "/Image/Img02.jpeg", alt: "12 Seater AC Bus - Image 2" },
    ],
    car24: [
      { img: "/Image/Img02.jpeg", alt: "24 Seater AC Bus - Image 1" },
      { img: "/Image/Img02.jpeg", alt: "24 Seater AC Bus - Image 2" },
    ],
    car36: [
      { img: "/Image/Img02.jpeg", alt: "36 Seater AC Bus - Image 1" },
      { img: "/Image/Img02.jpeg", alt: "36 Seater AC Bus - Image 2" },
    ],
    car50: [
      { img: "/Image/Img02.jpeg", alt: "50 Seater AC Bus - Image 1" },
      { img: "/Image/Img02.jpeg", alt: "50 Seater AC Bus - Image 2" },
    ],
    luxury: [
      { img: "/Image/Img02.jpeg", alt: "Luxury Bus - Image 1" },
      { img: "/Image/Img02.jpeg", alt: "Luxury Bus - Image 2" },
    ],
  };
  
  // Select the gallery container
  const galleryContent = document.getElementById("gallery-content");
  
  // Function to render the gallery for a category
  function renderGallery(categoryId) {
    // Clear existing content
    galleryContent.innerHTML = "";
  
    // Get data for the selected category
    const images = categoryData[categoryId];
  
    // Check if images exist for the selected category
    if (images) {
      images.forEach((image) => {
        // Create a column for each image
        const col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-4");
  
        // Create the image element
        const img = document.createElement("img");
        img.src = image.img;
        img.alt = image.alt;
        img.classList.add("img-fluid");
  
        // Append the image to the column
        col.appendChild(img);
  
        // Append the column to the gallery
        galleryContent.appendChild(col);
      });
    } else {
      // If no data, display a message
      galleryContent.innerHTML = `<div class="col-12"><p class="text-center">No buses available for this category.</p></div>`;
    }
  }
  
  // Add event listeners to category links
  document.querySelectorAll(".listing a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      const categoryId = link.id; // Get the ID of the clicked link
      renderGallery(categoryId); // Render the gallery for the selected category
    });
  });
  
  // Load the default category (12 SEATER) when the page loads
  window.addEventListener("DOMContentLoaded", () => {
    renderGallery("car12"); // Render 12 SEATER category
  });