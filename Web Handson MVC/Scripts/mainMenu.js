const mainMenuElement = document.querySelector('#side-menu');
const sideBarHandler = document.querySelector('#SideBarHandler');

sideBarHandler.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu-opened');
})

sideBarHandler.addEventListener('blur', () => {
    if (mainMenuElement.classList.contains('main-menu-opened'))
        mainMenuElement.classList.toggle('main-menu-opened');
})