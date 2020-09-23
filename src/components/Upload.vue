<template>
  <div class="input-group">
    <div class="custom-file">
      <input
        type="file"
        class="custom-file-input"
        id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04"
        @change="uploadFileName"
      />
      <label class="custom-file-label" for="inputGroupFile04">{{
        filenameupdate
      }}</label>
    </div>
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="inputGroupFileAddon04"
        @click="updateCsv"
      >
        Subir
      </button>
    </div>
  </div>
</template>
<script>
import Papa from "papaparse";

export default {
  props:{
        csvdata: {
          type:Array,
        },
      filename: {
          type:String,
        },
  },
  data() {
    return {
      csvupdate: [],
      filenameupdate: "Choose file"
    }
  },
  methods: {    
    updateCsv(csvupdate, filenameupdate) {
      this.$emit('change', csvupdate, filenameupdate);
    },
    uploadFileName() {
      let element = document.getElementById("inputGroupFile04");
      this.filenameupdate = element.files[0].name;
      let file = element.files[0];
      Papa.parse(file, {
        complete: function(results) {
          this.csvupdate = results.data;
          console.log(this.csvupdate);
        }
      });
    },
  },
  computed: {
    copyValues: ()=> {
      this.csvupdate = this.csvdata
      this.filename = this.filenameupdate
    }
  }
};
</script>
