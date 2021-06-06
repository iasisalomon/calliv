export default {
  rawData: (state) => {
    return state.rawData
  },
  tableHeader: (state) => {
    return state.tableHeader
  },
  sortedData: (state) => {
    return state.sortedData
  },
  groupedbyWellData: (state) => {
    return state.groupedbyWellData
  },
  extractedWells: (state) => {
    return state.extractedWells
  },
  rawAdjustedValues: (state) => {
    return state.rawAdjustedValues
  },
  adjustedValuesAverage: (state) => {
    return state.adjustedValuesAverage
  },
  wellRows: (state) => {
    return state.wellRows
  },
  wellCols: (state) => {
    return state.wellCols
  },
  chunkNumber: (state) => {
    return state.chunkNumber
  },
}
