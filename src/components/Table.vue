<template>
  <div class="row">
    <p>wadada</p>
    <div v-for="c in this.csvdata" :key="c" class="col-2">
      {{ c }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    csvdata: {
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
