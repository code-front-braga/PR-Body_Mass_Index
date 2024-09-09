/* Aos Init */
function aosInit() {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
  });
}
window.addEventListener('load', aosInit);

/*Links Manipulation and Scrolls */
let navMenuLinks = document.querySelectorAll('#header-ul-nav li a');

function updateActiveLink() {
  navMenuLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (!link.hash) return;

      navMenuLinks.forEach(link => link.classList.remove('active-link'));

      e.currentTarget.classList.add('active-link');
    });

    let section = document.querySelector(link.hash);
    if (!section) return;

    let position = window.scrollY + 200;
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;

    if (position >= sectionTop && position <= sectionTop + sectionHeight) {
      document
        .querySelectorAll('#header-ul-nav li a.active-link')
        .forEach(link => link.classList.remove('active-link'));

      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}
window.addEventListener('load', updateActiveLink);
document.addEventListener('scroll', updateActiveLink);

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
