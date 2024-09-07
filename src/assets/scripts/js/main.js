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

let navMenuLinks = document.querySelectorAll('#header-ul-nav li a');

function navmenuScrollspy() {
  navMenuLinks.forEach(navMenuLink => {
    let section = document.querySelector(navMenuLink.hash);

    if (!navMenuLink.hash) return;
    if (!section) return;

    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      document
        .querySelectorAll('#header-ul-nav li a.active-link')
        .forEach(link => link.classList.remove('active-link'));
      navMenuLink.classList.add('active-link');
    } else {
      navMenuLink.classList.remove('active-link');
    }
  });
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

/*Animations's Manipulation */

const submitButton = document.querySelector('.send-form-button');
const formContainer = document.querySelector('.form');
const infoBMI = document.querySelector('.bmi-info-container');

const closeBMIInfo = document.querySelector('.close-bmi-info');

submitButton.addEventListener('click', () => {
  formContainer.classList.add('hide-form');
});

formContainer.addEventListener('transitionend', () => {
  formContainer.classList.contains('hide-form') && infoBMI.classList.add('show-info');
});

closeBMIInfo.addEventListener('click', () => {
  infoBMI.classList.remove('show-info');
  formContainer.classList.remove('hide-form');
});
