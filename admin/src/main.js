// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 将创建的路由挂载到实例中
  router,
  // 将创建的store挂载到实例中去
  store,
  components: { App },
  template: '<App/>'
})
