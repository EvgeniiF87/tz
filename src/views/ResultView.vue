<template>
  <div>
    <router-link :to="
      {
        path: '/result', 
        query: {status: this.getStatusValue, sorted: this.getSortedValue, order: this.getOrderValue}
      }
    ">
      RESULT
    </router-link>
    <hr />
    <FilterBar />
    <hr />
    <Table />
  </div>
</template>

<script>
import FilterBar from '../components//FilterBar/FilterBar.vue'
import Table from '../components/Table/Table.vue';
export default {
  components: {
    FilterBar, Table
  },

  computed: {
    getQueries() {
      return this.$route.query
    },

    getStatusValue() {
      return this.$store.getters.STATUS_VALUE
    },

    getSortedValue() {
      return this.$store.getters.SORTED_VALUE
    },

    getOrderValue() {
      return this.$store.getters.ORDER_VALUE
    }
  },
}
</script>

<style lang="scss" scoped>

</style>