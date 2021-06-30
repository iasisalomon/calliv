<template>
  <div class="row align-content-center justify-content-between m-0 p-0 py-3">
    <div
      v-for="(col, index) in wellRows"
      :key="index"
      class="col m-0 mr-2 p-0 align-items-center text-center"
      role="group"
    >
      <b-form-input
        :id="'input-live' + col"
        v-model="validation[index]"
        :state="validationState[index]"
        :placeholder="col"
        :disabled="button == 'Locked'"
        trim
      ></b-form-input>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter a number greater or equal to 0
      </b-form-invalid-feedback>
    </div>

    <div
      class="col mx-0 px-0 align-self-top text-right"
      style="max-width: 75px"
    >
      <b-button
        class="mr-1"
        type="submit"
        variant="primary"
        :disabled="button === 'Locked'"
        @click="formClick"
      >
        {{ button }}
      </b-button>
    </div>
    <div
      class="col mx-0 px-0 align-self-top text-right"
      style="max-width: 75px"
    >
      <b-button class="ml-1" type="reset" variant="danger" @click="resetForm"
        >Reset</b-button
      >
    </div>
  </div>
</template>

<script>
// 0 4,2 9,7 14,6 22 33,3 50 100
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      validation: [],
      button: 'Lock',
    }
  },
  computed: {
    validationState() {
      return this.validation.map((el) => {
        el = el.replace(/,/g, '.')
        el = Number(el)
        if (el === null) {
          return null
        } else if (el >= 0) {
          return true
        } else {
          return false
        }
      })
    },
    ...mapGetters('data', [
      'rawData',
      'sortedData',
      'groupedbyWellData',
      'extractedWells',
      'rawAdjustedValues',
      'adjustedValuesAverage',
      'wellRows',
      'wellCols',
      'chunkNumber',
      'repetitionCount',
      'rawDataObject',
      'averageTableObject',
      'chunkAdjustedValues',
      'matrixNative',
      'matrixZero',
      'getMinimumMeasureNoise',
      'wellRowsValues',
    ]),
  },
  methods: {
    formClick() {
      this.button = 'Locked'
      this.$store.dispatch(
        'data' + '/wellRowsValues',
        JSON.parse(JSON.stringify(this.validation)),
      )
    },
    resetForm() {
      this.validation = []
      this.button = 'Lock'
      this.$store.dispatch(
        'data' + '/wellRowsValues',
        JSON.parse(JSON.stringify(this.validation)),
      )
    },
    debouncedGetAnswer() {},
  },
}
</script>

<style scoped></style>
