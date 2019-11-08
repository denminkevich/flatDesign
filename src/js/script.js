let scrollDown = document.querySelector('.first_display-scroll_down');

function scrollFunc() {
    window.addEventListener('scroll', function() {
        let y = window.scrollY;
    
        if (y >= 1 & y <= 800) {
            scrollDown.classList.remove('hideScrollDown');
            scrollDown.classList.add('showScrollDown');
        } else {
            scrollDown.classList.remove('showScrollDown');
            scrollDown.classList.add('hideScrollDown');
        }
    });
}

scrollFunc();
