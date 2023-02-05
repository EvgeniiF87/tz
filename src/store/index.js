import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
      users: [
        {id:1, position:1, login:"smith@gmail.com", comfirmedOrders:312, status: "Ценитель красоты"},
        {id:2, position:2, login:"lenin@gmail.com", comfirmedOrders:120, status: "Поставщик аксессуаров"},
        {id:3, position:3, login:"mask@gmail.com", comfirmedOrders:98, status: "Конкурент минздрава"},
        {id:4, position:4, login:"dog@mail.ru", comfirmedOrders:64, status: "рыбак"},
        {id:5, position:5, login:"nightmare@mail.ru", comfirmedOrders:34, status: "охотник"},
        {id:6, position:6, login:"cat@mail.ru", comfirmedOrders:1, status: "Ценитель красоты"},
      ],
      search: true,
      searchValue: '',
    },

    getters: {
      USERS: state => {
        return state.users
      },

      SEARCH: state => {
        return state.search
      },

      SEARCH_VALUE: state => {
        return state.searchValue
      },
    },

    mutations: {
      SET_SEARCH: (state, payload) => {
        state.search = payload
      },

      SET_SEARCH_VALUE: (state, payload) => {
        state.searchValue = payload
      },
    },

    actions: {
      IS_SEARCH: (context, payload) => {
        context.commit('SET_SEARCH', payload)
      },

      INPUT_SEARCH_VALUE: (context, payload) => {
        context.commit('SET_SEARCH_VALUE', payload)
      },
    }
})