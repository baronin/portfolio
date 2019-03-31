<template>
  <form action="">
    <input type="search" name="" id="" class="search">
  </form>
</template>

<script>
export default {
  name: 'search',
};
</script>

<style lang="scss">
  @import "../../../scss/variables";

  .search {
    position: relative;
    width: 150px;
    height: 25px;
    margin-left: 22px;
    padding: 5px 0 5px 24px;
    color: $colorLink;
    background: $colorLink-hover url("../../../../assets/img/search.png") no-repeat 8px 5px;
    border: none;
    border-top: 2px solid $brdTopInput;
    border-radius: 12px;
  }
</style>
