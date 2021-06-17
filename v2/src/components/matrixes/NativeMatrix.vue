<template>
  <div>
    {{ chunkAdjustedValues }}<br />
    <!-- {{ wellRows }}<br />
    {{ wellCols }}<br />
    {{ adjustedValuesAverage }}<br />
    {{ averageTableObject }}<br /> -->
    <b-table striped hover :items="rawDataObject" :fields="fields"></b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      fields: [
        {
          key: 'Well',
          sortable: true,
        },
        {
          key: 'Cycle',
          sortable: true,
        },
        {
          key: 'RED',
          sortable: true,
          variant: 'danger',
        },
        {
          key: 'BLUE',
          sortable: true,
          variant: 'info',
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
    ]),
  },
}
</script>
