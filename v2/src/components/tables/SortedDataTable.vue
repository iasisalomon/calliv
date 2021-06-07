<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="header in tableHeader" :key="header" scope="col">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rawData" :key="index">
          <td v-for="(col, idx) in row" :key="idx">{{ col }}</td>
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

<style>
tbody tr td:first-child {
  font-weight: bold;
}
</style>
