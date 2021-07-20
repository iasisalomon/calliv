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
  standardInputs: [],
  tableConfig: {
    series: [
      {
        data: [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        type: 'scatter',
      },
    ],
  },
})
