import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:resolve =>require(['../pages/Login.vue'],resolve)

    }
  ]
})
