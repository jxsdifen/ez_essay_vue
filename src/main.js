// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import Lodash from 'lodash' //
import fullCalendar from 'vue-fullcalendar'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.less'
import './assets/fonts/iconfont.css'
import './assets/plugins/mCustomScrollbar/jquery.mCustomScrollbar.css'

import $ from 'jquery'
import './assets/plugins/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js'
import Mock from './mock/mock'


Mock.mockData();
Vue.config.productionTip = false
Vue.use(Element)
Vue.component('full-calendar', fullCalendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
