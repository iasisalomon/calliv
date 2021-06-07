<template>
  <div>
    <b-nav pills>
      <b-nav-item :class="activeTableNav === 1 ? 'active' : ''"
        >Sorted Data</b-nav-item
      >
      <b-nav-item :class="activeTableNav === 2 ? 'active' : ''"
        >Average Values</b-nav-item
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
}
</script>

<style></style>
