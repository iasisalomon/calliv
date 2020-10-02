<template>
  <div class="container">
    <Navbar />
    <Nav />
    <ProcessedTable
      v-show="true"
      :csvdata="csvdata"
      :filename="filename"
      :tableConfig="tableConfig"
    />
    <TableByWell
      v-show="true"
      :csvdata="csvdata"
      :tableConfig="tableConfig"
      :filename="filename"
      :groupByCSV="groupByCSV"
      :adjustedHeader="adjustedHeader"
      :Wells="Wells"
      :rawAdjusted="rawAdjusted"
      :adjustedAverage="adjustedAverage"
    />
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
  methods: {},
  created() {
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

    // this.adjustedResultCompact = Object.keys(this.adjustedResult)
    // this.adjustedResultLecture = Object.values(this.adjustedResult);
    // this.adjustedResultLecture = this.adjustedResultLecture.map((el) => {
    //   return el.map((e) => {
    //     return Number(e[2]) - Number(e[3]);
    //   });
    // });
    // this.adjustedResultCompact.push (this.adjustedResultLecture.map((e)=>{
    //   return e
    // }))
    // this.adjustedResultAverage = this.adjustedResultLecture.map((e) => {
    //   return e.reduce((a, b) => {
    //     return a + b / e.length + 1;
    //   });
    // });
  },
};
</script>

<style scoped lang="scss"></style>
