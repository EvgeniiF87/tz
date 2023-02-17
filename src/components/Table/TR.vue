<template>
  <tr v-for="user in users" :key="user.id">
    <TD aria-label="Позиция" :value="user.position"></TD>
    <TD aria-label="Логин" :value="user.login"></TD>
    <TD aria-label="Подтвержденные заказы" :value="user.comfirmedOrders"></TD>
    <TD aria-label="Статус" :value="user.status"></TD>
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