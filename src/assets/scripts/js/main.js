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
const headerOffset = 100;
const navMenuLinks = document.querySelectorAll('#header-ul-nav li a');
const menuBar = document.querySelector('.menu-toggle-label');
const headerNav = document.querySelector('#header-nav');
const checkBox = document.querySelector('#menu-toggle-checkbox');

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

/*Form Animation */
const submitButton = document.querySelector('.send-form-button');
const formContainer = document.querySelector('.form');
const BMIInfo = document.querySelector('.bmi-info-container');
const closeBMIInfoButton = document.querySelector('.close-bmi-info');

function toggleClassState(element, classListToAdd, classListToRemove) {
  if (classListToAdd) element.classList.add(classListToAdd);
  element.classList.remove(classListToRemove);
}

function toggleFormDisplay() {
  const isMobileView = window.matchMedia('(max-width: 480px)').matches;

  submitButton.addEventListener('click', () => {
    toggleClassState(formContainer, isMobileView ? 'hide-form-481px' : 'hide-form', null);
    toggleClassState(BMIInfo, isMobileView ? 'show-bmi-info-481px' : 'show-bmi-info', null);
  });

  closeBMIInfoButton.addEventListener('click', () => {
    toggleClassState(formContainer, null, isMobileView ? 'hide-form-481px' : 'hide-form');
    toggleClassState(BMIInfo, null, isMobileView ? 'show-bmi-info-481px' : 'show-bmi-info');
  });
}

window.addEventListener('load', aosInit);
window.addEventListener('load', updateActiveLink);
document.addEventListener('scroll', updateActiveLink);
toggleNavBar();
toggleFormDisplay();
