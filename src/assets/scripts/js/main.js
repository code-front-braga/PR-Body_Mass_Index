/* Aos Init */
function aosInit() {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
  });
}
aosInit();

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

function checkScreenSize() {
  return window.matchMedia('(max-width: 480px)').matches;
}

function toggleFormVisibility(hide) {
  const isSmallScreen = checkScreenSize(); // Verifica se a tela é menor que 480px
  const formClass = isSmallScreen ? 'hide-form-480px' : 'hide-form';
  const bmiClass = isSmallScreen ? 'show-bmi-info-480px' : 'show-bmi-info';

  formContainer.classList[hide ? 'add' : 'remove'](formClass);
  BMIInfo.classList[hide ? 'add' : 'remove'](bmiClass);
}

submitButton.addEventListener('click', () => toggleFormVisibility(true));
closeBMIInfoButton.addEventListener('click', () => toggleFormVisibility(false));

window.addEventListener('load', updateActiveLink);
document.addEventListener('scroll', updateActiveLink);
toggleNavBar();
