
const  menu_btn = document.querySelector('.hamburger-menu');

const nav_element = document.querySelector('.navbar');

var is_open = false;

function toggle() {
    if(!is_open){
        
        nav_element.classList.add('open');
        is_open = true;
    }
    else{
        nav_element.classList.remove('open');
        is_open = false;
    }
}

  menu_btn.addEventListener('click', toggle);


