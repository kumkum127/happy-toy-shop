// =====================================
// HAPPY TOY SHOP - CART SYSTEM
// =====================================

function getCart() {

    var cart = localStorage.getItem("toyCart");

    if (cart === null) {
        return [];
    }

    return JSON.parse(cart);
}


// =====================================
// SAVE CART
// =====================================

function saveCart(cart) {

    localStorage.setItem(
        "toyCart",
        JSON.stringify(cart)
    );
}


// =====================================
// ADD PRODUCT TO CART
// =====================================

function addToCart(name, price) {

    var cart = getCart();

    cart.push({
        name: name,
        price: price
    });

    saveCart(cart);

    alert(name + " has been added to your cart!");
}


// =====================================
// DISPLAY CART
// =====================================

function displayCart() {

    var cart = getCart();

    var cartItems =
        document.getElementById("cartItems");

    var totalElement =
        document.getElementById("total");


    if (cartItems === null) {
        return;
    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<h3>Your cart is empty.</h3>";

        if (totalElement !== null) {
            totalElement.innerHTML =
                "Total: ₹0";
        }

        return;
    }


    var total = 0;


    for (var i = 0; i < cart.length; i++) {

        cartItems.innerHTML +=

            "<div class='cart-item'>" +

            "<h3>" +
            cart[i].name +
            "</h3>" +

            "<p>Price: ₹" +
            cart[i].price +
            "</p>" +

            "</div>";


        total =
            total +
            Number(cart[i].price);
    }


    if (totalElement !== null) {

        totalElement.innerHTML =
            "Total: ₹" + total;
    }
}


// =====================================
// CLEAR CART
// =====================================

function clearCart() {

    localStorage.removeItem("toyCart");

    displayCart();
}


// =====================================
// LOAD CART WHEN PAGE OPENS
// =====================================

window.onload = function() {

    displayCart();

};