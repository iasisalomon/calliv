<template>
  <form>
    <div class="form-row justify-content-center">
      <div class="col-1">
        <select class="form-control" v-model="selected" @change="changeDisplayGraphic">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-3">
        <input type="text" disabled class="form-control" placeholder="LINEAR" />
      </div>
      <div class="col-3">
        <h5 class="align-middle mt-2">y = x +</h5>
      </div>
      <div class="col-3">
        <h5 class="align-middle mt-2">R2 =</h5>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      mbs: [],
      selected: '1',
    };
  },
  methods: {
    changeDisplayGraphic: function() {
      console.log('navdrawings');
      console.log(this.selected);
      this.$root.$emit('changeDisplayGraphic', this.selected);
    },
  },
};
</script>

<style scoped lang="scss"></style>
