const body = document.querySelector('body'),
    sidebar = body.querySelector('aside'),
    toggle = document.querySelector("#SideBarHandler")

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

toggle.addEventListener('blur', () => {
    if (!sidebar.classList.contains('close'))
        sidebar.classList.toggle('close');
})