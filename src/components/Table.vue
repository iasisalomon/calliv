<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th v-for="(c, ind) in this.tableConfig" :key="ind" scope="col"> {{ c }}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  props: {
    csvdata: {
      type: Array
    },
    tableConfig: {
      type: Array
    },
    filename: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
