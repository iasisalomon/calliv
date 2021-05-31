export default {
  CHANGE_RAW_DATA(state, payload) {
    state.rawData = payload
    console.log('rawData :>> ', state.rawData)
    console.log('state.tableHeader :>> ', state.tableHeader)
  },
  GET_TABLE_HEADER(state) {
    state.tableHeader = state.rawData.shift()
  },
  CLEAR_TABLE_HEADER(state) {
    state.tableHeader = []
  },
}
