import https from '@/api';

const actions = {
  getShowMode({ commit }) {
    const mode = document.body.clientWidth < 425 ? "phone" : "pc";
    console.log(mode);
    commit("CHANGE_ADAPTER", mode);
  },
  async getUserMsg({ commit }) {
    const user = await https.getUserMsg();
    commit("CHANGE_USER", user);
  }
};

export default actions;
