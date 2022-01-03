<template>
  <div class="row justify-content-center">
    <highcharts :options="tableConfig"></highcharts>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("data", [
      "matrixZero",
      "getMinimumMeasureNoise",
      "getStandardVals",
      "getStandardLectures",
      "getStandardGraph",
      "getFitLinear",
      "tableConfig",
    ]),
  },
  // beforeCreate() {
  //   this.$store.dispatch("data" + "/storeToState")
  // },
};
</script>

<style lang="scss" scoped></style>
