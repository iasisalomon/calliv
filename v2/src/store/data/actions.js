export default {
  changeRawData: ({ commit, dispatch }, payload) => {
    if (payload && payload.length > 0 && payload.constructor === Array) {
      commit('CHANGE_RAW_DATA', payload)
      dispatch('getTableHeader')
      dispatch('sortData')
    }
  },
  clearRawData: ({ commit }) => {
    commit('CLEAR_RAW_DATA')
  },
  sortData: ({ commit, dispatch }) => {
    commit('SORT_DATA')
    dispatch('groupByWellData')
  },
  groupByWellData: ({ commit, dispatch }) => {
    commit('GROUP_BY_WELL_DATA')
    dispatch('extractWells')
  },
  extractWells: ({ commit, dispatch }) => {
    commit('EXTRACT_WELLS')
    dispatch('rawAdjustedValues')
  },
  rawAdjustedValues: ({ commit, dispatch }) => {
    commit('ADJUST_DATA')
  },
  getTableHeader: ({ commit }) => {
    commit('GET_TABLE_HEADER')
  },
  clearTableHeader: ({ commit }) => {
    commit('CLEAR_TABLE_HEADER')
  },
}
