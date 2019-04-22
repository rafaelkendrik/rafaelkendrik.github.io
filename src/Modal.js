export default {
  computed: {
    isModalOpened() {
      return Boolean(this.$route.query.modal)
    }
  },

  methods: {
    closeModal() {
      this.$router.back()
    }
  },

  render(h) {
    const deedClose = h(
      'button',
      {
        attrs: {
          style: 'float: right'
        },
        on: {
          click: this.closeModal
        }
      },
      ['fechar']
    )

    const modalDeeds = h(
      'nav',
      {
        attrs: {
          class: 'modal-actions'
        }
      },
      [deedClose]
    )

    const modalContainer = h(
      'div',
      {
        attrs: {
          class: 'modal-container'
        },
      },
      [
        this.$slots.default,
        modalDeeds
      ]
    )

    if (this.isModalOpened) {
      return modalContainer
    }
  }
}
