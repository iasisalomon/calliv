<template>
  <div>
    <b-nav pills>
      <b-nav-item :active="activeTableNav === 1" @click="activeSortedData()"
        >Sorted Data</b-nav-item
      >
      <b-nav-item :active="activeTableNav === 2" @click="activeDataAverage()"
        >Data Average</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tables', ['activeTableNav']),
  },
  methods: {
    activeSortedData() {
      this.$store.dispatch('tables/changeActiveTableNav', 1)
    },
    activeDataAverage() {
      this.$store.dispatch('tables/changeActiveTableNav', 2)
    },
  },
}
</script>

<style></style>
