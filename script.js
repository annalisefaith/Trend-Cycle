const addBtn = document.getElementsByClassName("add-to-cart");
const showListButton = document.getElementById("show-list-btn");
const listContainer = document.querySelector(".list-container");
const cart = document.getElementById("popup");
const total = document.getElementById("total");
const subtotal = document.getElementById("subtotal");
const content = document.getElementById("content");
const checkout_popup = document.getElementById("popup2");
const checkout = document.getElementById("checkout");
const itemArray = [];
const imgArray = [];
const priceArray = [];
let subtotalValue = 0.0;
let totalValue = 0.0;

function calculateTotal() {


  if(itemArray.length == 0) {
    totalValue = 0;
  } 
  else {
    totalValue = (subtotalValue * 1.053 + 1);
  }
  
}

function addToCart(event) {
  const itemName = event.target.parentNode.querySelector("h5").textContent;
  if (itemArray.includes(itemName)) return;
  const itemImage = event.target.parentNode.querySelectorAll("img")[1];
  const itemPrice = event.target.parentNode
    .querySelector(".price")
    .textContent.match(/\d+/g)
    .map(Number);
  itemArray.push(itemName);
  imgArray.push(itemImage);
  priceArray.push(itemPrice);
  subtotalValue += parseInt(itemPrice);
}
function removeFromCart(event) {
  subtotalValue =
    subtotalValue -
    parseInt(
      event.target.parentNode
        .querySelector("p")
        .textContent.match(/\d+/g)
        .map(Number)
    );
  itemArray.splice(
    itemArray.indexOf(event.target.parentNode.querySelector("h5"))
  );
  priceArray.splice(
    priceArray.indexOf(event.target.parentNode.querySelector("p"))
  );
  imgArray.splice(
    imgArray.indexOf(event.target.parentNode.querySelector("img"))
  );
  event.target.parentNode.parentNode.parentNode.querySelectorAll(
    "h4"
  )[0].textContent = `Subtotal: $${subtotalValue}`;
  calculateTotal();
  event.target.parentNode.parentNode.parentNode.querySelectorAll(
    "h4"
  )[1].textContent = `Total: $${totalValue.toFixed(2)}`;

  event.target.parentNode.innerHTML = "";
  checkout.style.display = itemArray.length == 0 ? "none" : "block";
}

addBtn[0].addEventListener("click", addToCart);
addBtn[1].addEventListener("click", addToCart);
addBtn[2].addEventListener("click", addToCart);
addBtn[3].addEventListener("click", addToCart);
addBtn[4].addEventListener("click", addToCart);
addBtn[5].addEventListener("click", addToCart);
addBtn[6].addEventListener("click", addToCart);
addBtn[7].addEventListener("click", addToCart);
addBtn[8].addEventListener("click", addToCart);
addBtn[9].addEventListener("click", addToCart);
addBtn[10].addEventListener("click", addToCart);
addBtn[11].addEventListener("click", addToCart);
addBtn[12].addEventListener("click", addToCart);
addBtn[13].addEventListener("click", addToCart);
checkout.addEventListener("click", function (event) {
 while(itemArray.length) {
  itemArray.pop();
  priceArray.pop();
  imgArray.pop();
 }
  subtotalValue = 0.0;
  calculateTotal();
  content.innerHTML = `<p id="content">TC members get 20% off sign up <a href="#page1">HERE</a>!</p`;
  subtotal.innerHTML = `Subtotal: $${subtotalValue}`;
  total.innerHTML = `Total: $${totalValue.toFixed(2)}`;
  checkout_popup.show();
 
}  )
showListButton.addEventListener("click", function () {
  console.log(itemArray);
  calculateTotal();
    cart.childNodes[1].innerHTML = "Checkout";
    console.log(cart.childNodes[3]);
    for (i = 0; i < itemArray.length; i++) {
      if (content.textContent.includes(itemArray[i])) continue; // skip duplicates
      content.innerHTML += `<div id="list"><img src="${imgArray[i].src}" alt="${imgArray[i].alt}"> <h5>${itemArray[i]}</h5> <p class="price">$${priceArray[i]}</p>   <button class="remove-icon">&#10006;</button> </div>`;
      subtotal.innerHTML = `Subtotal: $${subtotalValue}`;
      total.innerHTML = `Total: $${totalValue.toFixed(2)}`;
    }
    for (i = 0; i < document.getElementsByClassName("remove-icon").length; i++) {
      document
        .getElementsByClassName("remove-icon")
        [i].addEventListener("click", removeFromCart);
    }
    checkout.style.display = (itemArray.length == 0) ? 'none' : 'block';
    cart.show();
  
});
