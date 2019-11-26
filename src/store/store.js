import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import product from './modules/product';
import account  from './modules/account';

Vue.use(Vuex);
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true
// const http=Vue.http
// export default http


export const store = new Vuex.Store({
    // state: {
       
    // },
    // getters: {
       

    // },
    // mutations: {
       
    // },
    // actions: {
       
    // }
    modules :{
        product,
        account
    }
});