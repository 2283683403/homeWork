import Vue from 'vue'
import Vuex from 'vuex'
import user from "./module/user";
import {getters} from './getters';
import home from "./module/home.js";
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  modules:{
    user,home
  }
})
