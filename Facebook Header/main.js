document.addEventListener("DOMContentLoaded",function(){
    var tamgiac = document.getElementsByClassName("header-icon");
    var tamgiac = tamgiac[0];
    var danhsach = document.getElementsByClassName("header__list");
    var danhsach = danhsach[0];

    tamgiac.onclick = function() {
        this.classList.toggle('header-icon--click');  
        danhsach.classList.toggle('header__list--click');
    }

}, false)



