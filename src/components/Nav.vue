<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#">Datos Ordenados</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Fluorescencia Neta</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      datos: false,
      neta: false,
      link:false,
    };
  },
  methods: {
    datosEmit: function() {
      this.$emit("datosUpdate", [true, false, false]);
    },
        netaEmit: function() {
      this.$emit("netaUpdate", [false, true, false]);
    },
        Emit: function() {
      this.$emit("linkUpdate", [false, false, true]);
    },
  },
};
</script>

<style scoped lang="scss"></style>
