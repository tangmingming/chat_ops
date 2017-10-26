import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import {store} from "./store/store"

import echarts from 'echarts'

import cytoscape from "cytoscape"


Vue.prototype.$echarts = echarts
Vue.prototype.$cytoscape = cytoscape

Vue.use(ElementUI)

new Vue({
    store,
  router,
  el: '#app',
  render: h => h(App)
})