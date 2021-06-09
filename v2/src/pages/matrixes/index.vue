<template>
  <div class="container-fluid">
    <Header />
    <NativeMatrix />
  </div>
</template>

<script>
import Header from '@/components/Header'
import NativeMatrix from '@/components/matrixes/NativeMatrix'
export default {
  components: { Header, NativeMatrix },
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
