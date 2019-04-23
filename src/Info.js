import info from '../data/info.js'

const CURRENT_YEAR = (new Date()).getFullYear()

const style = {
  phone: `
    display: block;
    margin-top: 7px;
  `,

  copy: `
    display: block;
    font-size: 10px;
    text-align: right;
    padding: 20px calc((100vw - 1000px) / 2);
    color: #999;
    background-color: #343434;
    width: 100%;
  `,

  contact: `
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: #f8f8f8;
    background-color: #444;
    width: 100%;
    padding: 20px calc((100vw - 1000px) / 2);
  `,

  container: `
    font-family: Courier New;
  `
}

export default {
  render(h) {
    const infoItem = ({ content, attrs }) => h(
      'span',
      { attrs },
      [content]
    )

    const copy = infoItem({
      content: `todos os direitos reservados | ${CURRENT_YEAR}`,
      attrs: {
        style: style.copy
      }
    })

    const mail = infoItem({
      content: info.mail
    })

    const name = infoItem({
      content: info.name
    })

    const phone = infoItem({
      content: info.phone,
      attrs: {
        style: style.phone
      }
    })

    const medias = h(
      'div',
      {},
      [mail, h('br'), phone]
    )

    const contact = h(
      'div',
      {
        attrs: {
          style: style.contact
        }
      },
      [medias, name]
    )

    const container = h(
      'footer',
      {
        attrs: {
          style: style.container
        }
      },
      [contact, copy]
    )

    return container
  }
}
