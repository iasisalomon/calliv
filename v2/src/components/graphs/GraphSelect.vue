<template>
  <div>
    <div class="row justify-content-center my-5">
      <button type="button" class="btn btn-primary" @click="getLinear">Linear</button>
    </div>
    <div class="row justify-content-center my-5">
      <button type="button" class="btn btn-primary" @click="getCuadratic">Cuadratic</button>
    </div>
    <div class="row justify-content-center my-5">
      <button type="button" class="btn btn-primary" @click="getCubic">Cubic</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getLinear() {
      this.$store.dispatch("data" + "/saveStandardVals", this.validation)
    },
    getCuadratic() {
      this.$store.dispatch("data" + "/saveStandardVals", this.validation)
    },
    getCubic() {
      this.$store.dispatch("data" + "/saveStandardVals", this.validation)
    },
  },
}
</script>

<style></style>
