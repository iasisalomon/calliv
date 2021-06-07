<template>
  <div class="container-fluid">
    <Header />
    <TableNav />
    <AverageDataTable />
  </div>
</template>

<script>
import Header from '@/components/Header'
import AverageDataTable from '@/components/tables/AverageDataTable'
import TableNav from '@/components/tables/TableNav'
import { mapGetters } from 'vuex'
export default {
  components: { Header, AverageDataTable, TableNav },
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
