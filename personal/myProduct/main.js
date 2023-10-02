//open, close cart
let openMyCart = document.querySelector('.shopping');
let closeMyCart = document.querySelector('.closeShopping');
let body = document.querySelector('body');

openMyCart.addEventListener('click',()=>{
    body.classList.add('active');
})
closeMyCart.addEventListener('click',()=>{
    body.classList.remove('active');
})

//Card working
if (document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else{
    ready()
}
// making function
function ready(){
    var removeCartButton = document.getElementsByClassName('bxs-trash-alt')
    console.log(removeCartButton)
    for (var i = 0; i<removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInput = document.getElementsByClassName('cart_quantity')
    for (var i = 0; i< quantityInput.length; i++){
        var input = quantityInput[i]
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName('bx-cart')
    for (var i = 0; i< addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked)
    }
}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal()
}
function quantityChanged(event){
    var input  = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value =1
    }
    updatetotal()
}
// ADd to cart
function addCartClicked(event){
    var button = event.target
    var shopProduct = button.closest(".card")
    var title =  shopProduct.getElementsByClassName('card_title')[0].innerText
    // var price = shopProduct.getElementsByClassName("card_price")[0].innerText
    console.log(title)
}

function updatetotal(){
    var cartContent= document.getElementsByClassName('cart_content')[0]
    var cartBoxed = cartContent.getElementsByClassName('cart_box')
    total = 0
    for (var i =0; i<cartBoxed.length; i++){
        var cartBox =cartBoxed[i]
        var priceElement = cartBox.getElementsByClassName('cart_price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart_quantity')[0]
        var price  = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity =  quantityElement.value
        total = total + (price * quantity)

        document.getElementsByClassName('total_price')[0].innerText="$" + total

    }
}