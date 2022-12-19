const menu_btn = document.getElementById('mobile-open-button');
const close_btn = document.getElementById('mobile-close-button');
const menu_nav = document.getElementById('mobile-menu');

menu_btn.onclick = function(){
    menu_nav.classList.remove('hidden')
}

close_btn.onclick = function(){
    menu_nav.classList.add('hidden')
}