<template>
  <div class="row justify-content-center">
    {{ matrixZero }} <br />
    {{ standardInputs }} <br />
    {{ standardGraph }} <br />
    {{ getMinimumMeasureNoise }} <br />
    {{ tableConfig }} <br />
    <div class="col-6">
      <highcharts :options="tableConfig"></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('data', [
      'matrixZero',
      'getMinimumMeasureNoise',
      'standardInputs',
      'standardGraph',
      'tableConfig',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
