<template>
  <div class="container">
    <Navbar />
    <Upload v-on:change="(...args)=>(1234,...args)" />
    <Table />
    <p> {{csvdata}} </p>
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
  methods:{
    updateCsv: (el)=>{
      console.log (el)
    }
  }
};
</script>

<style scoped lang="scss"></style>
