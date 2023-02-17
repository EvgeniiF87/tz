<template>
  <div class="wrap">
    <div class="title">По подтвержденным заказам</div>
    <div class="inputs">
      <input 
        v-model="ComfirmedOrdersFrom" 
        @input="HandeleInputFrom" 
        type="number" 
        placeholder="от"
      >

      <div class="difis"> &#8211; </div>

      <input 
        v-model="ComfirmedOrdersTo" 
        @input="HandeleInputTo"
        type="number"
        placeholder="до"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ComfirmedOrdersFrom: '',
      ComfirmedOrdersTo: ''
    }
  },

  computed: {
    getQueryParam() {
      return this.$route.query ?? false
    },

    filteredResult() {
      if (this.getQueryParam) {
        this.ComfirmedOrdersFrom = this.getQueryParam['comfirmed_orders_from'] ?? ''
        this.ComfirmedOrdersTo = this.getQueryParam['comfirmed_orders_to'] ?? ''
      }
    }
  },

  methods: {
    HandeleInputFrom() {
      this.$store.dispatch('COMFIRMED_ORDERS_FROM_ACTION', this.ComfirmedOrdersFrom)
    },

    HandeleInputTo() {
      this.$store.dispatch('COMFIRMED_ORDERS_TO_ACTION', this.ComfirmedOrdersTo)
    }
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;

  & .title {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .inputs {
    width: 100%;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .difis {
      margin: 0 3px;
    }

    & input {
      width: 30%;
      padding: 5px 0;
      text-align: center;

      &:focus {
        outline: none;
      }
    }
  }
}

</style>