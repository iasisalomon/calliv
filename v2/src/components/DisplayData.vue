<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th v-for="header in tableHeader" :key="header" scope="col">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rawData" :key="index">
          <th scope="row">
            {{ index }}
          </th>
          <td v-for="(col, idx) in row" :key="idx">{{ col }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: { ...mapGetters('data', ['rawData', 'tableHeader']) },
}
</script>

<style></style>
