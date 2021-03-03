<template>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th v-for="header in tableHeader" v-bind:key="header" scope="col">{{ header }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(values, key) in coins" v-bind:key="key.id">
      <th scope="row">{{ key }}</th>
      <td v-for=" (coin) in coins[key]" v-bind:key="coin.id">{{ coin }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default {
  data() {
    return {
      'tableHeader':['Code','Buy','Sell','15 Minutes', 'Last', 'Symbol'],
      'coins':{}
    }
  },
created(){
this.$http.get('https://blockchain.info/ticker')
.then((data)=>{
this.coins = data.body
})
}
}
</script>
<style scoped>
</style>