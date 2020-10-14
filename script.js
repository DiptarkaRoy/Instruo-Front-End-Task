var free = document.querySelector('#free-btn');

window.onscroll = () => {
    var top = window.scrollY;

    if (top >= 72 && free.style.color != 'white') {
        free.style.color = 'white';
        free.style.background = '#0052CC';
    }
    else if (top < 72 && free.style.color == 'white') {
        free.style.color = '#0052CC';
        free.style.background = 'initial';
    }
}