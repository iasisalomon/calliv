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
        const lsAOO = localStorage.getItem('rawData')
        const payloadObject = JSON.parse(lsAOO)
        this.$store.dispatch('data/changeRawDataObject', payloadObject)
      }
    },
  },
}
</script>

<style></style>
