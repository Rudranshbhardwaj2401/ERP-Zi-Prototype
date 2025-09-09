window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("main").style.display = "block";
        }, 1000);
    }, 3000); // matches the bar animation
});

function setRole(btn) {
    document.querySelectorAll("button").forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
}
