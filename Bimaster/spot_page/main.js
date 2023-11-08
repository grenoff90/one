// sidebar active class loop
const sidebarLis = document.querySelectorAll("aside ul li");
sidebarLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        sidebarLis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});