<template>
  <div class="container">
    <Navbar />
    <Nav
    :showactive='showactive'
    @datosUpdate='datosUpdate($event)'
    @netaUpdate='netaUpdate($event)'
    @linkUpdate='linkUpdate($event)'
    />
    <ProcessedTable
      v-show="showactive[1]"
      :csvdata="csvdata"
      :filename="filename"
      :tableConfig="tableConfig"
    />
    <TableByWell
      v-show="showactive[2]"
      :csvdata="csvdata"
      :tableConfig="tableConfig"
      :filename="filename"
      :groupByCSV="groupByCSV"
      :adjustedHeader="adjustedHeader"
      :Wells="Wells"
      :rawAdjusted="rawAdjusted"
      :adjustedAverage="adjustedAverage"
    />
    <div>
      {{showactive}}
    </div>
        <div>
      {{ filename }}
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import ProcessedTable from "../components/ProcessedTable";
import TableByWell from "../components/TableByWell";

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default {
  data() {
    return {
      loadedtoken:0,
      showactive:[false, false, false],
      csvdata: [],
      filename: [],
      tableConfig: [],
      adjustedHeader: [
        "Well",
        "Lecture 1",
        "Lecture 2",
        "Lecture 3",
        "Average",
      ],
      Wells: [],
      groupByCSV: [],
      rawAdjusted: [],
      adjustedAverage: [],
    };
  },
  components: {
    Navbar,
    ProcessedTable,
    TableByWell,
    Nav,
  },
  methods: {
  },
  beforeCreate(){
  if (this.filename != undefined){
    this.loadedtoken = 1;
  }
  },
  created(){
    if(this.loadedtoken === 1){
    this.filename = this.$route.params.data[0];
    this.tableConfig = this.$route.params.data[1];
    this.csvdata = this.$route.params.data[2].sort();
    this.groupByCSV = groupBy(this.csvdata, 0);
    this.Wells = Object.keys(this.groupByCSV);
    this.rawAdjusted = Object.entries(this.groupByCSV).map((e) => {
      return e[1].map((f) => {
        return f[2] - f[3];
      });
    });
    this.adjustedAverage = this.rawAdjusted.map((e) => {
      return (
        e.reduce((a, b) => {
          return a + b;
        }) / e.length
      );
    });
    }
  },
mounted() {
    this.$root.$on('datosUpdate', data => {
        this.showactive = data
    });
}
};
</script>

<style scoped lang="scss"></style>
