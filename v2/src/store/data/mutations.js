import { groupBy } from 'lodash'

export default {
  CHANGE_RAW_DATA(state, payload) {
    state.rawData = payload
  },
  SORT_DATA(state) {
    state.sortedData = state.rawData.sort()
  },
  GROUP_BY_WELL_DATA(state) {
    state.groupedbyWellData = groupBy(state.sortedData, 0)
  },
  GET_TABLE_HEADER(state) {
    state.tableHeader = state.rawData.shift()
  },
  CLEAR_TABLE_HEADER(state) {
    state.tableHeader = []
  },
}
