document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.style.display = "none";
        }
    });
});
