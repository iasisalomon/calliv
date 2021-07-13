<template>
  <div>
    {{ matrixZero }} <br />
    {{ wellRowsValues }} <br />
    {{ getMinimumMeasureNoise }} <br />
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
            type: 'scatter',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters('data', [
      'matrixZero',
      'getMinimumMeasureNoise',
      'wellRowsValues',
    ]),
  },
}
</script>

<style lang="scss" scoped></style>
