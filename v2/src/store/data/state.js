export default () => ({
  fileName: '',
  rawData: [],
  tableHeader: [],
  sortedData: [],
  groupedbyWellData: {},
  repetitionCount: null,
  extractedWells: [],
  rawAdjustedValues: [],
  chunkAdjustedValues: [],
  getMinimumMeasureNoise: null,
  adjustedValuesAverage: [],
  wellRows: [],
  wellCols: [],
  chunkNumber: null,
  rawDataObject: [],
  averageTableObject: [],
  matrixNative: [],
  matrixZero: [],
  standardInputs: {
    series: [
      {
        data: [1, 2, 3, 4, 5, 6],
        type: 'scatter',
      },
    ],
  },
})
