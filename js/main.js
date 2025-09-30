document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('#mobileMenuBtn'),m=document.querySelector('#mobileMenu');
  if(b&&m){b.addEventListener('click',()=>m.classList.toggle('hidden'))}
});