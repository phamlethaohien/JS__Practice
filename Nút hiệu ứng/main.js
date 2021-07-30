document.addEventListener("DOMContentLoaded",function() {
    var nut = document.querySelector('.nut'),
        leftsidebar = document.querySelector('.sidebar'),
        den = document.querySelector('.den'),
        container = document.querySelector('.all');
        
    nut.onclick = function() {
        den.classList.add('den--act');
        container.classList.add('all--move-right');
    };

    den.onclick = function() {
        den.classList.remove('den--act');
        container.classList.remove('all--move-right');
    }

}, false)
