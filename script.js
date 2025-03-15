document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cartButton = document.getElementById("cart-button");
    const cartCountSpan = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            animateCart();
            alert("Produk telah ditambahkan ke keranjang!");
        });
    });

    cartButton.addEventListener("click", function () {
        alert(`Anda memiliki ${cartCount} item dalam keranjang.`);
    });

    function animateCart() {
        cartButton.style.transform = "scale(1.1)";
        setTimeout(() => {
            cartButton.style.transform = "scale(1)";
        }, 200);
    }
});
