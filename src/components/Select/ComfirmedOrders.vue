<template>
  <div>
    <label>По подтвержденным заказам</label>
      <input v-model="defaultComfirmedOrdersFrom" @input="HandeleInputFrom" type="text">

      <div> &#8211; </div>

      <input 
        v-model="defaultComfirmedOrdersTo" 
        @input="HandeleInputTo"
        @blur="HandeleInputBlurTo" 
        type="text"
      >
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>