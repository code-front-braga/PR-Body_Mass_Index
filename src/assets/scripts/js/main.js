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
let navMenuLinks = document.querySelectorAll('#ul-nav-header li a');

navMenuLinks.forEach(currentLink => {
  currentLink.addEventListener('click', () => {
    navMenuLinks.forEach(link => link.classList.remove('active-link'));
    currentLink.classList.add('active-link');
  });
});

/* Scroll */
function navMenuScrollSpy() {
  navMenuLinks.forEach(navMenuLink => {
    if (!navMenuLink.hash) return;

    let section = document.querySelector(navMenuLink.hash);

    if (!section) return;

    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));

      navMenuLink.classList.add('active');
    } else {
      navMenuLink.classList.remove('active');
    }
  });
}
window.addEventListener('load', navMenuScrollSpy);
document.addEventListener('scroll', navMenuScrollSpy);

/*Animations's Manipulation */

const submitButton = document.querySelector('.submit-button');
const formContainer = document.querySelector('.bmi-page-wrapper form');
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
})

// const genderButtons = document.querySelectorAll('.gender-container button');

// genderButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.classList.contains('male-button')) console.log('Masculino');
//     if (button.classList.contains('female-button')) console.log('Feminino');
//   });
// });
