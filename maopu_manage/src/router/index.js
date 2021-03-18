/**
 * @Author: aaenen
 * @Date: 2021-03-12 14:41:02
 * @LastEditTime: 2021-03-17 20:14:19
 * @LastEditors: aaenen
 * @Description:
 * @FilePath: /maopu_manage/src/router/index.js
 * 打码不易，且行且珍惜！
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },

    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children:[
        {
          path: '/Info',
          component: resolve => require(['../pages/InfoPage.vue'], resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../pages/ConsumerPage.vue'], resolve)
        },
        {
          path: '/MatchList',
          component: resolve => require(['../pages/MatchListPage.vue'], resolve)
        },
        {
          path: '/Player',
          component: resolve => require(['../pages/PlayerPage.vue'], resolve)
        },
        {
          path: '/SportList',
          component: resolve => require(['../pages/SportListPage.vue'], resolve)
        },
        {
          path: '/TeamList',
          component: resolve => require(['../pages/TeamListPage.vue'], resolve)
        },
        {
          path: '/Team',
          component: resolve => require(['../pages/TeamPage.vue'], resolve)
        }
      ]
    }

  ]
})
