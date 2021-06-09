<template>
  <div class="container-fluid">
    <Header />
    <TableNav />
    <SortedDataTable v-if="activeTableNav === 1" />
    <AverageDataTable v-if="activeTableNav === 2" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import AverageDataTable from '@/components/tables/AverageDataTable'
import SortedDataTable from '@/components/tables/SortedDataTable'
import TableNav from '@/components/tables/TableNav'
import { mapGetters } from 'vuex'
export default {
  components: { Header, SortedDataTable, AverageDataTable, TableNav },
  computed: {
    ...mapGetters('tables', ['activeTableNav']),
  },
  created() {
    this.localGetData()
  },
  methods: {
    localGetData() {
      if (process.browser) {
        const lsDNA = localStorage.getItem('rawData')
        const payload = JSON.parse(lsDNA)
        this.$store.dispatch('data/changeRawData', payload)
        const lsAOO = localStorage.getItem('rawDataObject')
        const payloadObject = JSON.parse(lsAOO)
        this.$store.dispatch('data/changeRawDataObject', payloadObject)
      }
    },
  },
}
</script>

<style></style>
