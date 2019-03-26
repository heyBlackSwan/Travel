// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'styles/reset.css'
// 高倍屏一像素边框问题解决方案
import 'styles/border.css'
import 'styles/iconfont.css'
// 移动端的点击300毫秒延迟解决方案:安装 fastclick 到依赖中(npm install fastclick --save)
import fastClick from 'fastclick'
// 解决移动端适配问题，转换rem，1rem等于设计稿宽度/10 px  (本项目采用html字体大小625%来计算，因为没有设计稿)
import './changeRem'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
