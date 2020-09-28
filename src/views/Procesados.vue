<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  data() {
    return {
      csvdata: [],
      filename: "Choose file",
      tableConfig:[],
    };
  },
  components: {
    Navbar,
  },
  methods: {
  }
};
</script>

<style scoped lang="scss"></style>
