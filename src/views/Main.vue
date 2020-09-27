<template>
  <div class="container">
    <Navbar />
    <Upload v-on:changeCSV="updateCsv($event)" />
    <Table />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import Table from "../components/Table";

export default {
  data() {
    return {
      csvdata: [],
      filename: "Choose file"
    }
  },
  components: {
    Navbar,
    Upload,
    Table
  },
  methods: {
    updateCsv: function (el){
      this.csvdata = el[0]
      this.filename = el[1]
    }
  }
};
</script>

<style scoped lang="scss"></style>
