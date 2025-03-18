// Sample data for bookings (You can replace this with data fetched from backend)
const bookings = [
    { customer: "Howard Baker", package: "Island Adventure", date: "2025-04-15", status: "Confirmed" },
    { customer: "Emily Johnson", package: "Jaguar Travel", date: "2025-05-02", status: "Not Confirmed" },
    { customer: "Briar Williams", package: "City Tour", date: "2025-03-30", status: "Pending" }
];

// Function to dynamically load booking data into the table
function loadBookings() {
    const tableBody = document.getElementById("bookingsTableBody");

    bookings.forEach(booking => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${booking.customer}</td>
            <td>${booking.package}</td>
            <td>${booking.date}</td>
            <td class="${booking.status === 'Confirmed' ? 'status-confirmed' : 'status-pending'}">
                ${booking.status}
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Chat functionality
function chatFunctionality() {
    const chatInput = document.querySelector(".chat-input");
    const chatBox = document.getElementById("chatBox");
    const sendButton = document.querySelector(".sendbtn");

    sendButton.addEventListener("click", function() {
        const messageText = chatInput.value.trim();

        if (messageText !== "") {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "guide");
            messageDiv.textContent = messageText;
            chatBox.appendChild(messageDiv);
            chatInput.value = "";

            // Scroll to the latest message
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
}

// Initialize functions when page loads
document.addEventListener("DOMContentLoaded", function() {
    loadBookings();
    chatFunctionality();
});