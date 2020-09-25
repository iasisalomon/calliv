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
// import Papa from "papaparse";

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
      //       Papa.parse(this.csvupdate, {
      //       complete: function(results) {
      //       this.csvupdate = results.data;
      //     }
      // });
      this.$emit("change", [this.csvupdate, this.filenameupdate]);
    },
    uploadFileName() {
      let element = document.getElementById("inputGroupFile04");
      this.filenameupdate = element.files[0].name;
      this.csvupdate = element.files[0];
      this.$papa.parse(this.csvupdate);
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
