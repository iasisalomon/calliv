<template>
  <div class="row m-0 p-0">
    <div v-for="col in wellRows" :key="col" class="mx-1 my-3" role="group">
      <b-form-input
        :id="'input-live' + col"
        v-model="name"
        :state="nameState"
        :placeholder="col"
        trim
      ></b-form-input>

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters
      </b-form-invalid-feedback>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    state() {
      return this.name.length >= 4
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return 'Enter at least 4 characters.'
      }
      return 'Please enter something.'
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
    ]),
  },
}
</script>

<style></style>
