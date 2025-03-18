document.addEventListener("DOMContentLoaded", function () {
    const saveBtn = document.querySelector(".saveCbtn");
    const deleteBtn = document.querySelector(".deletebtn");

    saveBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let username = document.getElementById("change-uname").value.trim();
        let password = document.getElementById("change-pword").value.trim();
        let email = document.getElementById("change-email").value.trim();

        if (username === "" || password === "" || email === "") {
            alert("All fields must be filled out!");
            return;
        }

        // Simulating saving to database
        alert("Profile updated successfully!");
    });

    deleteBtn.addEventListener("click", function (event) {
        event.preventDefault();

        let confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
        
        if (confirmDelete) {
            alert("Account deleted.");
            // Simulate account deletion (In real implementation, call backend API)
        }
    });
});