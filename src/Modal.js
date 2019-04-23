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
    const iconClose = h(
      'i',
      {
        attrs: {
          style: `
            mask: url(assets/icon/minimize.svg) no-repeat center;
            width: 16px;
            height: 16px;
            display: inline-block;
            background-color: #fff;
            margin-left: 10px;
          `
        }
      }
    )

    const deedClose = h(
      'button',
      {
        attrs: {
          class: 'action-button'
        },
        on: {
          click: this.closeModal
        }
      },
      ['fechar', iconClose]
    )

    const modalDeeds = h(
      'nav',
      {
        attrs: {
          class: 'modal-actions'
        }
      },
      [
        this.$slots.actions,
        deedClose
      ]
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
