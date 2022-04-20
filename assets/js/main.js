/*========== afficher menu ==========*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*========== activer et cacher menu ==========*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*lien actif*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*retirer menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*========== afficher scroll up ==========*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 20) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========== scroll revel animation ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
});

/*========== modal ==========*/
const open = document.getElementById("open");
const modal__container = document.getElementById("modal__container");
const close = document.getElementById("close");

open.addEventListener('click', () => {
    modal__container.classList.add('afficher')
})

close.addEventListener('click', () => {
    modal__container.classList.remove('afficher')
})

/*========== surlignage animation ==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
sr.reveal('.section-title ', {});

/*scroll accueil*/
sr.reveal('.accueil__title', {});
sr.reveal('.bouton', { delay: 200 });
sr.reveal('.accueil__img', { delay: 400 });
sr.reveal('.accueil__social-icone', { interval: 200 });

/*scroll apropos*/
sr.reveal('.apropos__img', {});
sr.reveal('.apropos__subtitle', { delay: 400 });
sr.reveal('.apropos__texte', { delay: 400 });

/*scroll etude*/
sr.reveal('.etudes__img', {});
sr.reveal('.etudes__subtitle', { delay: 400 });
sr.reveal('.etudes__texte-title', { delay: 400 });
sr.reveal('.etudes__texte', { delay: 400 });

/*scroll compétences*/
sr.reveal('.competences__subtitle', {});
sr.reveal('.competences__texte', {});
sr.reveal('.competences__data', { interval: 200 });
sr.reveal('.competences__img', { delay: 600 });

/*scroll stages*/
sr.reveal('.stages__img', { interval: 200 });
sr.reveal('.stages__subtitle', { delay: 400 });
sr.reveal('.stages__texte', { delay: 400 });

/*scroll projet*/
sr.reveal('.projets__img', { interval: 200 });
sr.reveal('.projets__subtitle', { delay: 400 });
sr.reveal('.projets__texte', { delay: 400 });

/*scroll CONTACT*/
sr.reveal('.contact__input', { interval: 200 });