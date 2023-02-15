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
      tHeadList: [
        {title: 'Место', value: 'position'},
        {title: 'Логин', value: 'login'},
        {title: 'Подтвержденные заказы', value: 'comfirmedOrders'},
        {title: 'Статус', value: 'status'},
      ],
      ordersList: [
        {title: 'По возростанию', value: 'DESC'},
        {title: 'По убыванию', value: 'ASC'},
      ],
      search: true,
      searchValue: '',
      comfirmedOrdersFrom: '',
      comfirmedOrdersTo: '',
      statusValue: '',
      sortedValue: '',
      orderValue: ''
    },

    getters: {
      USERS: state => {
        return state.users
      },

      THEAD_LIST: state => {
        return state.tHeadList
      },

      ORDERS_LIST: state => {
        return state.ordersList
      },

      SEARCH: state => {
        return state.search
      },

      SEARCH_VALUE: state => {
        return state.searchValue
      },

      COMFIRMED_ORDERS_FROM: state => {
        return state.comfirmedOrdersFrom
      },

      COMFIRMED_ORDERS_TO: state => {
        return state.comfirmedOrdersTo
      },

      STATUS_VALUE: state => {
        return state.statusValue
      },

      SORTED_VALUE: state => {
        return state.sortedValue
      },

      ORDER_VALUE: state => {
        return state.orderValue
      },
    },

    mutations: {
      SET_SEARCH: (state, payload) => {
        state.search = payload
      },

      SET_SEARCH_VALUE: (state, payload) => {
        state.searchValue = payload
      },

      SET_COMFIRMED_ORDERS_FROM: (state, payload) => {
        state.comfirmedOrdersFrom = payload
      },

      SET_COMFIRMED_ORDERS_TO: (state, payload) => {
        state.comfirmedOrdersTo = payload
      },

      SET_STATUS_VALUE: (state, payload) => {
        state.statusValue = payload
      },

      SET_SORTED_VALUE: (state, payload) => {
        state.sortedValue = payload
      },

      SET_ORDER_VALUE: (state, payload) => {
        state.orderValue = payload
      },
    },

    actions: {
      IS_SEARCH: (context, payload) => {
        context.commit('SET_SEARCH', payload)
      },

      SEARCH_VALUE_ACTION: (context, payload) => {
        context.commit('SET_SEARCH_VALUE', payload)
      },

      COMFIRMED_ORDERS_FROM_ACTION: (context, payload) => {
        context.commit('SET_COMFIRMED_ORDERS_FROM', payload)
      },

      COMFIRMED_ORDERS_TO_ACTION: (context, payload) => {
        context.commit('SET_COMFIRMED_ORDERS_TO', payload)
      },

      STATUS_VALUE_ACTION: (context, payload) => {
        context.commit('SET_STATUS_VALUE', payload)
      },

      SORTED_VALUE_ACTION: (context, payload) => {
        context.commit('SET_SORTED_VALUE', payload)
      },

      ORDER_VALUE_ACTION: (context, payload) => {
        context.commit('SET_ORDER_VALUE', payload)
      }
    }
})