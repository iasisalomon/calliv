<template>
  <div class="row justify-content-center">
    <div class="col-3">
      <!-- {{ getStandardVals }} <br />
      {{ getStandardLectures }} <br />
      {{ getStandardGraph }} <br /> -->
      {{ tableConfig }} <br />
      linear regression --> {{ getFitLinear }} <br />
    </div>
    <div class="col-9"><highcharts :options="tableConfig"></highcharts></div>
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
