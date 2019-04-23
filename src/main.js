import Vue from 'vue'
import VueRouter from 'vue-router'

import linkGroups from '../data/link-groups.js'

import Info from './Info.js'
import Modal from './Modal.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  router,

  components: {
    Info,
    Modal
  },

  data: () => ({
    linkGroups
  })
}).$mount('#app')
