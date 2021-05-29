export default {
  changeRawData: ({ commit, dispatch }, payload) => {
    commit('CHANGE_RAW_DATA', payload)
    dispatch('getTableHeader')
  },
  getTableHeader: ({ commit }) => {
    commit('GET_TABLE_HEADER')
  },
}
