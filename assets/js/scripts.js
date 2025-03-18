document.addEventListener("DOMContentLoaded", function () {
    // Language Selection
    const languageSelector = document.getElementById("language");
    
    // Load saved language from localStorage
    if (localStorage.getItem("selectedLanguage")) {
        languageSelector.value = localStorage.getItem("selectedLanguage");
    }

    // Attach event listener after setting the stored value
    languageSelector.addEventListener("change", function () {
        localStorage.setItem("selectedLanguage", languageSelector.value);
        location.reload();
    });
    
    languageSelector.addEventListener("change", function () {
        localStorage.setItem("selectedLanguage", languageSelector.value);
        alert("Language changed to: " + languageSelector.options[languageSelector.selectedIndex].text);
    });

    // Search Bar Functionality
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.querySelector(".searchbtn");

    searchButton.addEventListener("click", function () {
        let query = searchBar.value.trim();
        if (query) {
            alert("Searching for: " + query);
            // You can integrate real search functionality here
        }
    });

    // Navigation Active State
    const navLinks = document.querySelectorAll(".navigationButton nav ul li a");
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});