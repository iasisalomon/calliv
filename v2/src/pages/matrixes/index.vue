<template>
  <div class="container-fluid">
    <Header />
    <StandardInput />
    <MatrixNav item1="Native Matrix" item2="Zero Matrix" />
    <NativeMatrix v-if="activeTableNav === 1" />
    <ZeroMatrix v-if="activeTableNav === 2" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Header from "@/components/Header"
import StandardInput from "@/components/StandardInput"
import NativeMatrix from "@/components/matrixes/NativeMatrix"
import ZeroMatrix from "@/components/matrixes/ZeroMatrix"
import MatrixNav from "@/components/matrixes/MatrixNav"
export default {
  components: { Header, NativeMatrix, MatrixNav, ZeroMatrix, StandardInput },
  computed: {
    ...mapGetters("matrixes", ["activeTableNav"]),
  },
  created() {
    this.localGetData()
  },
  methods: {
    localGetData() {
      if (process.browser) {
        const lsDNA = localStorage.getItem("rawData")
        const payload = JSON.parse(lsDNA)
        this.$store.dispatch("data/changeRawData", payload)

        const lsAOO = localStorage.getItem("rawDataObject")
        const payloadObject = JSON.parse(lsAOO)
        this.$store.dispatch("data/changeRawDataObject", payloadObject)

        const name = localStorage.getItem("rawDataObject")
        const fileName = JSON.parse(name)
        this.$store.dispatch("data/changeFileName", fileName)
      }
    },
  },
}
</script>

<style></style>
