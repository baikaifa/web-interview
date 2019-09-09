import Vue from 'vue'
import ElementUI from 'element-ui';
import  axios from './http';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'

//引入mock
require('./mock.js');

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
