/**
 * @Author: aaenen
 * @Date: 2021-03-12 14:41:02
 * @LastEditTime: 2021-03-17 16:54:12
 * @LastEditors: aaenen
 * @Description:
 * @FilePath: /maopu_manage/src/main.js
 * 打码不易，且行且珍惜！
 */
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import 'babel-polyfill'
import VCharts from 'v-charts'
import axios from 'axios'
//import VueAxios from 'vue-axios'
//import VueResource from 'vue-resource'

//Vue.use(VueResource)
//Vue.use(VueAxios,axios)
Vue.use(ElementUI)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
