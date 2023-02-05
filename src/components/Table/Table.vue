<template>

  <div class="search-wrap">
    <Search />
    <div class="comfirmed-orders">
      <input v-model="defaultComfirmedOrdersFrom" @input="HandeleInputFrom" type="text">

      <div> &#8211; </div>

      <input 
        v-model="defaultComfirmedOrdersTo" 
        @input="HandeleInputTo" 
        type="text"
      >
    </div>
  </div>
  
  <table>
    <thead>
      <tr>
        <th
          v-for="thed in tHeadList" 
          :key="thed.value" 
          @click="sortedTable(thed.value)"
        >
          {{ thed.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <TR v-if="isSearch" :users="filteredUsers"></TR>

      <tr v-else>
        <td colspan="4">Пользователь(-и) не найден(-ы)</td>
      </tr>
    </tbody>
  </table>
  
</template>

<script>
  import TR from './TR.vue';
  import Search from '../Input/InputSearch.vue';
  export default {
    components: {
      TR, Search
    },

    data() {
      return {
        tHeadList: [
          {title: 'Место', value: 'position'},
          {title: 'Логин', value: 'login'},
          {title: 'Подтвержденные заказы', value: 'comfirmedOrders'},
          {title: 'Статус', value: 'status'},
        ],
        comfirmedOrdersFrom: '',
        comfirmedOrdersTo: '',
        defaultComfirmedOrdersFrom: 'от',
        defaultComfirmedOrdersTo: 'до',
      }
    },

    computed: {
      users() {
        return this.$store.getters.USERS
      },

      isSearch() {
        return this.$store.getters.SEARCH
      },

      searchValue() {
        return this.$store.getters.SEARCH_VALUE
      },

      filteredLoginAndStatusUser() {
        return [...this.users].filter(user => {
          return user.login.includes(this.searchValue) || user.status.includes(this.searchValue)
        })
      },

      filteredUsers() {
        return this.filteredLoginAndStatusUser.filter(user => {
          return user.comfirmedOrders > +this.comfirmedOrdersFrom && user.comfirmedOrders < +this.comfirmedOrdersTo + 1
        })
      },

      defaultValue() {
        this.comfirmedOrdersFrom = 0
        this.comfirmedOrdersTo = this.users.map(user => Math.max(user.comfirmedOrders))[0] + 1
      },
    },

    methods: {
      sortedTable(value) {
         this.users.sort((a, b) => {
            if(this.users.find(field => typeof field[value] !== 'number')) {
              return a[value].localeCompare(b[value])
            } else {
              return a[value] - b[value]
            }
         })
      },

      HandeleInputFrom(e) {
        return (e.target.value === '1') ? this.comfirmedOrdersFrom = 0 : this.comfirmedOrdersFrom = +e.target.value
      },

      HandeleInputTo(e) {
        this.comfirmedOrdersTo = +e.target.value
      },

      HandeleInputBlurTo(e) {
        if(e.target.value === '') {
          this.defaultComfirmedOrdersTo = 'до'
          this.filteredUsers()
        }
      }
    },
    
    watch: {
      filteredUsers(newValue) {
        this.$store.dispatch('IS_SEARCH', newValue.length ? true : false)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .search-wrap {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
  }

  .comfirmed-orders {
    display: flex;
    align-items: center;
    width: 60%;
    margin-left: 20px;

    & div {
      margin: 0 5px;
      color: #4a97df;
    }

    & input {
      width: 10%;
      padding: 10px 3px;
      border: 1px solid #4a97df;
      background-color: #AFCDE7;
      border-radius: 6px;
      color: #fff;
      font-size: 16px;

      &:focus {
        border: 1px solid #4a97df;
        outline: none;
      }
    }
  }

</style>