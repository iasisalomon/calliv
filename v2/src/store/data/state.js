export default () => ({
  fileName: "",
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
  standardVals: [0, 4.2, 9.7, 14.6, 22, 33.3, 50, 100],
  standardLectures: [],
  fitLinear: [],
  standardGraph: [],
  tableConfig: {
    series: [
      {
        data: [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        type: "scatter",
      },
      {
        data: [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        type: "scatter",
      },
    ],
  },
})
