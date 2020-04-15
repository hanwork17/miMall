import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'

const mock = false;
if(mock){
  require('./mock/api');
}
// 根据前端跨域方式调整
axios.defaults.baseURL = '/api';
// 根据环境变量获取不同请求地址
// axios.defaults.baseURL = env.baseURL;
// 超时8秒
axios.defaults.timeout = 8000;
// 接口错误拦截器
axios.interceptors.response.use(function (response){
  let res = response.data;
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
