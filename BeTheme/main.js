document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelectorAll('.slide__order-item');
    
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {

            for (var i = 0; i < button.length; i++) {
                button[i].classList.remove('slide__order-item--active');
            }
            
            this.classList.add('slide__order-item--active')
            
        });
    }

}, false);
