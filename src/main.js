import Vue from 'vue'
import VueRouter from 'vue-router'

import info from './info.js'
import linkGroups from './link-groups.js'

import Modal from './Modal.js'

Vue.use(VueRouter)

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
