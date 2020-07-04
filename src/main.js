import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import toast from 'components/common/Toast'
import FastClick  from 'fastclick'
import lazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(lazyload,{
  loading: require('./assets/img/common/placeholder.png')
})
FastClick.attach(document.body)
new Vue({

  
  render: h => h(App),
  store,
  router,
}).$mount('#app')
