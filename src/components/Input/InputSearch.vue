<template>
  <input
    type="text" 
    class="input" 
    v-model="value"
    @input="HandeleInput"
    @focus="HandleInputFocus" 
    @blur="HandleInputBlur"
  >
</template>

<script>
export default {
  data() {
    return {
      value: 'Поиск пользователей'
    }
  },

  methods: {

    HandeleInput(e) {
      if(e.target.value.length > 0 && e.target.value !== 'Поиск пользователей') {
        this.value = e.target.value
        this.$store.dispatch('SEARCH_VALUE_ACTION', e.target.value)
      } else {
        this.$store.dispatch('SEARCH_VALUE_ACTION', '')
      }
    },

    HandleInputFocus(e) {
      if(e.target.value.length > 0 && e.target.value !== 'Поиск пользователей'){
        return
      } else {
        this.value = ''
      }
    },

    HandleInputBlur(e) {
      if(e.target.value.length > 0 && e.target.value !== 'Поиск пользователей') {
        this.value = e.target.value
        this.$store.dispatch('SEARCH_VALUE_ACTION', e.target.value)
      } else {
        this.value = 'Поиск пользователей'
        this.$store.dispatch('SEARCH_VALUE_ACTION', '')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .input {
    width: 80%;
    padding: 10px 3px;
    border-radius: 6px;
    border: 1px solid #6e6a6a;
    color: #9d9b9b;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
</style>