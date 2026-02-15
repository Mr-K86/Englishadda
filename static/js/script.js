// Expand/Collapse card with smooth slide animation
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card .word-header");
    cards.forEach(header => {
        header.addEventListener("click", function() {
            const body = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-btn');
            if (body.style.maxHeight) {
                body.style.maxHeight = null;
                body.style.paddingTop = null;
                body.style.paddingBottom = null;
                toggleBtn.textContent = "+";
            } else {
                body.style.maxHeight = body.scrollHeight + "px";
                body.style.paddingTop = "15px";
                body.style.paddingBottom = "15px";
                toggleBtn.textContent = "−";
            }
        });
    });

    // Live search filter
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", function() {
        const filter = this.value.toLowerCase();
        const vocabCards = document.querySelectorAll("#vocabContainer .card");
        vocabCards.forEach(card => {
            const word = card.querySelector(".en").textContent.toLowerCase();
            if (word.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
