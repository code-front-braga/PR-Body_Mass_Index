/* Aos Init */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
  });
}
window.addEventListener('load', aosInit);
aosInit();

/* Links */
let navMenuLinks = document.querySelectorAll('#header-ul-nav li a');

navMenuLinks.forEach(currentLink => {
  currentLink.addEventListener('click', () => {
    navMenuLinks.forEach(link => link.classList.remove('active-link'));
    currentLink.classList.add('active-link');
  });
});

/* Scroll */
function navMenuScrollSpy() {
  navMenuLinks.forEach(navMenuLink => {
    if (!navMenuLink.hash) return; //

    let section = document.querySelector(navMenuLink.hash);

    if (!section) return;

    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('#header-ul-nav a.active-link').forEach(link => link.classList.remove('active-link'));

      navMenuLink.classList.add('active-link');
    } else {
      navMenuLink.classList.remove('active-link');
    }
  });
}

window.addEventListener('load', navMenuScrollSpy);
document.addEventListener('scroll', navMenuScrollSpy);

/*Animations's Manipulation */

const submitButton = document.querySelector('.send-form-button');
const formContainer = document.querySelector('.form');
const infoBMI = document.querySelector('.bmi-info-container');

const closeBMIInfo = document.querySelector('.close-bmi-info');

submitButton.addEventListener('click', () => {
  formContainer.classList.add('hide-form');
});

formContainer.addEventListener('transitionend', () => {
  if (formContainer.classList.contains('hide-form')) {
    infoBMI.classList.add('show-info');
  }
});

closeBMIInfo.addEventListener('click', () => {
  infoBMI.classList.remove('show-info');
  formContainer.classList.remove('hide-form');
});
