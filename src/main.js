// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/common.scss'
// import GlobalComponent from './components/GlobalComponent'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import components from './components'
import * as filters from './filters' // 过滤器
import directives from './directive/index'
import MyAlert from '@/components/Extend/index'
import allApi from '@/api/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

process.env.MOCK && require('@/mock')

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`${name}`, components[key])
})

// 全局挂载filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 全局挂载directive
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

// 导入api并挂载到全局的属性下面
allApi.keys().map(item => {
  Object.keys(allApi(item)).forEach(key => {
    Vue.prototype['$' + key] = allApi(item)[key]
  })
})

Vue.use(ElementUI)
Vue.prototype.$MyAlert = MyAlert
// Vue.component('global-component', GlobalComponent)
Vue.config.productionTip = false
Vue.config.silent = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
