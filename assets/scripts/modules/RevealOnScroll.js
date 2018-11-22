import $ from 'jquery'
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor(itemsToReveal, offset) {
    this.itemsToReveal = itemsToReveal
    this.offset = offset

    this.hideInitially()
    this.createWaypoints()
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item')
  }

  createWaypoints() {
    const { offset } = this
    this.itemsToReveal.each(function() {
      const self = this
      new Waypoint({
        element: self,
        handler: () => {
          $(self).addClass('reveal-item--is-visible')
        },
        offset,
      })
    })
  }
}

export default RevealOnScroll
