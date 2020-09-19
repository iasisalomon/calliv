<template>
  <div>
    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <button v-on:click="log"> asd </button>
    <p>{{file1}}</p>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        file1: null,
      }
    },
    methods: {
        log: (e)=> console.log (e.target.file1[0])
      }
    }
</script>