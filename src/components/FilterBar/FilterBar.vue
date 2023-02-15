<template>
  <div>
    <Search />
    <Select v-model="selectSortModel" :selectType="'sorted'" :optionList="optionSortList" />
    <Select v-model="selectStatusModel" :selectType="'status'" :optionList="optionStatusList" />
    <Select v-model="selectOrder" :selectType="'order'" :optionList="ordersList" />
  </div>
</template>

<script>
  import Search from '../Input/InputSearch.vue';
  import Select from '../Select/Select.vue';

  export default {
    components: {
      Search, Select
    },

    data() {
      return {
        selectSortModel: '',
        selectStatusModel: '',
        selectOrder: ''
      }
    },

    computed: {
      users() {
        return this.$store.getters.USERS
      },

      optionSortList() {
        return this.$store.getters.THEAD_LIST
      },

      ordersList() {
        return this.$store.getters.ORDERS_LIST
      },

      optionStatusList() {
        const list = []
        this.users.map( user => list.push(user.status))
        return list.filter((item, index) => index === list.indexOf(item)).map(value => {
          return {title: value.charAt(0).toUpperCase() + value.slice(1), value: value}
        })
      }, 
    },

    watch: {
      selectSortModel(newValue) {
        this.$store.dispatch('SORTED_VALUE_ACTION', newValue)
      },

      selectStatusModel(newValue) {
        this.$store.dispatch('STATUS_VALUE_ACTION', newValue)
      },

      selectOrder(newValue) {
        this.$store.dispatch('ORDER_VALUE_ACTION', newValue)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>