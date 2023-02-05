<template>
  <tr v-for="user in users" :key="user.id">
    <TD :value="user.position"></TD>
    <TD :value="user.login"></TD>
    <TD :value="user.comfirmedOrders"></TD>
    <TD :value="user.status"></TD>
  </tr>
</template>

<script>
import TD from './TD.vue';
export default {
  components: {
    TD,
  },
  props: {
    users: {},
  },
}
</script>

<style scoped>
  
</style>