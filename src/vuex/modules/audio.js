import Vue from "vue";
import https from "../../api/index.js";

const state = {
  byId: {},
  allIds: []
};
const getters = {
  audioList(state) {
    const { byId, allIds } = state;
    return allIds.map(id => byId[id]);
  },
};
const mutations = {
  CHANGE_AUDIO(state, audios) {
    Vue.set(state, "byId", audios.byId);
    Vue.set(state, "allIds", audios.allIds);
  }
};
const actions = {
  async getAudios({ commit }) {
    const audios = await https.getAudios();
    commit("CHANGE_AUDIO", audios);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
