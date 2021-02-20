import Vue from 'vue'
import App from './App.vue'

//引入ui组件
import Message from './components/index'
Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
