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
        const comfirmed_orders_from = (!this.$route.query.comfirmed_orders_from || this.$route.query.comfirmed_orders_from === '') ? 0 : this.$route.query.comfirmed_orders_from
        const comfirmed_orders_to = (!this.$route.query.comfirmed_orders_to || this.$route.query.comfirmed_orders_to === '') ? this.users.map(user => Math.max(user.comfirmedOrders))[0] + 1 : this.$route.query.comfirmed_orders_to
        const order = this.$route.query.order ?? ''

        return [...this.users].filter(user => {
          if (status === 'все') {
            return user.login.includes(this.searchValue) && 
              user.comfirmedOrders >= +comfirmed_orders_from && user.comfirmedOrders <= +comfirmed_orders_to
          } else {
            return user.login.includes(this.searchValue) && user.status.includes(status) &&
              user.comfirmedOrders >= +comfirmed_orders_from && user.comfirmedOrders <= +comfirmed_orders_to
          }
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
      }
    },
    
    watch: {
      filteredLoginAndStatusUser(newValue) {
        this.$store.dispatch('IS_SEARCH', newValue.length ? true : false)
      },
    },
  }
</script>