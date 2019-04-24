import introduceHTML from '../docs/introduce-en'
import info from '../data/info'

const style = {
  job: `
    font-size: 0.65rem
  `,

  signature: `
    text-align: right
  `,

  container: `
    font-size: 0.95rem;
    padding: 20px calc((100vw - 1000px) / 2);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.05);
    font-weight: 100;
    line-height: 2;
    letter-spacing: 0.3px;
    text-align: justify;
  `
}

export default {
  render(h) {
    const name = h(
      'span',
      {},
      [info.name]
    )

    const job = h(
      'small',
      {
        attrs: {
          style: style.job
        }
      },
      [info.job]
    )

    const signature = h(
      'p',
      {
        attrs: {
          style: style.signature
        }
      },
      [name, h('br'), job]
    )

    const introduce = h(
      'div',
      {
        domProps: {
          innerHTML: introduceHTML
        }
      }
    )

    const aboutContainer = h(
      'div',
      {
        attrs: {
          style: style.container
        }
      },
      [introduce, signature]
    )

    return aboutContainer
  }
}
