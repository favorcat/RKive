import Vue from 'vue';
import axios from 'axios';
import VueMasonry from 'vue-masonry-css';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueMasonry);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
