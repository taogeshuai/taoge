// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
axios.defaults.baseURL = 'http://123.207.32.32:8000';
axios.defaults.timeout = 5000;
axios.all([axios({
	url:'/home/multidata',
	method: 'get'
})]).then(axios.spread((res1,res2)=>{
	
	console.log(res1.data);
	console.log(res1.data[1]);
	
}))