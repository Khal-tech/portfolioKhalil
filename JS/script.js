var typed = new Typed('.typing', {
    strings: ['Front-End Web Developer', 'UI/UX Designer', 'Engineer Student.'],
    typeSpeed: 80,
    loop: 1,
    });




const navLinkEls = document.querySelectorAll('.nav_link');
const sectionsEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionsEls.forEach(sectionsEl => {
        if(window.scrollY >= sectionsEl.offsetTop - sectionsEl.clientHeight / 1.6) {
            currentSection = sectionsEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active_nav').classList.remove('active_nav');
            navLinkEl.classList.add('active_nav');
        }
    })
});

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active_nav').classList.remove('active_nav');
        navLinkEl.classList.add('active_nav');
    })
});










