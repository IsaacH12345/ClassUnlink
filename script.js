document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        if (menu.style.display === "block" || menu.style.display === "") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.style.display = "none";
        }
    });
});
