<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
