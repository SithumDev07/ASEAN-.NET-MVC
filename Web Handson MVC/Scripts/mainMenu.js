const mainMenuElement = document.querySelector('#HomeSideBar');
const sideBarHandler = document.querySelector('#SideBarHandler');

sideBarHandler.addEventListener('click', () => {
    mainMenuElement.classList.toggle('close');
})

sideBarHandler.addEventListener('blur', () => {
    if (!mainMenuElement.classList.contains('close'))
        mainMenuElement.classList.toggle('close');
})