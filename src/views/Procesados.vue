<template>
  <div class="container">
    <Navbar />
     <Nav />
    <ProcessedTable :csvdata="csvdata" :filename="filename" :tableConfig="tableConfig" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import ProcessedTable from "../components/ProcessedTable";

export default {
  data() {
    return {
      csvdata: [],
      filename: [],
      tableConfig:[],
    };
  },
  components: {
    Navbar,
    ProcessedTable,
    Nav
  },
  methods: {
  },
  created(){
    this.filename = this.$route.params.data[0]
    this.tableConfig = this.$route.params.data[1]
    this.csvdata = this.$route.params.data[2]
  }
};
</script>

<style scoped lang="scss"></style>
