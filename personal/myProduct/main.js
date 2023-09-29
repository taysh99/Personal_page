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

}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}