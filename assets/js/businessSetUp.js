// huge calender
document.addEventListener("DOMContentLoaded", function () {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    
    const daysContainer = document.querySelector(".days");
    const monthTitle = document.querySelector(".month li:nth-child(3)");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        daysContainer.innerHTML = ""; // Clear previous dates
        monthTitle.innerHTML = `${monthNames[currentMonth]}<br><span style="font-size:18px">${currentYear}</span>`;

        // Fill empty spaces for first week's alignment
        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
            const emptyLi = document.createElement("li");
            daysContainer.appendChild(emptyLi);
        }

        // Fill actual days
        for (let day = 1; day <= lastDate; day++) {
            const dayLi = document.createElement("li");
            dayLi.textContent = day;
            dayLi.addEventListener("click", function () {
                document.querySelectorAll(".days li").forEach(el => el.classList.remove("active"));
                dayLi.classList.add("active");
            });
            daysContainer.appendChild(dayLi);
        }
    }

    prevBtn.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        daysContainer.innerHTML = "";  // Clear existing days
        renderCalendar();
    });

    nextBtn.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    renderCalendar(); // Initialize calendar
});


// availabilities area
document.addEventListener("DOMContentLoaded", function () {
    const addAvailabilityBtn = document.getElementById("addAvailability");
    const saveAvailabilityBtn = document.getElementById("saveAvailability");
    const resetAvailabilityBtn = document.getElementById("resetAvailability");
    const availabilityTable = document.getElementById("availabilityTable");

    addAvailabilityBtn.addEventListener("click", function () {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const timeSlot = document.getElementById("timeSlot").value;

        if (!startDate || !endDate || !timeSlot) {
            alert("Please select all fields before adding availability.");
            return;
        }

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${startDate}</td>
            <td>${endDate}</td>
            <td>${timeSlot}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;
        
        availabilityTable.appendChild(newRow);
    });

    availabilityTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.closest("tr").remove();
        }
    });

    saveAvailabilityBtn.addEventListener("click", function () {
        alert("Availability saved successfully!");
        // Here you can add code to send the data to a backend/database.
    });

    resetAvailabilityBtn.addEventListener("click", function () {
        availabilityTable.innerHTML = "";
    });
});


// packages
document.addEventListener("DOMContentLoaded", function () {
    // Package form elements
    const packageForm = document.getElementById("packageForm");
    const packageNameInput = document.getElementById("packageName");
    const packagePriceInput = document.getElementById("packagePrice");
    const packageTableBody = document.getElementById("packageTableBody");

    // Add package event
    packageForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const packageName = packageNameInput.value.trim();
        const packagePrice = packagePriceInput.value.trim();

        if (packageName === "" || packagePrice === "") {
            alert("Please enter package name and price.");
            return;
        }

        // Create table row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${packageName}</td>
            <td>MYR ${packagePrice}</td>
            <td><button class="removePackage">Remove</button></td>
        `;

        // Add row to table
        packageTableBody.appendChild(row);

        // Clear input fields
        packageNameInput.value = "";
        packagePriceInput.value = "";

        // Attach remove event to the new button
        row.querySelector(".removePackage").addEventListener("click", function () {
            row.remove();
        });
    });

    // "Create Package" button functionality
    document.querySelector(".createbtn").addEventListener("click", function () {
        if (packageTableBody.children.length === 0) {
            alert("No packages added! Please add at least one package.");
        } else {
            alert("Packages successfully created!");
            // Here, you can send data to backend (if needed)
        }
    });
});