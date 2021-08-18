document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelectorAll('.slide__order-item');
    slides = document.querySelectorAll('.slides-list');
    
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
                slides[k].classList.remove('slides-list--active');
                slides[j].classList.add('slides-list--active');
            }
        });
    }

    autoSlide();
    function autoSlide() {
        var timer = setInterval( function( ) {
            var currentSlide = document.querySelector('.slides-list--active');
            var viTriSlide = 0;
            for (viTriSlide = 0; currentSlide = currentSlide.previousElementSibling; viTriSlide++) {}

            if (viTriSlide < (slides.length-1)) {
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('slides-list--active');
                    button[i].classList.remove('slide__order-item--active');
                }

                slides[viTriSlide].nextElementSibling.classList.add('slides-list--active');
                button[viTriSlide].nextElementSibling.classList.add('slide__order-item--active');

            } else{
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('slides-list--active');
                    button[i].classList.remove('slide__order-item--active');
                }

                slides[0].classList.add('slides-list--active');
                button[0].classList.add('slide__order-item--active');
            }

        }, 5000);
    }
}, false);
