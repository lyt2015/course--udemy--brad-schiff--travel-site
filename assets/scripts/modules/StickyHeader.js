import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header')
    this.headerTriggerElement = $('.large-hero__title')
    this.pageSections = $('.page-section')
    this.headerLinks = $('.primary-nav a')

    this.createHeaderWaypoint()
    this.createPageSectionWaypoints()
    this.addSmoothScrolling()
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll()
  }

  createHeaderWaypoint() {
    const { siteHeader, headerTriggerElement } = this
    new Waypoint({
      element: headerTriggerElement[0],
      handler: direction => {
        if (direction === 'down') {
          siteHeader.addClass('site-header--dark')
        } else {
          siteHeader.removeClass('site-header--dark')
        }
      },
    })
  }

  createPageSectionWaypoints() {
    const { headerLinks } = this
    this.pageSections.each((index, pageSection) => {
      new Waypoint({
        element: pageSection,
        handler: direction => {
          if (direction === 'down') {
            const matchingHeaderLink = pageSection.getAttribute('data-matching-link')
            headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '25%',
      })
      new Waypoint({
        element: pageSection,
        handler: direction => {
          if (direction === 'up') {
            const matchingHeaderLink = pageSection.getAttribute('data-matching-link')
            headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '-40%',
      })
    })
  }
}

export default StickyHeader
