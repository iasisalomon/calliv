import { groupBy } from 'lodash'

export default {
  CHANGE_RAW_DATA(state, payload) {
    state.rawData = payload
  },
  CHANGE_RAW_DATA_OBJECT(state, payload) {
    state.rawDataObject = payload
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
  ADJUST_RAW_VALUES(state) {
    state.rawAdjustedValues = Object.entries(state.groupedbyWellData).map(
      (e) => {
        return e[1].map((f) => {
          return f[2] - f[3]
        })
      },
    )
  },
  GET_REPETITION_COUNT(state) {
    state.repetitionCount = state.rawAdjustedValues[0].map((el, index) => {
      return index + 1
    })
  },
  ADJUST_VALUES_AVERAGE(state) {
    state.adjustedValuesAverage = state.rawAdjustedValues.map((e) => {
      return (
        e.reduce((a, b) => {
          return a + b
        }) / e.length
      )
    })
  },
  GET_TABLE_HEADER(state) {
    state.tableHeader = state.rawData.shift()
  },
  CLEAR_TABLE_HEADER(state) {
    state.tableHeader = []
  },
  OBTAIN_WELL_ROWS(state) {
    state.wellRows = state.extractedWells.map((el) => {
      return el.replace(/[^a-zA-Z]/, '')
    })
    state.wellRows = [...new Set(state.wellRows)]
  },
  OBTAIN_WELL_COLS(state) {
    state.wellCols = state.extractedWells.map((el) => {
      return el.replace(/[a-zA-Z]/, '')
    })
    state.wellCols = [...new Set(state.wellCols)]
  },
  GET_CHUNK_NUMBER(state) {
    state.chunkNumber = state.wellCols.length
  },
}
