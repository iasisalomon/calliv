<template>
  <div class="container-fluid">
    <Header />
    <TableNav item1="Native Matrix" item2="Zero Matrix" />
    <NativeMatrix v-if="activeTableNav === 1" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import NativeMatrix from '@/components/matrixes/NativeMatrix'
import TableNav from '@/components/TableNav'
import { mapGetters } from 'vuex'
export default {
  components: { Header, NativeMatrix, TableNav },
  computed: {
    ...mapGetters('matrixes', ['activeTableNav']),
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

        const name = localStorage.getItem('rawDataObject')
        const fileName = JSON.parse(name)
        this.$store.dispatch('data/changeFileName', fileName)
      }
    },
  },
}
</script>

<style></style>
