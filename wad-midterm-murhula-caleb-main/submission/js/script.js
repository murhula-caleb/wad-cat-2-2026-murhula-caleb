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

function addWishlistItem() {
    let value = wishlistInput.value.trim();

    if (value === "") {
        return;
    }

    let li = document.createElement("li");
    li.classList.add("wishlist-item");

    let span = document.createElement("span");
    span.textContent = value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("wishlist-remove-btn");

    removeBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    wishlistList.appendChild(li);

    wishlistInput.value = "";
}

if (wishlistAddBtn) {
    wishlistAddBtn.addEventListener("click", addWishlistItem);
}