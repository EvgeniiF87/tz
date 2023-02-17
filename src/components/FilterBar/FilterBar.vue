<template>
  <div class="wrap">
    <Search />
    <div class="filter">
      <button class="filter__btn" @click="HandleFilterBtn">фильтр</button>
      <div @click.stop v-if="popup" class="filter__popup">
        
        <div class="title">Отфильтровать по статусу:</div>
        <Select v-model="selectStatusModel" :selectType="'status'" :optionList="optionStatusList" />

        <div class="title">Сортировать по:</div>
        <Select v-model="selectSortModel" :selectType="'sorted'" :optionList="optionSortList" />

        <div class="title">Порядок сортировки:</div>
        <Select v-model="selectOrder" :selectType="'order'" :optionList="ordersList" />

        <ComfirmedOrders />

      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../Input/InputSearch.vue';
  import Select from '../Select/Select.vue';
  import ComfirmedOrders from '../Select/ComfirmedOrders.vue';

  export default {
    components: {
      Search, Select, ComfirmedOrders
    },

    data() {
      return {
        selectSortModel: '',
        selectStatusModel: '',
        selectOrder: '',
        popup: true
      }
    },

    computed: {
      getQueryParam() {
        return this.$route.query
      },

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

    methods: {
      HandleFilterBtn() {
        this.popup = !this.popup
      }
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
.wrap {
  width: 100%;
 margin-top: 10px;
  display: flex;
  justify-content: space-between;

  .filter {
    position: relative;
    width: 10%;
    padding: 0;
    display: block;
    color: #9d9b9b;

    &__btn {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      border: 1px solid #6e6a6a;
      color: #9d9b9b;
      background: none;
      font-size: 12px;
    }

    &__popup {
      width: 200px;
      margin-top: 5px;
      padding: 10px 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 100%;
      right: -50%;
      background-color: #ffffff;
      border: 1px solid #6e6a6a;
      border-radius: 3px;
    }
  }

  .title {
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
      }
}

</style>