import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutation";
import actions from "./action";
import modules from "./modules/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state,
  mutations,
  actions
});

export default store;
