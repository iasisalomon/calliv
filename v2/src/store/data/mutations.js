import { groupBy } from 'lodash'

export default {
  CHANGE_RAW_DATA(state, payload) {
    state.rawData = payload
  },
  CLEAR_RAW_DATA(state) {
    state.rawData = []
  },
  SORT_DATA(state) {
    state.sortedData = state.rawData.sort()
  },
  GROUP_BY_WELL_DATA(state) {
    state.groupedbyWellData = groupBy(state.sortedData, 0)
  },
  EXTRACT_WELLS(state) {
    state.extractedWells = Object.keys(state.groupedbyWellData)
  },
  ADJUST_DATA(state) {
    state.rawAdjustedValues = Object.entries(state.groupedbyWellData).map(
      (e) => {
        return e
      },
    )
  },
  GET_TABLE_HEADER(state) {
    state.tableHeader = state.rawData.shift()
  },
  CLEAR_TABLE_HEADER(state) {
    state.tableHeader = []
  },
}
