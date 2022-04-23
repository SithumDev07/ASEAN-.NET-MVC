const HRSideBar = document.querySelector('#HRSideBar');
const SideBarHandler = document.querySelector('#SideBarHandler');

SideBarHandler.addEventListener('click', () => {
    HRSideBar.classList.toggle('hrsidebar-default')
})