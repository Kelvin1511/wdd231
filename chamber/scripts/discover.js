// Data of the 8 items directly inside the script to avoid local module loading errors
const discoverItems = [
    {
        name: "Historic Downtown",
        address: "100 Main Street, Cochabamba",
        description: "Explore the rich history and beautiful architecture of our downtown district.",
        photo: "images/image1.webp",
        alt: "Historic Downtown view"
    },
    {
        name: "City Central Park",
        address: "200 Park Avenue, Cochabamba",
        description: "A wonderful green space featuring walking trails, playgrounds, and picnic areas.",
        photo: "images/image2.webp",
        alt: "Central Park greenery"
    },
    {
        name: "Community Art Museum",
        address: "300 Gallery Road, Cochabamba",
        description: "Showcasing local and international artists with rotating monthly exhibitions.",
        photo: "images/image3.webp",
        alt: "Art Museum building"
    },
    {
        name: "Riverside Walking Trail",
        address: "400 River Parkway, Cochabamba",
        description: "Enjoy scenic views and peaceful walks right alongside the main river.",
        photo: "images/image4.webp",
        alt: "Riverside trail"
    },
    {
        name: "Public Library & Cultural Center",
        address: "500 Library Way, Cochabamba",
        description: "A hub for learning, community events, and extensive book collections.",
        photo: "images/image5.webp",
        alt: "Public Library"
    },
    {
        name: "City Sports Complex",
        address: "600 Athletic Blvd, Cochabamba",
        description: "State-of-the-art facilities for sports, fitness classes, and outdoor games.",
        photo: "images/image6.webp",
        alt: "Sports Complex field"
    },
    {
        name: "Local Farmers Market",
        address: "700 Market Square, Cochabamba",
        description: "Fresh produce, handmade crafts, and local foods every weekend.",
        photo: "images/image7.webp",
        alt: "Farmers market stalls"
    },
    {
        name: "Sunset Scenic Overlook",
        address: "800 Mountain View Rd, Cochabamba",
        description: "The best panoramic view of the entire city, especially during sunset.",
        photo: "images/image8.webp",
        alt: "Scenic overlook view"
    }
];

// Load cards dynamically into the DOM with specific classes for grid areas
const cardsContainer = document.querySelector('.cards-grid');

function displayCards(items) {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('section');
        card.classList.add(`card-${index + 1}`);

        card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.photo}" alt="${item.alt}" loading="lazy" width="300" height="200">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;
        cardsContainer.appendChild(card);
    });
}

displayCards(discoverItems);

// LocalStorage Visit Message Logic
const visitMessageElement = document.getElementById('visitor-message');
const lastVisitKey = 'chamber-last-visit-date';
const currentTime = Date.now();
const lastVisit = localStorage.getItem(lastVisitKey);

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentTime - Number(lastVisit);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysDifference} days ago.`;
    }
}

if (visitMessageElement) {
    visitMessageElement.textContent = message;
}

localStorage.setItem(lastVisitKey, currentTime);

// Dynamic sizing for member spotlight images on Home page
window.addEventListener('DOMContentLoaded', () => {
    const spotlightImages = document.querySelectorAll('.spotlight img, .member-card img, #spotlight img, .card img');
    spotlightImages.forEach(img => {
        if (!img.closest('.hero') && !img.closest('header')) {
            img.style.width = '80px';
            img.style.height = '80px';
            img.style.objectFit = 'contain';
            img.style.display = 'block';
            img.style.margin = '0.5rem auto';
        }
    });
});