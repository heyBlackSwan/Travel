// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 高倍屏一像素边框问题解决方案
import './assets/styles/border.css'
// 移动端的点击300毫秒延迟解决方案:安装 fastclick 到依赖中(npm install fastclick --save)
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
