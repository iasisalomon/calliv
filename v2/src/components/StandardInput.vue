<template>
  <div class="row align-content-center justify-content-between m-0 p-0">
    <div
      v-for="(col, index) in wellRows"
      :key="index"
      class="mx-1 my-3"
      role="group"
    >
      <b-form-input
        :id="'input-live' + col"
        v-model="name[index]"
        :state="nameState[index]"
        :placeholder="col"
        trim
      ></b-form-input>

      {{ nameState }}

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter a number greater or equal to 0
      </b-form-invalid-feedback>
    </div>

    <div class="row m-0 p-0 align-self-center">
      <b-button class="mr-1" type="submit" variant="primary">{{
        button
      }}</b-button>
      <b-button class="ml-1" type="reset" variant="danger">Reset</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: [],
      button: 'Lock',
    }
  },
  computed: {
    nameState() {
      return this.name.map((el) => {
        el = el.replace(/,/g, '.')
        el = Number(el)
        if (el >= 0) {
          return true
        } else {
          return false
        }
      })
    },
    methods: {
      formClick() {
        this.button !== 'Lock'
          ? (this.button = 'Unlock')
          : (this.button = 'Lock')
        this.$store.dispatch('data/changeRawDataObject', result.data)
      },
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
