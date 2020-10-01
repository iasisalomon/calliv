<template>
  <div class="container">
    <Navbar />
    <Nav />
    <div>
      <!-- <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="(header, ind) in adjustedHeader" :key="ind" scope="col">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in adjustedResult" :key="idx">
            <td>{{ idx }}</td>
            <td v-for="(obj, i) in tableConfig" :key="i">{{ row[i] }}</td>
          </tr>
        </tbody>
      </table> -->
      {{ adjustedResultLecture }}
    </div>
    <ProcessedTable
      :csvdata="csvdata"
      :filename="filename"
      :tableConfig="tableConfig"
    />
    <TableByWell
      :csvdata="csvdata"
      :filename="filename"
      :tableConfig="tableConfig"
      :adjustedResult="adjustedResult"
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
      condensedWells: [],
      adjustedHeader: [
        "Well",
        "Lecture 1",
        "Lecture 2",
        "Lecture 3",
        "Average",
      ],
      adjustedResult: [],
      adjustedResultLecture: [],
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
    this.condensedWells = this.csvdata.map((row) => {
      return row[0];
    });
    this.condensedWells = [...new Set(this.condensedWells)];
    this.adjustedResult = groupBy(this.csvdata, 0);
    this.adjustedResultLecture = Object.values(this.adjustedResult)
    this.adjustedResultLecture = this.adjustedResultLecture.map (el=>{
      return el.map ((e)=>{
        return  e[2]
      })
    })
  },
};
</script>

<style scoped lang="scss"></style>
