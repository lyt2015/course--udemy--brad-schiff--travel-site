import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header')
    this.headerTriggerElement = $('.large-hero__title')

    this.createHeaderWaypoint()
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
}

export default StickyHeader
