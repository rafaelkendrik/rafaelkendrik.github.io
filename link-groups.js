const handleLink = uri => {
  if (!uri) {
    throw new Error('Expected prop "to" or "href", both are empty')
    return
  }

  const isExternalLink = uri.includes('http')

  if (isExternalLink) {
    return {
      is: 'a',
      href: uri,
      target: '_blank'
    }
  }

  else {
    return {
      is: 'router-link',
      to: uri
    }
  }
}

const serializeLinkToTemplateBind = links => links
  .map((link = {}) => (
    Object.assign(link, handleLink(link.to || link.href)),
    link.icon = 'assets/icons/' + (link.icon || `${link.label.toLowerCase()}.png`),
    link
  ))

export default [{
  name: 'profile',
  links: serializeLinkToTemplateBind([{
    label: 'linkedin',
    to: 'https://br.linkedin.com/in/rafael-kendrik'
  }, {
    label: 'github',
    to: 'https://github.com/rafaelkendrik'
  }, {
    label: 'CV',
    icon: 'curriculum.png',
    to: '?modal=curriculum'
  }])
}, {
  name: 'founder',
  links: serializeLinkToTemplateBind([{
    label: 'coming-soon',
    to: '#',
    disabled: true
  }])
}, {
  name: 'companies',
  links: serializeLinkToTemplateBind([{
    label: 'sices',
    to: '#',
    disabled: true
  }, {
    label: 'kolina',
    to: '#',
    disabled: true
  }, {
    label: 'k13',
    to: '#',
    disabled: true
  }, {
    label: 'compufácil',
    icon: 'compufacil.png',
    to: '#',
    disabled: true
  }, {
    label: 'focus',
    to: '#',
    disabled: true
  }])
}, {
  name: 'contributions',
  links: serializeLinkToTemplateBind([{
    label: 'SOpt',
    icon: 'stackoverflow.png',
    to: 'https://pt.stackoverflow.com/users/30735'
  }, {
    label: 'forks',
    to: 'https://github.com/rkendrik-forks'
  }, {
    label: 'community',
    to: 'https://github.com/rkendrik-community'
  }])
}]
