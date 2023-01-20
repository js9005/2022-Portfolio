const menuBtn = document.querySelector('.menubtn');
const menuBox = document.querySelector('nav');
const menuList = document.querySelectorAll('nav ul li a');

menuBtn.addEventListener('click', function(){
    menuBox.classList.toggle('menu-active');
});

menuList.forEach((item, index) => {
    item.addEventListener('click', function(){
        menuBox.classList.remove('menu-active');
    });
});
