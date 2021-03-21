import Vue from 'vue';
import https from "../../api/index.js";

const state = {
  byId: {},
  allIds: []
};
const mutations = {
  CHANGE_PHOTO(state, photos) {
    Vue.set(state, 'byId', photos.byId)
    Vue.set(state, 'allIds', photos.allIds)
  }
};
const actions = {
  async getPhotos({ commit }) {
    const photos = await https.getPhotos();
    commit("CHANGE_PHOTO", photos);
  }
};

export default {
  state,
  mutations,
  actions
};
