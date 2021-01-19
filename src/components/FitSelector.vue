<template>
  <form>
    <div class="form-row justify-content-center">
      <div class="col-3">
        <select v-model="select" class="form-control" @change="SelectEmit">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-6">
        <input
          disabled
          type="text"
          class="form-control"
          v-bind:placeholder="[[name[select]]]"
        />
      </div>
    </div>
  </form>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      select: "1",
      name: ["Scatter Plot", "Fit Linear", "Fit Cuadratic", "Fit Cubic"],
    };
  },
  methods: {
    SelectEmit: function() {
      this.$root.$emit("Select1", [this.select]);
    },
  },
  mounted() {},
};
</script>
