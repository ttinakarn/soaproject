import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import StarRating from 'vue-star-rating'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.component('star-rating', StarRating);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')