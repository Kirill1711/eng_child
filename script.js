//Бургер меню
let btn_bg_menu = document.querySelector('.header__bg_menu');
let bg_menu_list = document.querySelector('.header__menu');

btn_bg_menu.addEventListener('click', function () {
    if(bg_menu_list.classList.contains('active')){
        bg_menu_list.classList.remove('active');
        bg_menu_list.classList.add('unactive');
    } else {
        bg_menu_list.classList.remove('unactive');
        bg_menu_list.classList.add('active');
    }
});

//Скрыть показать описание
let btn_description = document.querySelectorAll('.product__discription button');

for(let btn of btn_description) {
    btn.addEventListener('click', function(){
        if(btn.previousElementSibling.classList.contains('unshow')){
            btn.previousElementSibling.classList.remove('unshow');
            btn.previousElementSibling.classList.add('show');
        }else {
            btn.previousElementSibling.classList.remove('show');
            btn.previousElementSibling.classList.add('unshow');
        }
    })
}


