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
        filename
      }}</label>
    </div>
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="inputGroupFileAddon04"
        @click="uploadFile"
      >
        Subir
      </button>
    </div>
  </div>
</template>
<script>
import Papa from "papaparse";

export default {
  data() {
    return {
      csvdata: [],
      filename: "Choose file"
    };
  },
  methods: {
    uploadFile() {
      let element = document.getElementById("inputGroupFile04");
      let file = element.files[0];
      Papa.parse(file, {
        complete: function(results) {
          console.log(results);
          this.csvdata = results.data;
          console.log(this.csvdata);
        }
      });
      console.log(element);
    },
    uploadFileName() {
      let element = document.getElementById("inputGroupFile04");
      this.filename = element.files[0].name;
    }
  }
};
</script>
