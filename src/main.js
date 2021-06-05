// 引入插件
import axios from 'axios'
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

// 引入组件
import App from './App.vue'
import router from './router'
import store from './store'

// jsonp ,cors 时axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
// 发请求时设置基础值，接口代理常规用'/api'，通过接口代理跳到后台，eg/api/a/b => /a/b
axios.defaults.baseURL='/api'
// 超时时间，超过后提示超时
axios.defaults.timeout= 8000


// 接口错误拦截
// 接口返回时一般只需要data里的数据
axios.interceptors.response.use(function (response) {
       // 获取接口返回值
  let res= response.data
   // 如果成功/status=0代表成功，其他都表示失败
   let path=location.hash
  
  if (res.status==0) {
         // 返回接口返回值里的data
    return res.data
        // 如果未登录
  } else if (res.status==10) {
    // 且地址不是首页地址-防止刷新首页后跳转
        // 跳转到登录页，main.js里用路有跳无效
        if (path!='#/index') {
          window.location.href='/#/login'

        }

  } else {
            // 否则弹出警报信息
    alert(res.msg)
    // 如果失败就抛出异常
    return Promise.reject(res);
  }
})
// else上面拦截的是业务

// mock开关
// const mock = true;
// if(mock){
//   require('../public/mock/api')
// }
// 默认关闭生产环境,开启后打印vue底层的console,info信息
Vue.config.productionTip = false
// 注册插件
Vue.prototype.$axios= axios;
Vue.use(VueLazyLoad,{
  loading:"/imgs/loading-svg/loading-bars.svg"
})
Vue.use(VueCookie)
// 注册组件

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

