<template>
 <select v-model="selectValue" @change="selectChange" class="select">
  <option disabled value="default">Выберите из списка</option>

  <option
    v-for="option in optionList"
    :key="option.value"
    :value="option.value"
    :selected="getQueryParam"
  >
    {{ option.title }}
  </option>

 </select>
</template>

<script>
export default {
  data() {
    return {
      selectValue: {
        type: String,
      },
    }
  },

  props: {
    optionList: {
        type: Array,
        default: () => []
      },
      selectType: {
        type: String,
        default: ''
      }
  },

  computed: {
    getQueryParam() {
      return this.$route.query[this.selectType] ?? false
    },

    selectedQueryValue() {
      if (this.getQueryParam) {
        this.selectValue = this.getQueryParam[this.selectType] ?? ''
      }
    }
  },

  methods: {
    selectChange(event) {
      this.$emit('update:selectValue', event.target.value)
    }
  },
}
</script>

<style lang="scss" scoped>
  .select {
    padding: 10px;
    margin: 5px 0;
    width: 70%;
  }
</style>