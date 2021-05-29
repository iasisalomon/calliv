export default {
  CHANGE_RAW_DATA(state, payload) {
    state.rawData = payload
  },
  GET_TABLE_HEADER(state) {
    state.tableHeader = state.rawData.shift()
  },
}
