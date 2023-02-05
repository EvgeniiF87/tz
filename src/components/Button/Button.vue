<template>
 <button class="btn">
  <slot></slot>
 </button>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .btn {
    border: 1px solid #4a97df;
    background-color: #AFCDE7;
    color: #fff;
    border-radius: 3px;
    padding: 6px 10px;
    margin-left: 10px;
  }
</style>