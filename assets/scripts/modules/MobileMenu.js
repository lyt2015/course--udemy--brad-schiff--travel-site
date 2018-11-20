import $ from 'jquery'

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header')
    this.menuIcon = $('.site-header__menu-icon')
    this.menuContent = $('.site-header__menu-content')

    this.registerEvents()
  }

  registerEvents() {
    this.menuIcon.click(this.toggleMenu.bind(this))
  }

  toggleMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible')
    this.siteHeader.toggleClass('site-header--is-expanded')
  }
}

export default MobileMenu
