
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() { 
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
       
    }

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < removeCartItemButtons.length; i++) {

    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('add_product')
for (var i = 0; i < addToCartButtons.length; i++) {
var button = addToCartButtons[i]
button.addEventListener('click', addToCartClicked)
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
 
function purchaseClicked(){
    alert('Apes appreciate your cooperation')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
       cartItems.removeChild(cartItems.firstChild) 
    }
    updateCartTotal()
}

 function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
 }

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
   var button = event.target 
   var shopItem = button.parentElement.parentElement.parentElement
   var title = shopItem.getElementsByClassName('product-title')[0].innerText
   var price = shopItem.getElementsByClassName('price')[0].innerText
   var imageSrc = shopItem.getElementsByClassName('product-image')[0].src
   
   addItemToCart(title, price, imageSrc)
   updateCartTotal()
}

var image = document.getElementById("myImage").src="hackanm.gif"
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
            alert('STOP This item is already added !')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}


function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var total = 0
for (var i = 0; i < cartRows.length; i++) {
var cartRow = cartRows[i]
var priceElement = cartRow.getElementsByClassName('cart-price')[0]
var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
[0]
var price = parseFloat(priceElement.innerText.replace('$', ''))
var quantity = quantityElement.value
total = total + (price * quantity)
 }
 total = Math.round(total * 100) / 100
 document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}



function Toggle3(){
    var btnvar = document.getElementById('btnh3')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}

function Toggle4(){
    var btnvar = document.getElementById('btnh4')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}

function Toggle5(){
    var btnvar = document.getElementById('btnh5')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}

function Toggle6(){
    var btnvar = document.getElementById('btnh6')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}

function Toggle7(){
    var btnvar = document.getElementById('btnh7')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}

function Toggle8(){
    var btnvar = document.getElementById('btnh8')
    if (btnvar.style.color == "red"){
        btnvar.style.color = "grey"
    }
    else{
        btnvar.style.color = "red"
    }
}