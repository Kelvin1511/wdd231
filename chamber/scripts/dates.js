document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

if (hambutton && mainnav) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}