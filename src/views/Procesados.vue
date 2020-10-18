<template>
  <div class="container">
    <Navbar />
    <Nav
      :showactive="showactive"
      @datosUpdate="datosUpdate($event)"
      @netaUpdate="netaUpdate($event)"
      @linkUpdate="linkUpdate($event)"
    />
    <ProcessedTable
      v-show="showactive[0]"
      :csvdata="csvdata"
      :tableConfig="tableConfig"
    />
    <TableByWell
      v-show="showactive[1]"
      :csvdata="csvdata"
      :tableConfig="tableConfig"
      :groupByCSV="groupByCSV"
      :adjustedHeader="adjustedHeader"
      :Wells="Wells"
      :rawAdjusted="rawAdjusted"
      :adjustedAverage="adjustedAverage"
    />
    <div>showactive {{ showactive }}</div>
    <div>showactive0 {{ showactive[0] }}</div>
    <div>table config {{ tableConfig }}</div>
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
      loadedtoken: 0,
      showactive: [true, false, false],
      csvdata: [],
      filename: [],
      tableConfig: [],
      adjustedHeader: [
        "Well",
        "Lecture 1",
        "Lecture 2",
        "Lecture 3",
        "Average"
      ],
      Wells: [],
      groupByCSV: [],
      rawAdjusted: [],
      adjustedAverage: []
    };
  },
  components: {
    Navbar,
    ProcessedTable,
    TableByWell,
    Nav
  },
  methods: {},
  created() {
    if (this.$route.params.data != undefined) {
      this.filename = this.$route.params.data[0];
      this.tableConfig = this.$route.params.data[1];
      this.csvdata = this.$route.params.data[2].sort();
      //console.log(this.$route.params.data[2]);
      this.groupByCSV = groupBy(this.csvdata, 0);
      //console.log(this.groupByCSV)
      this.Wells = Object.keys(this.groupByCSV);
      this.rawAdjusted = Object.entries(this.groupByCSV).map(e => {
        return e[1].map(f => {
          return f[2] - f[3];
        });
      });
      this.adjustedAverage = this.rawAdjusted.map(e => {
        return (
          e.reduce((a, b) => {
            return a + b;
          }) / e.length
        );
      });
    }
  },
  mounted() {
    this.$root.$on("datosUpdate", data => {
      this.showactive = data[0];
    });

    this.$root.$on("netaUpdate", data => {
      this.showactive = data[0];
    });
  }
};
</script>

<style scoped lang="scss"></style>
