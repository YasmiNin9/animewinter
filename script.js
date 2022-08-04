//mostrar menu mobile
function toggleMenu() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active');
        document.querySelector('.icon').src = "assets/menu_white_36dp.svg"

    } else {
        menuMobile.classList.add('active');
        document.querySelector('.icon').src = "assets/close_white_36dp.svg"
    }
}

//mostrar menu lateral mobile
function asideShow() {   //função criada
    let menuAside = document.querySelector('.mobile-menu-aside')  
    if (menuAside.classList.contains('open')){ 
        menuAside.classList.remove('open');
        document.querySelector('.asideicon').src = "assets/lupa_white.svg"
    } else {
        menuAside.classList.add('open');
    }
}