const body = document.querySelector('body'),
    sidebar = body.querySelector('aside'),
    toggle = body.querySelector(".toggle")

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})