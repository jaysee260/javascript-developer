// This script makes changes to the CSS to aid 
// in the animations of the banner
window.addEventListener('load', function(){
    setTimeout(function() {
        document.querySelector('.fade-in2').classList.remove('hidden');
    }, 1500);
    setTimeout(function() {
        let elems = document.querySelectorAll('.fade-in3');
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove('hidden');
        }
    }, 1750);
})