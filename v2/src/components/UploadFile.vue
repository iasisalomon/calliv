<template>
  <div>
    <b-form-file ref="file-input" v-model="file" class="mb-2"></b-form-file>
    <b-button class="mr-2" @click="clearFiles">Reset</b-button>
    <b-button class="mr-2" @click="parseFile">Process</b-button>
    <p class="mt-2">
      Selected file: <b>{{ file ? file.name : '' }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    }
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
    parseFile() {
      const element = this.$refs['file-input'].files[0]
      console.log('element :>> ', element)
      this.$papa.parse(element, {
        complete: (result) => {
          console.log('parsed >> ', result)
        },
      })
    },
  },
}
</script>
