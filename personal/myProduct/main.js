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



// Xử lý sự kiện click

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
  }
  // buy button work
  document
    .getElementsByClassName("btn-button")[0]
    .addEventListener("click", buyButtonClicked);

    var myIcons = document.getElementsByClassName('bx-heart');

    // Lặp qua từng biểu tượng và gắn sự kiện "click"
    for (var i = 0; i < myIcons.length; i++) {
        myIcons[i].addEventListener('click', changeIconColor);
    }
}
function changeIconColor(event) {
    // Lấy biểu tượng đã được click
    var clickedIcon = event.target;

    // Thêm hoặc xóa lớp 'clicked' để thay đổi màu
    if (clickedIcon.classList.contains('clicked')) {
        clickedIcon.classList.remove('clicked'); // Xóa lớp nếu đã được click trước đó
    } else {
        clickedIcon.classList.add('clicked'); // Thêm lớp nếu chưa được click trước đó
    }
}
function buyButtonClicked() {
  alert("Đã mua hàng xong");
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
  calculateTotalQuantity() 
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
  calculateTotalQuantity() 
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
  calculateTotalQuantity() 
}



function addProductToCart(title, price, product_img) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart_box");
  var cartItems = document.getElementsByClassName("cart_content")[0];
  var cartItemsName = cartItems.getElementsByClassName("cart_title");
  for (var i = 0; i < cartItemsName.length; i++) {
    console.log("gff", cartItemsName[i].innerText,title)
    if (cartItemsName[i].innerText == title) {
      alert("Sản phẩm đã được thêm");
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

function calculateTotalQuantity() {
    var quantityInputs = document.getElementsByClassName('cart_quantity');
    var totalQuantity = 0;

    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        var quantity = parseInt(input.value);

        // Kiểm tra xem giá trị quantity có là một số hợp lệ không
        if (!isNaN(quantity) && quantity > 0) {
            totalQuantity += quantity;
        }
    }

    // totalQuantity bây giờ chứa tổng số lượng hàng đã đặt
    console.log("Tổng số lượng hàng đã đặt: " + totalQuantity);
    var countElement = document.querySelector('.count');
    if (countElement) {
        countElement.innerText = totalQuantity;
    }

    return totalQuantity;
}

// Gọi hàm calculateTotalQuantity() để tính tổng số lượng hàng đã đặt

// Get reference to the button
