let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const rev = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

rev.reveal('.hero-text',{delay:200, origin:'top'});
rev.reveal('.hero-img',{delay:350, origin:'right'});
rev.reveal('.icons',{delay:450, origin:'left'});
rev.reveal('.scroll-down',{delay:500, origin:'right'});