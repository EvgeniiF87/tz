<template>
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
  },

  methods: {
    generatedLink() {
      const status = (this.getStatusValue.length) ? this.getStatusValue : null
      const sorted = (this.getSortedValue.length) ? this.getSortedValue : null
      const order = (this.getOrderValue.length) ? this.getOrderValue : null
      return this.$router.push({
        path: '/result',
        query: {status, sorted, order}
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>


