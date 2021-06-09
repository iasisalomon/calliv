<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 my-4">
        <h4 class="mt-2">
          Selected file: <b>{{ file ? file.name : '' }}</b>
        </h4>
      </div>
      <div class="col-3 my-4 px-0">
        <b-form-file ref="file-input" v-model="file" class=""></b-form-file>
      </div>
      <div class="col-3 my-4">
        <b-button class="mr-2" @click="clearFiles">Reset</b-button>
        <b-button v-if="!!file" class="mr-2 btn-success" @click="parseFile"
          >Process</b-button
        >
      </div>
    </div>
    <DisplayRawData />
  </div>
</template>

<script>
import DisplayRawData from '@/components/upload/DisplayRawData'
export default {
  components: {
    DisplayRawData,
  },
  data() {
    return {
      file: null,
    }
  },
  created() {
    this.localGetData()
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
      this.$store.dispatch('data/clearTableHeader')
      this.$store.dispatch('data/clearRawData')
      this.$store.dispatch('data/clearRawDataObject')
      this.$store.dispatch('data/clearFileName')
      localStorage.clear()
    },
    parseFile() {
      //  send file name to store
      this.$store.dispatch('data/changeFileName', this.file.name)
      // save file name to local storage
      this.localStoreName(this.file.name)
      //  select file from upload object
      const element = this.$refs['file-input'].files[0]
      // parse as nested array
      this.$papa.parse(element, {
        transform: (elem) => {
          return elem.replace(/,/g, '.')
        },
        complete: (result) => {
          const payload = result.data.filter((el) => el.length > 2)
          this.localStoreDataAsNestedArray(payload)
          this.$store.dispatch('data/changeRawData', payload)
        },
      })
      // parse as array of objects
      this.$papa.parse(element, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          this.localStoreDataArrayOfObjects(result.data)
          this.$store.dispatch('data/changeRawDataObject', result.data)
        },
      })
    },
    localStoreName(data) {
      if (process.browser) {
        if (data && data !== '') {
          data = JSON.stringify(data)
          localStorage.setItem('fileName', data)
        }
      }
    },
    localStoreDataAsNestedArray(data) {
      if (process.browser) {
        if (data && data !== []) {
          data = JSON.stringify(data)
          localStorage.setItem('rawData', data)
        }
      }
    },
    localStoreDataArrayOfObjects(data) {
      if (process.browser) {
        if (data && data !== []) {
          data = JSON.stringify(data)
          localStorage.setItem('rawDataObject', data)
        }
      }
    },
    localGetData() {
      if (process.browser) {
        const lsDNA = localStorage.getItem('rawData')
        const payload = JSON.parse(lsDNA)
        this.$store.dispatch('data/changeRawData', payload)

        const lsAOO = localStorage.getItem('rawDataObject')
        const payloadObject = JSON.parse(lsAOO)
        this.$store.dispatch('data/changeRawDataObject', payloadObject)

        const name = localStorage.getItem('rawDataObject')
        const fileName = JSON.parse(name)
        this.$store.dispatch('data/changeFileName', fileName)
      }
    },
  },
}
</script>
