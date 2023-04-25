document.getElementById("settings").addEventListener("click", function () {
    const settingsModal = document.getElementById("settings-modal");
    settingsModal.style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function () {
    const settingsModal = document.getElementById("settings-modal");
    settingsModal.style.display = "none";
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
    const menuList = document.querySelector(".menu-list");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        document.querySelector(".menu-list").style.display = "flex";
    } else {
        document.querySelector(".menu-list").style.display = "none";
    }
});
