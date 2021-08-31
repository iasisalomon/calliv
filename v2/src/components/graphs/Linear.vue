<template>
  <div class="row justify-content-center">
    {{ getStandardVals }} <br />
    {{ getStandardLectures }} <br />
    {{ getStandardGraph }} <br />
    {{ tableConfig }} <br />
    shows me if regression is working 2, 0 {{ getLineTest }} <br />
    linear regression --> {{ getFitLinear }} <br />
    <div class="col-6">
      <highcharts :options="tableConfig"></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
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
    getLineTest() {
      return this.$fitLinear([1, 2, 3, 4, 5, 6, 7, 8], [2, 4, 6, 8, 10, 12, 14, 16])
    },
  },
}
</script>

<style lang="scss" scoped></style>
