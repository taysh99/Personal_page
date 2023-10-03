//open, close cart
let openMyCart = document.querySelector(".shopping");
let closeMyCart = document.querySelector(".closeShopping");
let body = document.querySelector("body");



openMyCart.addEventListener("click", () => {
  body.classList.add("active");
});
closeMyCart.addEventListener("click", () => {
  body.classList.remove("active");
});

//Card working
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// making function
function ready() {
  var removeCartButton = document.getElementsByClassName("bxs-trash-alt");
  console.log(removeCartButton);
  for (var i = 0; i < removeCartButton.length; i++) {
    var button = removeCartButton[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInput = document.getElementsByClassName("cart_quantity");
  for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
  //add to cart
  var addCart = document.getElementsByClassName("bx-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
    button.addEventListener("click", countProductBuy);
  }
  // buy button work
  document
    .getElementsByClassName("btn-button")[0]
    .addEventListener("click", buyButtonClicked);
}

function buyButtonClicked() {
  alert("your order is place");
  var cartContent = document.getElementsByClassName("cart_content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// ADd to cart
function addCartClicked(event) {
  var button = event.target;
  var shopProduct = button.closest(".card");
  var title = shopProduct.getElementsByClassName("card_title")[0].innerText;
  var price = shopProduct.getElementsByClassName("card_price")[0].innerText;
  var productImg = shopProduct.getElementsByClassName("product_img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function countProductBuy(){
    let cardBuy = document.getElementById('card-content-buy')
    console.log(cardBuy)
}

function addProductToCart(title, price, product_img) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart_box");
  var cartItems = document.getElementsByClassName("cart_content")[0];
  var cartItemsName = cartItems.getElementsByClassName("cart_title");
  for (var i = 0; i < cartItemsName.length; i++) {
    console.log("gff", cartItemsName[i].innerText,title)
    if (cartItemsName[i].innerText == title) {
      alert("done done");
      return;
    }
  }
  var cartBoxContent = `
                            <img src="${product_img}" class="cart_img">
                            <div class="detail_box">
                                <div class="cart_title">${title}</div>
                                <div class="cart_price">${price}</div>
                                <input type="number" value="1" class="cart_quantity">
                            </div>
                            <i class='bx bxs-trash-alt'></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("bxs-trash-alt")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart_quantity")[0]
    .addEventListener("change", quantityChanged);
}

function updatetotal() {
  var cartContent = document.getElementsByClassName("cart_content")[0];
  var cartBoxed = cartContent.getElementsByClassName("cart_box");
  total = 0;
  for (var i = 0; i < cartBoxed.length; i++) {
    var cartBox = cartBoxed[i];
    var priceElement = cartBox.getElementsByClassName("cart_price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart_quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("total_price")[0].innerText = "$" + total;
}
