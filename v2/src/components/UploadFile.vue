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
    <DisplayData />
  </div>
</template>

<script>
import DisplayData from '@/components/DisplayData'
export default {
  components: {
    DisplayData,
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
      localStorage.clear()
    },
    parseFile() {
      const element = this.$refs['file-input'].files[0]
      this.$papa.parse(element, {
        complete: (result) => {
          const payload = result.data.filter((el) => el.length > 2)
          this.localStoreData(payload)
          this.$store.dispatch('data/changeRawData', payload)
        },
      })
    },
    localStoreData(data) {
      if (process.browser) {
        if (data && data !== []) {
          data = JSON.stringify(data)
          localStorage.setItem('rawData', data)
        }
      }
    },
    localGetData() {
      if (process.browser) {
        const ls = localStorage.getItem('rawData')
        const payload = JSON.parse(ls)
        this.$store.dispatch('data/changeRawData', payload)
      }
    },
  },
}
</script>
