console.log("Calorie Tracker script loaded.");

function login () {
    const username = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    console.log("Loggin in...");
    window.location.href = "calorie-tracker.html";
}