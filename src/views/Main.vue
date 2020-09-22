<template>
<div class="container">
<Navbar/>
<Upload/>
</div>
</template>

<script>


import Navbar from "../components/Navbar"
import Upload from "../components/Upload"
export default {
      data() {
      return {
        csvdata:[],
        filename:"Choose file"
      }
    },
  components: {
    Navbar,
    Upload 
  }
}
</script>

<style scoped lang="scss">

</style>
