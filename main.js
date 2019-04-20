import info from './info.js'
import linkGroups from './link-groups.js'
import Modal from './Modal.js'

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  router,

  components: {
    Modal
  },

  data: () => ({
    info,
    linkGroups
  })
}).$mount('#app')
