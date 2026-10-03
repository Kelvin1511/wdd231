import { discoverItems } from '../data/discover.mjs';

// 1. Load cards dynamically into the DOM
const cardsContainer = document.querySelector('.cards-grid');

function displayCards(items) {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('section');
        card.classList.add(`card-${index + 1}`); // Used for CSS named grid areas

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

// 2. LocalStorage Visit Message Logic
const visitMessageElement = document.getElementById('visitor-message');
const lastVisitKey = 'chamber-last-visit-date';
const currentTime = Date.now();
const lastVisit = localStorage.getItem(lastVisitKey);

let message = "";

if (!lastVisit) {
    // First visit
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