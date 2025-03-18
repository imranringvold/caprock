document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".signupbtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById("uname").value.trim();
        let password = document.getElementById("pword").value;
        let confirmPassword = document.getElementById("conPword").value;
        let email = document.getElementById("email").value.trim();
        let userType = document.getElementById("userType").value; // Get selected value

        if (username === "" || password === "" || confirmPassword === "" || email === "" || userType === "") {
            alert("Please fill in all fields and select a user type.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Redirect to the correct signup page
        if (userType === "customer") {
            window.location.href = "signup.html"; // Redirect customers
        } else {
            alert("Sign up successful as a Tour Guide!");
            document.querySelector("form").reset();
        }
    });

    document.querySelector(".cancelbtn").addEventListener("click", function () {
        document.querySelector("form").reset();
    });
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}