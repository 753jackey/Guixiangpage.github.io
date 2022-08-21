let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

//按下按鈕之後產生的變化

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//回到上層按鈕

//當視窗在移動滑鼠時執行這個函數
window.onscroll = () => {
    //如果滑鼠滑過視窗的y軸大於60時
    if(window.scrollY > 60) {
        //就會把active叫出來
        document.querySelector('#scroll-up').classList.add('active');
    }
    else{
        //否則被隱藏
        document.querySelector('#scroll-up').classList.remove('active');
    }
}