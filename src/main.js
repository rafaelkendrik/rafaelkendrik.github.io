import Vue from 'vue'
import VueRouter from 'vue-router'

import linkGroups from '../data/link-groups'

import About from './About'
import Info from './Info'
import Modal from './Modal'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  router,

  components: {
    About,
    Info,
    Modal
  },

  data: () => ({
    linkGroups
  })
}).$mount('#app')
