document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('header-icon');
    var nd = document.getElementsByClassName('header__list')
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
            if (this.classList[1] == 'header-icon--click' ) {
                this.classList.remove('header-icon--click')

                var noidunghienra = this.getAttribute('data-visible');
                var phantuhienra = document.getElementById(noidunghienra);

                phantuhienra.classList.toggle('header__list--click');
            }
            else{
                for (let j = 0; j < nut.length; j++) {
                    nut[j].classList.remove('header-icon--click');
                    nut[j].classList.remove('header__list--click');
                }
                nut[i].classList.toggle('header-icon--click');
                nut[i].classList.toggle('header__list--click');

                var noidunghienra = this.getAttribute('data-visible');
                var phantuhienra = document.getElementById(noidunghienra);
                for (let k = 0; k < nd.length; k++) {
                    nd[k].classList.remove('header__list--click');;
                }
                phantuhienra.classList.toggle('header__list--click');
            }
        };
    }
}, false)
