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
        this.$store.dispatch('INPUT_SEARCH_VALUE', e.target.value)
      } else {
        this.$store.dispatch('INPUT_SEARCH_VALUE', '')
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
        this.$store.dispatch('INPUT_SEARCH_VALUE', e.target.value)
      } else {
        this.value = 'Поиск пользователей'
        this.$store.dispatch('INPUT_SEARCH_VALUE', '')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .input {
    width: 30%;
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
</style>