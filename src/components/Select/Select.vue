<template>
 <select v-model="selectValue" @change="selectChange" class="select">
  <!-- <option v-if="selectType === 'status'" :value="all_status">Все</option> -->
  <option disabled value="">Выберите из списка</option>

  <option
    v-if="(this.$route.query)"
    v-for="option in optionList"
    :selected="getQueryParam"
    :key="option.value"
    :value="option.value"
  >
    {{ option.title}}
  </option>

  <option v-else v-for="option in optionList" :value="option.value">
    {{ option.title }}
  </option>

 </select>
</template>

<script>
export default {
  data() {
    return {
      selectValue: {
        type: String
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