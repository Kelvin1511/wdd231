import { fetchPlayers } from './dataService.js';
import { setupModal } from './modal.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Responsive Hamburger Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Local Storage
    const lastVisit = localStorage.getItem('lastBasketballVisit');
    const visitInfo = document.getElementById('visit-info');
    const currentDate = new Date().toLocaleDateString();

    if (visitInfo) {
        if (lastVisit) {
            visitInfo.textContent = `Welcome back! Your last visit was: ${lastVisit}`;
        } else {
            visitInfo.textContent = `Welcome for the first time to our basketball central hub!`;
        }
    }
    localStorage.setItem('lastBasketballVisit', currentDate);

    // Dynamic Content Generation
    const container = document.getElementById('players-container');
    if (container) {
        try {
            const players = await fetchPlayers();
            const topScorers = players.filter(player => player.points > 25);

            container.innerHTML = '';
            topScorers.forEach(player => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
          <img src="${player.image}" alt="${player.name}" loading="lazy">
          <h3>${player.name}</h3>
          <p><strong>Team:</strong> ${player.team}</p>
          <p><strong>Position:</strong> ${player.position}</p>
          <p><strong>Points per Game:</strong> ${player.points}</p>
          <button class="btn details-btn" data-name="${player.name}" data-team="${player.team}">View Details</button>
        `;
                container.appendChild(card);
            });

            setupModal();
        } catch (error) {
            console.error("Error loading dynamic data:", error);
            container.innerHTML = `<p style="color: red;">Sorry, we could not load the data at this moment.</p>`;
        }
    }
});