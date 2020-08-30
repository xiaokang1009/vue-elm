/*
  入口文件
 */
import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入公共样式
import './common/stylus/index.styl'
//  清除移动端0.3秒的点击延迟
import fastclick from 'fastclick'

import store from './store'
// 引入mint-ui
import MintUI from 'mint-ui'
// 引入mint-ui的样式
import 'mint-ui/lib/style.min.css'
// 使用mint-ui
Vue.use(MintUI)

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
