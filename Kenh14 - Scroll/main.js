document.addEventListener("DOMContentLoaded", function(){
    var menudo = document.querySelector('.menu');
    var trangthai = "duoi25";

    window.addEventListener('scroll',function() {
        if (window.pageYOffset > 25) {
            if (trangthai == "duoi25") {
                menudo.classList.add('menuden');
                trangthai = 'tren25';
                
            }
        } else if(window.pageYOffset < 1){
            if (trangthai == "tren25") {
                menudo.classList.remove('menuden');
                trangthai = 'duoi25';
                
            }
        }
            
    })

}, false);
