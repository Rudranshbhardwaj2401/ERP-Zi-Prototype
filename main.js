function setRole(btn) {
    document.querySelectorAll("button").forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
}
