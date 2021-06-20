<template>
  <div>
<<<<<<< HEAD
    {{ matrixZero }} <br />
    {{ getMinimumMeasureNoise }} <br />
    <b-table striped hover :items="matrixZero" :fields="fields"></b-table>
=======
    <b-table striped hover :items="matrixNative" :fields="fields"></b-table>
>>>>>>> a1eb876bee7f2bd767874a519d646dfb74319d27
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      fields: [
        {
          key: '0',
          label: 'Well',
          sortable: true,
        },
        {
          key: '1',
          sortable: true,
        },
        {
          key: '2',
          sortable: true,
        },
        {
          key: '3',
          sortable: true,
        },
        {
          key: '4',
          sortable: true,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('data', [
      'rawData',
      'sortedData',
      'groupedbyWellData',
      'extractedWells',
      'rawAdjustedValues',
      'adjustedValuesAverage',
      'wellRows',
      'wellCols',
      'chunkNumber',
      'repetitionCount',
      'rawDataObject',
      'averageTableObject',
      'chunkAdjustedValues',
      'matrixNative',
<<<<<<< HEAD
      'matrixZero',
      'getMinimumMeasureNoise',
=======
>>>>>>> a1eb876bee7f2bd767874a519d646dfb74319d27
    ]),
  },
}
</script>
