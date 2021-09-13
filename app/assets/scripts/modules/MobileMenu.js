class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__hamburger')
    this.menuContent = document.querySelector('.site-header__menu')
    this.events()
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu())
  }

  toggleMenu() {
    this.menuContent.classList.toggle('site-header__menu--is-visible')

    this.menuIcon.classList.toggle('site-header__hamburger--close-x')
  }
}

export default MobileMenu