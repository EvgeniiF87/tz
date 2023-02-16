<template>
  <router-link :to="
    {
      path: '/', 
      query: {
        status: this.getStatusValue, 
        sorted: this.getSortedValue,
        comfirmed_orders_from: this.getComfirmedOrdersFrom,
        comfirmed_orders_to: this.getComfirmedOrdersTo,
        order: this.getOrderValue
      }
    }
  ">
    RESULT
  </router-link>

  <FilterBar />

  <Table />
</template>

<script>
import Table from '../components/Table/Table.vue';
import FilterBar from '../components/FilterBar/FilterBar.vue';
export default {
  components: {
    Table, FilterBar
  },

  computed: {
    getStatusValue() {
      return this.$store.getters.STATUS_VALUE
    },

    getSortedValue() {
      return this.$store.getters.SORTED_VALUE
    },

    getOrderValue() {
      return this.$store.getters.ORDER_VALUE
    },

    getComfirmedOrdersFrom() {
      return this.$store.getters.COMFIRMED_ORDERS_FROM
    },

    getComfirmedOrdersTo() {
      return this.$store.getters.COMFIRMED_ORDERS_TO
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


