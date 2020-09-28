<template>
  <div class="container">
    <Navbar />
    <Upload :csvdata="csvdata" :filename="filename" @CSV='updateCSV($event)' />
    <Table  :csvdata="csvdata" :filename="filename" :tableConfig="tableConfig" />
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
      filename: "Choose file",
      tableConfig:[],
    };
  },
  components: {
    Navbar,
    Upload,
    Table
  },
  methods: {
    updateCSV: function (el) {
    this.filename = el[0]
    this.csvdata = el[1].slice(1 , el[1].length-1)
    this.tableConfig = el[1].shift()
    console.log (this.tableConfig)
    }
  }
};
</script>

<style scoped lang="scss"></style>
