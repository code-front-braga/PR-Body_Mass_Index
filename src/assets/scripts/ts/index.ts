const links = document.querySelectorAll('#ul-nav-header li a');

links.forEach(currentLink => {
  currentLink.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    currentLink.classList.add('active');
  });
});
