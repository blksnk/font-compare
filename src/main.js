import Vue from 'vue';
import globalizeComponents from '@/components';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
globalizeComponents();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
