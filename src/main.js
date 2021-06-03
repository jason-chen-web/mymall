import axios from 'axios'
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

import App from './App.vue'

import router from './router'
import store from './store'


axios.defaults.baseURL='/api'
axios.defaults.timeout= 8000


axios.interceptors.response.use(function (response) {
  let res= response.data
  if (res.status==0) {
    return res.data
  } else if (res.status==10) {
    window.location.href='/#/login'
  } else {
    alert(res.msg)
  }
})

// const mock = true;
// if(mock){
//   require('../public/mock/api')
// }

Vue.config.productionTip = false
Vue.prototype.$axios= axios;
Vue.use(VueLazyLoad,{
  loading:"/imgs/loading-svg/loading-bars.svg"
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

