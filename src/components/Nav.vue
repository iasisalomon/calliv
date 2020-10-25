<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[0] }"
        @click="datosEmit"
        href="#"
        >Datos Ordenados</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[1] }"
        @click="netaEmit"
        href="#"
        >Fluorescencia Neta</a
      >
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[2] }"
        @click="matrizNativaEmit"
        href="#"
        >Matriz Nativa
      </a>
    </li>
    <li class="nav-item">
      <a
        :class="{ 'nav-link': true, active: aktiv[3] }"
        @click="matrizCeroEmit"
        href="#"
        >Matriz Cero
      </a>
    </li>
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
      this.aktiv.push(true);
      this.aktiv.fill(false);
      this.aktiv.splice(0, 1, this.tof);
      this.$root.$emit("datosUpdate", [this.aktiv]);
    },
    netaEmit: function() {
      this.tof = !this.aktiv.slice(1, 2)[0];
      this.aktiv.push(true);
      this.aktiv.fill(false);
      this.aktiv.splice(1, 2, this.tof);
      this.$root.$emit("netaUpdate", [this.aktiv]);
    },
    matrizNativaEmit: function() {
      this.tof = !this.aktiv.slice(2, 3)[0];
      this.aktiv.push(true);
      this.aktiv.fill(false);
      this.aktiv.splice(2, 3, this.tof);
      this.$root.$emit("matrizNativaUpdate", [this.aktiv]);
    },
    matrizCeroEmit: function() {
      this.tof = !this.aktiv.slice(3, 4)[0];
      this.aktiv.push(true);
      this.aktiv.fill(false);
      this.aktiv.splice(3, 4, this.tof);
      this.$root.$emit("matrizNativaUpdate", [this.aktiv]);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss"></style>
