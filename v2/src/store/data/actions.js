export default {
  changeFileName: ({ commit, payload }) => {
    commit('CHANGE_FILE_NAME', payload)
  },
  changeRawData: ({ commit, dispatch }, payload) => {
    if (payload && payload.length > 0 && payload.constructor === Array) {
      commit('CHANGE_RAW_DATA', payload)
      dispatch('getTableHeader')
      dispatch('sortData')
    }
  },
  changeRawDataObject: ({ commit, dispatch }, payload) => {
    if (payload && payload.length > 0 && payload.constructor === Array) {
      commit('CHANGE_RAW_DATA_OBJECT', payload)
    }
  },
  clearRawData: ({ commit }) => {
    commit('CLEAR_RAW_DATA')
  },
  clearRawDataObject: ({ commit }) => {
    commit('CLEAR_RAW_DATA_OBJECT')
  },
  clearFileName: ({ commit }) => {
    commit('CLEAR_FILE_NAME')
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
    dispatch('obtainWellRows')
    dispatch('obtainWellCols')
  },
  rawAdjustedValues: ({ commit, dispatch }) => {
    commit('ADJUST_RAW_VALUES')
    dispatch('rawAdjustedAverage')
    dispatch('repetitionCount')
  },
  repetitionCount: ({ commit, dispatch }) => {
    commit('GET_REPETITION_COUNT')
  },
  rawAdjustedAverage: ({ commit, dispatch }) => {
    commit('ADJUST_VALUES_AVERAGE')
    dispatch('chunkAdjustedValues')
    dispatch('averageTableObject')
  },
  averageTableObject: ({ commit, dispatch }) => {
    commit('AVERAGE_TABLE_OBJECT')
    dispatch('matrixNative')
  },
  matrixNative: ({ commit, dispatch }) => {
    commit('CREATE_MATRIX_NATIVE')
  },
  getTableHeader: ({ commit }) => {
    commit('GET_TABLE_HEADER')
  },
  clearTableHeader: ({ commit }) => {
    commit('CLEAR_TABLE_HEADER')
  },
  obtainWellRows: ({ commit }) => {
    commit('OBTAIN_WELL_ROWS')
  },
  obtainWellCols: ({ commit, dispatch }) => {
    commit('OBTAIN_WELL_COLS')
    dispatch('getChunkNumber')
  },
  getChunkNumber: ({ commit }) => {
    commit('GET_CHUNK_NUMBER')
  },
  chunkAdjustedValues: ({ commit }) => {
    commit('CHUNK_VALUES_AVERAGE')
  },
}
