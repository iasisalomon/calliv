<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[0] }"
        @click="datosEmit"
        >Datos Ordenados</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[1] }"
        @click="netaEmit"
        >Fluorescencia Neta</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[2] }"
        >Link
      </a>
    </li>
    <li class="btn-danger">aktiv {{ aktiv }}</li>
    <li class="btn-danger">show NAV {{ showactive }}</li>
    <li class="btn-danger">TOF {{ tof }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    showactive: {
      type: Array
    }
  },
  data() {
    return {
      tof: true,
      aktiv: [true, false, false]
    };
  },
  methods: {
    datosEmit: function() {
      // console.log(Math.random());
      this.tof = !this.aktiv.shift();
      this.aktiv.push(true)
      this.aktiv.fill(false);
      this.aktiv.splice(0, 1, this.tof);
      this.$root.$emit("datosUpdate", [this.aktiv]);
    },
    netaEmit: function () {
      this.tof = !this.aktiv.slice(1, 2)[0];
      this.aktiv.push(true)
      this.aktiv.fill(false);
      this.aktiv.splice(1, 2, this.tof);
      this.$root.$emit("netaUpdate", [this.aktiv]);
    },
    linkEmit: function() {
      this.$emit("linkUpdate", [this.aktiv]);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss"></style>
