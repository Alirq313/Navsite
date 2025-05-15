const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    ul.classList.toggle('show');

    let ham_child = hamburger.firstElementChild;
    if (ul.classList.contains ('show')) {
        ham_child.classList.replace('fa-bars', 'fa-xmark');
        
    }
    else{
        ham_child.classList.replace('fa-xmark', 'fa-bars');
    }
   
    // hamburger.classList.toggle('active');

});