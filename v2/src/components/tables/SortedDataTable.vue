<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Well</th>
          <th v-for="header in repetitionCount" :key="header" scope="col">
            Lecture {{ header }}
          </th>
          <th scope="col">Average</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableHeader" :key="index">
          <th scope="row">
            {{ extractedWells[index] }}
          </th>
          <td v-for="(col, idx) in row" :key="idx">{{ col }}</td>
          <td>{{ adjustedValuesAverage[index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// <tbody>
//   <tr v-for="(row, idx) in csvdata" :key="idx">
//     <td v-for="(obj, i) in tableConfig" :key="i">{{ row[i] }}</td>
//   </tr>
// </tbody>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('data', [
      'rawData',
      'tableHeader',
      'sortedData',
      'groupedbyWellData',
      'extractedWells',
      'rawAdjustedValues',
      'adjustedValuesAverage',
      'wellRows',
      'wellCols',
      'chunkNumber',
      'repetitionCount',
    ]),
  },
}
</script>

<style></style>
