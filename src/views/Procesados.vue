<template>
  <div class="container">
    <Navbar />
    <Nav />
    <div>
      {{ csvdata }}
    </div>
    <div>
      {{ adjustedResult }}
    </div>
    <ProcessedTable
      :csvdata="csvdata"
      :filename="filename"
      :tableConfig="tableConfig"
    />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import ProcessedTable from "../components/ProcessedTable";

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


export default {
  data() {
    return {
      csvdata: [],
      filename: [],
      tableConfig: [],
      condensedWells: [],
      adjustedResult: [],
    };
  },
  components: {
    Navbar,
    ProcessedTable,
    Nav,
  },
  methods: {

  },
  created() {
    this.filename = this.$route.params.data[0];
    this.tableConfig = this.$route.params.data[1];
    this.csvdata = this.$route.params.data[2].sort();
    this.condensedWells = this.csvdata.map((row) => {
      return row[0];
    });
    this.condensedWells = [...new Set(this.condensedWells)];
    this.adjustedResult = groupBy(this.csvdata, 0);
  },
};
</script>

<style scoped lang="scss"></style>
