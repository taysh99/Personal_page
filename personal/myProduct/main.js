//open, close cart
let openMyCart = document.querySelector('.shopping');
let closeMyCart = document.querySelector('.CloseShopping');
let body = document.querySelector('body');

openMyCart.addEventListener('click',()=>{
    body.classList.add('active');
})
closeMyCart.addEventListener('click',()=>{
    body.classList.remove('active');
})

// add to cart
let list = document.querySelectorAll('.list .card');

list.forEach(card=> {
    card.addEventListener('click', function(event){
        if(event.target.classList.contains('bx-cart')){
            var newItem= card.cloneNode(true)
            
            let listCart = document.querySelectorAll('.my_cart .card')
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key')==newItem.getAttribute('data-key')){
                    alert('dd')
                }
            })


            document.querySelector('.listCart').appendChild(newItem)
        }
    })
})
