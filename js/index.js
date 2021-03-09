
const  menu_btn = document.querySelector('.hamburger-menu');

const nav_element = document.querySelector('.navbar');

var is_open = false;

function toggle() {

    if(is_open === false){

        nav_element.classlist.add('open');
    }
    else{

        nav_element.classlist.remove('open');

    }

}

  menu_btn.addEventListener('click', toggle);


