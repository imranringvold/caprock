document.addEventListener("DOMContentLoaded", function () {
    const bookings = [
        { customer: "Howard Baker", package: "Island Adventure", status: "Confirmed" },
        { customer: "Emily Johnson", package: "Jaguar Travel", status: "Not Confirmed" },
        { customer: "Briar Williams", package: "City Tour", status: "Pending" }
    ];

    const bookingsTable = document.getElementById("bookingsTable");

    bookings.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.customer}</td>
            <td>${booking.date}</td>
            <td>${booking.package}</td>
            <td class="${booking.status === 'Confirmed' ? 'status-confirmed' : 'status-pending'}">
                ${booking.status}
            </td>
        `;
        bookingsTable.appendChild(row);
    });
});