<template>
  <div class="container-fluid">
    <Header />
    <Table />
    <DisplayData />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Table from '@/components/Table'
import DisplayData from '@/components/DisplayData'
import { mapGetters } from 'vuex'
export default {
  components: { Header, Table, DisplayData },
  computed: {
    ...mapGetters('data', [
      'rawData',
      'tableHeader',
      'sortedData',
      'groupedbyWellData',
      'extractedWells',
      'rawAdjustedValues',
      'adjustedValuesAverage',
      'wellRows',
      'wellCols',
      'chunkNumber',
      'repetitionCount',
    ]),
  },
}
</script>

<style></style>
