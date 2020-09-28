<template>
  <div class="container">
    <Navbar />
     <Nav />
  <div>
    {{condensedWells}}
  </div>
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
      condensedWells:[],
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
    this.csvdata = this.$route.params.data[2].sort()
    this.condensedWells = this.csvdata.map((row)=>{
      return row[2]
    })
  }
};
</script>

<style scoped lang="scss"></style>
