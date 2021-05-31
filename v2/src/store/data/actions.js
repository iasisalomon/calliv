export default {
  changeRawData: ({ commit, dispatch }, payload) => {
    commit('CHANGE_RAW_DATA', payload)
    if (payload.length > 0 && payload.constructor === Array) {
      dispatch('getTableHeader')
    }
  },
  getTableHeader: ({ commit }) => {
    commit('GET_TABLE_HEADER')
  },
  clearTableHeader: ({ commit }) => {
    commit('CLEAR_TABLE_HEADER')
  },
}
