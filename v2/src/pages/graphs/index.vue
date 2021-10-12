<template>
  <div class="container-fluid">
    <Header />
    <StandardInput />
    <div class="row">
      <div class="col-2"><GraphSelect /></div>
      <div class="col-10"><Linear /></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import StandardInput from "@/components/StandardInput"
import Linear from "@/components/graphs/Linear"
import GraphSelect from "@/components/graphs/GraphSelect"
export default {
  components: { Header, StandardInput, Linear, GraphSelect },
}
</script>

<style></style>
