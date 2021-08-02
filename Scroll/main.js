document.addEventListener("DOMContentLoaded", function() {
    var trangthai = 'duoi400';
    var doituongmenu = document.querySelector('.menu');
    
    window.addEventListener('scroll',function() {
        if (window.pageYOffset > 400) {
            if (trangthai == 'duoi400') {
                trangthai = 'tren400';

                doituongmenu.classList.add('nholai');
            }   
        }
        else if (window.pageYOffset <= 300){
            if (trangthai == 'tren400') {
                doituongmenu.classList.remove('nholai');
                trangthai = 'duoi400';
            }
        }
    })

}, false)
