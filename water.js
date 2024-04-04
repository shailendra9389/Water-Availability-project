document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".btn2");
    const searchInput = document.getElementById("form");
    
    searchButton.addEventListener("click", function() {
        const searchValue = searchInput.value.toLowerCase();
        const stateLinks = document.querySelectorAll(".dropdown-item");

        stateLinks.forEach(link => {
            const stateName = link.textContent.toLowerCase();
            const parent = link.parentNode;

            if (stateName.includes(searchValue)) {
                parent.style.display = "block";
            } else {
                parent.style.display = "none";
            }
        });
    });

    const stateLinks = document.querySelectorAll(".dropdown-item");

    stateLinks.forEach(link => {
        link.addEventListener("click", function() {
            const stateName = link.textContent.trim();
            displayWaterAvailability(stateName);
        });
    });

    function displayWaterAvailability(state) {
        console.log("Water availability information for", state);
    }
});

