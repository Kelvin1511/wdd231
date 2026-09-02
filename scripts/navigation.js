const mainNav = document.querySelector('#primary-nav');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuButton.classList.toggle('open');
});