export default {
  SET_SEARCH_STATUS(state, payload) {
    state.searchBar.active = payload
  },
  SET_QUICKSTART_CONTENT(state, payload) {
    state.quickStart.actualContent = payload
  },
}
