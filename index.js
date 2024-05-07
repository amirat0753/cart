document.addEventListener("DOMContentLoaded", function() {
    const quantityPlusButtons = document.querySelectorAll(".fa-plus-circle");
    const quantityMinusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fa-heart");
    const totalPriceElement = document.querySelector(".total");

    // Function to update total price
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".card").forEach(function(card) {
            const quantity = parseInt(card.querySelector(".quantity").textContent);
            const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.slice(0, -2)); // Remove the dollar sign and convert to number
            total += quantity * unitPrice;
        });
        totalPriceElement.textContent = total.toFixed(2) + " $"; // Update total price with 2 decimal places
    }

    // Attach event listeners for quantity adjustment
    quantityPlusButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityElement = button.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    quantityMinusButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityElement = button.parentElement.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Attach event listeners for item deletion
    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const card = button.closest(".card");
            card.remove();
            updateTotalPrice();
        });
    });

    // Attach event listeners for liking items
    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.classList.toggle("text-danger"); // Toggle the heart icon color
        });
    });
});
