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
        @click="changeCsv"
      >
        Subir
      </button>
    </div>
  </div>
</template>
<script>
import Papa from "papaparse";

export default {
  props: {
    csvdata: {
      type: Array
    },
    filename: {
      type: String
    }
  },
  data() {
    return {
      csvupdate: [],
      filenameupdate: "Choose file"
    };
  },
  methods: {
    changeCsv() {
      this.$emit("change", [this.csvupdate, this.filenameupdate]);
    },
    async uploadFileName() {
      let element = document.getElementById("inputGroupFile04");
      this.filenameupdate = element.files[0].name;
      let end = await Papa.parse(element.files[0], {
        complete: results => {
          console.log(results.data);
        }
      });
      console.log(end);
      this.csvupdate = end;
    }
  },
  computed: {
    copyValues: () => {
      this.csvupdate = this.csvdata;
      this.filename = this.filenameupdate;
    }
  }
};
</script>
