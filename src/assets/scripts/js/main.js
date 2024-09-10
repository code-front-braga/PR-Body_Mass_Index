/* Aos Init */
function aosInit() {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
  });
}

/*********************************************************************/
const headerOffset = 200;
const navMenuLinks = document.querySelectorAll('#header-ul-nav li a');
const menuBar = document.querySelector('.menu-toggle-label');
const headerNav = document.querySelector('#header-nav');
const checkBox = document.querySelector('#menu-toggle-checkbox');

/*Links Manipulation and Scrolls */
function updateActiveLink() {
  navMenuLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (!link.hash) return;

      navMenuLinks.forEach(link => link.classList.remove('active-link'));

      e.currentTarget.classList.add('active-link');
    });

    updateSectionOnScroll(link);
    closeNavBarByLinks(link);
  });
}

function updateSectionOnScroll(link) {
  let section = document.querySelector(link.hash);
  if (!section) return;

  let position = window.scrollY + headerOffset;
  let sectionTop = section.offsetTop;
  let sectionHeight = section.offsetHeight;

  if (position >= sectionTop && position <= sectionTop + sectionHeight) {
    const activeLinks = document.querySelectorAll('#header-ul-nav li a.active-link');
    activeLinks.forEach(link => link.classList.remove('active-link'));

    link.classList.add('active-link');
  } else {
    link.classList.remove('active-link');
  }
}

/*Animations's Manipulation */
const submitButton = document.querySelector('.send-form-button');
const formContainer = document.querySelector('.form');
const BMIInfo = document.querySelector('.bmi-info-container');
const closeBMIInfo = document.querySelector('.close-bmi-info');

function hideForm() {
  submitButton.addEventListener('click', () => {
    addClassListOnElement(formContainer, 'hide-form');
  });
}

function displayBMIInfoAfterFormTransition() {
  formContainer.addEventListener('transitionend', () => {
    formContainer.classList.contains('hide-form') && addClassListOnElement(BMIInfo, 'show-info');
  });
}

function hideBMIInfo() {
  closeBMIInfo.addEventListener('click', () => {
    removeClassListOnElement(BMIInfo, 'show-info');
    removeClassListOnElement(formContainer, 'hide-form');
  });
}

function addClassListOnElement(element, classList) {
  element.classList.add(classList);
}

function removeClassListOnElement(element, classList) {
  element.classList.remove(classList);
}

/*Toggle Navbar and Links */
function toggleNavBar() {
  menuBar.addEventListener('click', () => {
    headerNav.classList.toggle('show-menu', checkBox.checked);
  });
}

function closeNavBarByLinks(link) {
  link.addEventListener('click', () => {
    headerNav.classList.remove('show-menu');
    checkBox.checked = false;
  });
}

window.addEventListener('load', aosInit);
window.addEventListener('load', updateActiveLink);
document.addEventListener('scroll', updateActiveLink);
toggleNavBar();
hideForm();
hideBMIInfo();
displayBMIInfoAfterFormTransition();
