const cards = document.getElementsByClassName("product-card");
const cart = []

const cartDisplay = document.getElementById("cart"); 

for(let i = 0; i < cards.length; i++){
    cards[i].lastElementChild.onclick = addItemToCart;
}

function addItemToCart(e){
    cart.push(e.target.parentNode.getAttribute("value"));

    toggleCartButton(e.target);
    UpdateCart();
}

function removeFromCart(e){
    cart.splice(cart.indexOf(e.target.parentNode.getAttribute("value")), 1);

    toggleCartButton(e.target);
    UpdateCart();
}

function toggleCartButton(cartButton){
    if(cartButton.onclick == addItemToCart){
        cartButton.onclick = removeFromCart;
        cartButton.textContent = "remove from cart";
    }
    else{
        cartButton.onclick = addItemToCart;
        cartButton.textContent = "add to cart";
    }
}

function UpdateCart()
{
    let display = "";
    cart.forEach(x => {
        display += `<div class="cart-item">${x}</div><br>`;
    })

    cartDisplay.innerHTML = display; 
    
}