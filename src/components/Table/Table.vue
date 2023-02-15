<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="thed in tHeadList" 
          :key="thed.value" 
        >
          {{ thed.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <TR v-if="isSearch" :users="filteredLoginAndStatusUser"></TR>

      <tr v-else>
        <td colspan="4">Пользователь(-и) не найден(-ы)</td>
      </tr>
    </tbody>
  </table>
  
</template>

<script>
  import TR from './TR.vue';
 
  export default {
    components: {
      TR,
    },

    computed: {
      users() {
        return this.$store.getters.USERS
      },

      searchValue() {
        return this.$store.getters.SEARCH_VALUE
      },

      tHeadList() {
        return this.$store.getters.THEAD_LIST
      },

      isSearch() {
        return this.$store.getters.SEARCH
      },

      filteredLoginAndStatusUser() {
        const status = this.$route.query.status ?? ''
        const sorted = this.$route.query.sorted ?? ''
        const order = this.$route.query.order ?? ''
        return [...this.users].filter(user => {
          return user.login.includes(this.searchValue) && user.status.includes(status)
        })
        .sort((a, b) => {
            if(sorted || status || order) {
              if(this.users.find(field => typeof field[sorted] !== 'number')) {
                if(order === 'DESC') {
                  return a[sorted].localeCompare(b[sorted])
                } else if(order === 'ASC') {
                  return b[sorted].localeCompare(a[sorted])
                }
              } else {
                if(order === 'DESC') {
                  return a[sorted] - b[sorted]
                } else if(order === 'ASC') {
                  return b[sorted] - a[sorted]
                }
              }
            }
         })
      },

      // filteredUsers() {
      //   return this.filteredLoginAndStatusUser.filter(user => {
      //     return user.comfirmedOrders > +this.comfirmedOrdersFrom && user.comfirmedOrders < +this.comfirmedOrdersTo + 1
      //   })
      // },
    },
    
    watch: {
      filteredLoginAndStatusUser(newValue) {
        this.$store.dispatch('IS_SEARCH', newValue.length ? true : false)
      },
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
    justify-content: flex-end;
    width: 60%;
    margin-left: 20px;

    & label {
      padding: 10px 0;
      margin-right: 10px;
      border-radius: 6px;
      color: #4a97df;
      font-size: 18px;
    }

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