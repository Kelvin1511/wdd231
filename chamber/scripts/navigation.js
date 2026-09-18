document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const primaryNav = document.getElementById('primary-nav');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', () => {
            primaryNav.classList.toggle('open');
            menuButton.classList.toggle('open');
        });
    }
});