const menuBar = document.querySelector(".mobile-collapse .fa-bars");
const navbar = document.querySelector("#navbar");
const xMark = document.querySelector("#navbar li.x-mark");
const thumbnails = document.querySelectorAll('.small-img-group .small-img-col');
const mainImg = document.querySelector('.single-pro-image .mainImg');
const sProduct = document.querySelectorAll('.pro');
const sPrice = document.querySelectorAll('#cart .s-price');
const tPrice = document.querySelectorAll('#cart .t-price');
const quantity = document.querySelectorAll('#cart .quantity');

menuBar.addEventListener('click',()=> {
  menuBar.classList.toggle('active');
  navbar.classList.toggle('active');
})

xMark.addEventListener('click',()=> {
  menuBar.classList.remove('active');
  navbar.classList.remove('active');
})

thumbnails.forEach((e => {
  e.addEventListener('click', (element)=> {
    mainImg.src = element.target.src;
  })
}))

sProduct.forEach(e=>{
  e.addEventListener('click',()=>{
    window.location.href = 'singleProduct.html';
  })
})

quantity.forEach(e=>{
  e.addEventListener('change',calcQ)
})

function calcQ (el) {
  const singlePrice = parseFloat(el.currentTarget.parentElement.previousElementSibling.innerHTML.substr(1));
  const q = parseInt(el.currentTarget.value);
  el.currentTarget.parentElement.nextElementSibling.innerHTML = `$${(singlePrice*q).toFixed(2)}`
  // el.currentTarget.parentElement.nextElementSibling.innerHTML = `$${Math.round(singlePrice*q * 100) / 100}`
}