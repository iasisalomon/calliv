<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: datos }"
        @click="datosEmit"
        href="#"
        >Datos Ordenados</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: neta }"
        @click="neta = !neta"
        href="#"
        >Fluorescencia Neta</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: link }"
        @click="link = !link"
        href="#"
        >Link
      </a>
    </li>
    <li>
      {{ datos }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      true: true,
      datos: false,
      neta: false,
      link: false,
    };
  },
  methods: {
    datosEmit: function() {
      console.log(Math.random())
      this.$emit("datosUpdate", [true, false, false]);
    },
    netaEmit: function() {
      this.$emit("netaUpdate", [false, true, false]);
    },
    linkEmit: function() {
      this.$emit("linkUpdate", [false, false, true]);
    },
  },
};
</script>

<style scoped lang="scss"></style>
