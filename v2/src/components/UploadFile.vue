<template>
  <div>
    <b-form-file ref="file-input" v-model="file" class="mb-2"></b-form-file>
    <b-button class="mr-2" @click="clearFiles">Reset</b-button>
    <b-button class="mr-2" @click="parseFile">Process</b-button>
    <p class="mt-2">
      Selected file: <b>{{ file ? file.name : '' }}</b>
    </p>
    <li v-for="label in getNativeRows" :key="label">
      {{ label }}
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      file: null,
    }
  },
  computed: {
    // this is modified mapped data
    ...mapGetters('essayData', ['colLabels']),
    // this is raw data
    getRowLabels() {
      return this.$store.state.essayData.rowLabels
    },
    getNativeRows() {
      return this.$store.state.essayData.nativeRows
    },
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
    parseFile() {
      const element = this.$refs['file-input'].files[0]
      this.$papa.parse(element, {
        complete: (result) => {
          console.log('parsed >> ', result.data)
          this.$store.dispatch('essayData/setNativeRows', result.data)
        },
      })
    },
  },
}
</script>
