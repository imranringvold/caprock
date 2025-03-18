document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("pword").value.trim();

        if (email === "" || password === "") {
            alert("Email and Password cannot be empty!");
            return;
        }

        // Simulated user credentials (Replace with database validation in a real project)
        const validEmail = "tourguide@example.com";
        const validPassword = "12345678";

        if (email === validEmail && password === validPassword) {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Redirect to the main dashboard
        } else {
            alert("Invalid Email or Password. Please try again.");
        }
    });
});