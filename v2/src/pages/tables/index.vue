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
}
</script>

<style></style>
