export default {
  changeSearchStatus: ({ commit }, payload) => {
    commit('SET_SEARCH_STATUS', payload)
  },
  setQStartContent: ({ commit }, payload) => {
    commit('SET_QUICKSTART_CONTENT', payload)
  },
}
