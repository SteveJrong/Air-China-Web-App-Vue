// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/routes' // 导入自定义的router路由
import store from './vuex/store' // 导入自定义的store仓库

import VueRouter from 'vue-router' // 导入Vue路由插件
import VueResource from 'vue-resource' // 导入Resource资源插件
import VueMaterial from 'vue-material' // 导入谷歌Material风格插件
import 'vue-material/dist/vue-material.css' // 导入Google Material风格插件的CSS样式
import 'vue-material/dist/theme/default.css'
import 'babel-polyfill' // 解决IE11的兼容性问题
import './assets/svg-with-js/js/fontawesome-all.js'
import Icon from 'vue-svg-icon/Icon.vue' // 导入vue-svg-icon Svg图标管理插件

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.component('icon', Icon)

//Vue.config.productionTip = false // 禁用输出生产提示
//Vue.http.options.emulateHTTP = true
//Vue.http.options.emulateJSON = true

const router = new VueRouter({
  routes
})

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})