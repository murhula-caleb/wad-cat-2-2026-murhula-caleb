const swimmingClasses = [
    {
        name: "Little Splashers",
        age: "Ages 3 – 7",
        price: "KSh 3,500/month"
    },
    {
        name: "Junior Swimmers",
        age: "Ages 8 – 16",
        price: "KSh 4,500/month"
    },
    {
        name: "Adult Beginners",
        age: "18+ years",
        price: "KSh 4,000/month"
    },
    {
        name: "Competitive Training",
        age: "All Ages",
        price: "KSh 6,000/month"
    }
];

let classesContainer = document.querySelector("#classes-grid");

if (classesContainer) {
    swimmingClasses.forEach(function(swimClass){
        let card = document.createElement("div");
        card.classList.add("class-card");

        card.innerHTML = `
            <h3>${swimClass.name}</h3>
            <p>${swimClass.age}</p>
            <p>${swimClass.price}</p>
        `;

        classesContainer.appendChild(card);
    });
}
let wishlistInput = document.querySelector("#wishlist-input");
let wishlistAddBtn = document.querySelector("#wishlist-add-btn");
let wishlistList = document.querySelector("#wishlist-list");

function getWishlistFromStorage() {
    let stored = localStorage.getItem("wishlistItems");
    if (stored === null) {
        return [];
    }
    return JSON.parse(stored);
}

function saveWishlistToStorage(items) {
    localStorage.setItem("wishlistItems", JSON.stringify(items));
}

function createWishlistItemElement(value) {
    let li = document.createElement("li");
    li.classList.add("wishlist-item");

    let span = document.createElement("span");
    span.textContent = value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("wishlist-remove-btn");

    removeBtn.addEventListener("click", function() {
        li.remove();

        let items = getWishlistFromStorage();
        items = items.filter(function(item) {
            return item !== value;
        });
        saveWishlistToStorage(items);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    return li;
}

function addWishlistItem() {
    let value = wishlistInput.value.trim();

    if (value === "") {
        return;
    }

    let li = createWishlistItemElement(value);
    wishlistList.appendChild(li);

    let items = getWishlistFromStorage();
    items.push(value);
    saveWishlistToStorage(items);

    wishlistInput.value = "";
}

function loadWishlistFromStorage() {
    if (wishlistList) {
        let items = getWishlistFromStorage();
        items.forEach(function(value) {
            let li = createWishlistItemElement(value);
            wishlistList.appendChild(li);
        });
    }
}

if (wishlistAddBtn) {
    wishlistAddBtn.addEventListener("click", addWishlistItem);
}
loadWishlistFromStorage();
let contactForm = document.querySelector("#contact-form");

function handleContactSubmit(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let classSelect = document.querySelector("#class-select").value;
    let message = document.querySelector("#message").value.trim();
    let feedback = document.querySelector("#form-feedback");

    let phonePattern = /^[0-9+\s]{7,15}$/;

    if (name === "" || phone === "" || classSelect === "" || message === "") {
        feedback.textContent = "Please fill in all fields before sending.";
        feedback.classList.remove("success");
        feedback.classList.add("error");
        return;
    }

    if (!phonePattern.test(phone)) {
        feedback.textContent = "Please enter a valid phone number.";
        feedback.classList.remove("success");
        feedback.classList.add("error");
        return;
    }

    feedback.textContent = "Thanks " + name + "! Your message about \"" + classSelect + "\" has been received.";
    feedback.classList.remove("error");
    feedback.classList.add("success");

    contactForm.reset();
}

if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
}
let bannerHeader = document.querySelector("#home");
let bannerCaption = document.querySelector("#banner-caption");

if (bannerHeader && bannerCaption) {
    bannerHeader.addEventListener("click", function() {
        bannerCaption.classList.toggle("visible");
    });
}