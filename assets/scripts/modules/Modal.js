import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalButtons = $('.open-modal')
    this.closeModalButton = $('.modal__close')
    this.modal = $('.modal')

    this.registerEvents()
  }

  openModal() {
    this.modal.addClass('modal--is-visible')

    //  prevent default behavior of click <a href="#">
    return false
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible')
  }

  keyPressCloseModal(e) {
    if (e.key === 'Escape') {
      this.modal.removeClass('modal--is-visible')
    }
  }

  registerEvents() {
    // click the open modal button
    const that = this
    this.openModalButtons.each((index, button) => {
      $(button).click(that.openModal.bind(that))
    })

    // click the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this))

    // pushes any key to close the modal
    $(document).keyup(this.keyPressCloseModal.bind(this))
  }
}

export default Modal
