const actions = document.querySelector("#header-actions");
const menu = document.querySelector("#btn-menu");

function toggleMenu()
{
    actions.classList.toggle("active");
}

document.addEventListener("click", () => 
    {
        if (actions.classList.contains("active")) {
            if (!actions.contains(event.target) && !menu.contains(event.target)) {
                actions.classList.remove("active"); 
            }
        }
    }
);g