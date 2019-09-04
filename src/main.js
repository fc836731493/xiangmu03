// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios 
Vue.prototype.HOST = '/api' 


Vue.config.productionTip = false

// Axios.defaults.baseURL = 'https://douban.uieee.com/v2/movie/top250';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axios.interceptors.request.use(function (config) {
  if (config.method == "post"){
  config.data = qs.stringify(config.data)
  }
  return config;
  }, function (error) {
  
  return Promise.reject(error);
  });
  
  Axios.interceptors.response.use(function (response) {
  return response;
  }, function (error) {
  return Promise.reject(error);
  });
  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
