<template>
  <div>
    {{ matrixZero }} <br />
    {{ standardInputs }} <br />
    {{ getMinimumMeasureNoise }} <br />
    <highcharts :options="standardInputs"></highcharts>
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
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
