<template>
  <div class="container">
    <Navbar />
    <Upload :csvdata="csvdata" :filename="filename" @CSV='updateCSV($event)' />
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
    this.csvdata = el[1]
    }
  }
};
</script>

<style scoped lang="scss"></style>
