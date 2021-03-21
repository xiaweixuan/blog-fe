const mutation = {
  CHANGE_ISMASKSHOW(state, bool) {
    state.isMaskShow = bool;
  },
  CHANGE_ADAPTER(state, mode) {
    state.adapter = mode;
  },
  CHANGE_USER(state, user) {
    state.user = user;
  },
};
export default mutation;
