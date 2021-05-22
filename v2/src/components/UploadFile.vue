<template>
  <div>
    <b-form-file ref="file-input" v-model="file" class="mb-2"></b-form-file>

    <b-button class="mr-2" @click="clearFiles">Reset via method</b-button>
    <b-button @click="file = null">Reset via v-model</b-button>

    <p class="mt-2">
      Selected file: <b>{{ file ? file.name : '' }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    }
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
  },
}
</script>
