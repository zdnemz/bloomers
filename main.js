// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop

  window.pageYOffset > fixedNav ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed')
}

const navBarMenu = document.getElementById('navBarMenu')

const navBar = (e) => {
  e.classList.toggle('fa-xmark')
  navBarMenu.classList.toggle('menu-active')
};