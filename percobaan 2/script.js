const menutogel=document.querySelector('.menutogel input');
const nav=document.querySelector('nav ul');

menutogel.addEventListener('click',function() {
    nav.classList.toggle('slide');
});
