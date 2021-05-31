export default {
  changeRawData: ({ commit, dispatch }, payload) => {
    commit('CHANGE_RAW_DATA', payload)
    if (payload.length > 0 && payload.constructor === Array) {
      dispatch('getTableHeader')
      dispatch('sortData')
    }
  },
  sortData: ({ commit, dispatch }) => {
    commit('SORT_DATA')
    dispatch('groupByWellData')
  },
  groupByWellData: ({ commit }) => {
    commit('GROUP_BY_WELL_DATA')
  },
  getTableHeader: ({ commit }) => {
    commit('GET_TABLE_HEADER')
  },
  clearTableHeader: ({ commit }) => {
    commit('CLEAR_TABLE_HEADER')
  },
}
