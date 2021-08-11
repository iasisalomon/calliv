<template>
  <div class="row justify-content-center">
    <!-- {{ matrixZero }} <br />
    {{ standardInputs }} <br />
    {{ getMinimumMeasureNoise }} <br /> -->
    {{ standardGraph }} <br />
    {{ tableConfig }} <br />
    {{ getLine }} <br />
    <div class="col-6">
      <highcharts :options="tableConfig"></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters("data", ["matrixZero", "getMinimumMeasureNoise", "standardInputs", "standardGraph", "tableConfig"]),
    getLine() {
      return this.$fitLinear([1, 2, 3, 4, 5, 6, 7, 8], [2, 4, 6, 8, 10, 12, 14, 16])
    },
  },
}
</script>

<style lang="scss" scoped></style>
