export default {
  changeActiveTableNav: ({ commit }, payload) => {
    commit("CHANGE_ACTIVE_TABLE_NAV", payload);
  },
  standardLock: ({ commit }, payload) => {
    commit("STANDARD_LOCK", payload);
  },
};
