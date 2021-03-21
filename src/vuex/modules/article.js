import Vue from "vue";
import https from "../../api/index.js";

const state = {
  byId: {},
  allIds: [],
  blogIds: [],
  lifeIds: []
};
const getters = {
  blogArticles(state) {
    const { byId, blogIds } = state;
    return blogIds.map(id => byId[id]);
  },
  lifeArticles(state) {
    const { byId, lifeIds } = state;
    return lifeIds.map(id => byId[id]);
  }
};
const mutations = {
  CHANGE_ARTICLE(state, articles) {
    Vue.set(state, "byId", articles.byId);
    Vue.set(state, "allIds", articles.allIds);
    Vue.set(state, "blogIds", articles.blogIds);
    Vue.set(state, "lifeIds", articles.lifeIds);
  }
};
const actions = {
  async getArticles({ commit }) {
    const articles = await https.getArticles();
    commit("CHANGE_ARTICLE", articles);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
