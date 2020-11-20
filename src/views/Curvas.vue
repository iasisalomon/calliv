<template>
  <div class="container">
    <Navbar />
    <FitSelector />
    <h1>{{ filename }}</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import FitSelector from "../components/FitSelector";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    FitSelector
  },
  methods: {},
  mounted() {
    if (localStorage.getItem("filename") != "") {
      this.filename = JSON.parse(localStorage.getItem("filename"));
    }
    if (localStorage.getItem("csvdata") != "") {
      this.csvdata = JSON.parse(localStorage.getItem("csvdata")).sort();
    }
    if (localStorage.getItem("tableConfig") != "") {
      this.tableConfig = JSON.parse(localStorage.getItem("tableConfig"));
    }
  }
};

</script>

<style scoped lang="scss">
</style>
