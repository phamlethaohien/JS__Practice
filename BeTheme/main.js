document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelectorAll('.slide__order-item');
    slides = document.querySelectorAll('.slides-item');
    
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {

            for (var i = 0; i < button.length; i++) {
                button[i].classList.remove('slide__order-item--active');
            }
            
            this.classList.add('slide__order-item--active')
            
            var activebutton = this;
            var j = 0;
            for (j = 0; activebutton = activebutton.previousElementSibling; j++) {
            }

            for ( var k = 0; k < slides.length; k++) {
                slides[k].classList.remove('slides-item--active');
                slides[j].classList.add('slides-item--active');
            }
        });
    }

}, false);
