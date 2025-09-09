window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("main").style.display = "block";
        }, 1000);
    }, 3000); // matches the bar animation
});

let currentRole = "student"

function setRole(btn) {
    document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
    currentRole = btn.textContent.toLowerCase()
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault()

    let userid = document.getElementById("userid").value
    let password = document.getElementById("password").value

    let accounts = {
        student: { id: "student123", pass: "stu@123" },
        parent: { id: "student456", pass: "stu@456" }
    }

    let selected = accounts[currentRole]

    if (userid === 'student123' && password === 'stu@123') {
        window.location.href = "./demodashboard1.html"
    } else if (userid === 'student456' && password === 'stu@456') {
        window.location.href = "./demodashboard2.html"
    } else {
        alert(`Invalid credentials for ${currentRole}.`)
    }
}
)


function setRole(btn) {
    document.querySelectorAll("button").forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
}
