const usernameButton = document.querySelector(".username-button");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

if (usernameButton) {    
    usernameButton.addEventListener("click", (e) => {     
        e.stopPropagation();
        dropdownContent.classList.toggle("hidden");
    });
};

document.addEventListener("click", (e) => {    
    if (dropdown && !dropdown.contains(e.target)) {
        dropdownContent.classList.add("hidden");
    };
});


