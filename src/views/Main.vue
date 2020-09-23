<template>
  <div class="container">
    <Navbar />
    <Upload />
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
  }
};
</script>

<style scoped lang="scss"></style>
