
const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');


humburger.addEventListener('click', ()=>{
    humburger.classList.toggle('is-active');
    menu.classList.toggle('active-menu');
    
})
