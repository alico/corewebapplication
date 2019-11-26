import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import {store} from './store/store';
import { routes } from './route';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router =  new VueRouter({
  routes,
  mode : 'history'
})

Vue.http.options.root = 'http://localhost:60104/';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
