const body = document.querySelector('body'),
    sidebar = body.querySelector('aside'),
    toggle = document.querySelector("#SideBarHandler")

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains('close')) {
        $("[data-toggle='tooltip']").tooltip("enable");
    } else {
        $('[data-toggle="tooltip"]').tooltip("disable");
    }
})

toggle.addEventListener('blur', () => {
    if (!sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        $("[data-toggle='tooltip']").tooltip("enable");
    }
})