let nav = document.querySelector('nav');
let mainContent = document.querySelector('.main-content');
let check = document.querySelector('#check');
let about = document.querySelectorAll('.personal-inner');

// Add an event listener to the checkbox element
check.addEventListener('change', () => {
    if (check.checked) {
        mainContent.style.width = '70%';
        about.style.width='100%';
    } else {
        mainContent.style.width = '100%';
    }
});

// Call this function initially to set the width based on the initial state of the checkbox
function setInitialWidth() {
    if (check.checked) {
        mainContent.style.width = '70%';
        about.style.width='100%';
    } else {
        mainContent.style.width = '100%';
    }
}

setInitialWidth();


// typed
const typed = new Typed(".typing", {
    strings:["Frontend-End Developer", "Graphic Designer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})