<template>
  <header class="header" :class="{'header_border': $route.meta.headerBorder}">
    <div class="container flex">
      <logo></logo>
      <div class="top-right flex">
        <navigation></navigation>
        <search></search>
      </div>
    </div>
  </header>
</template>

<script>
import logo from './the-header-logo/the-header-logo';
import navigation from './the-header-navigation/the-header-navigation';
import search from './the-header-search/the-header-search';

export default {
  name: 'the-main-header',
  components: { logo, search, navigation },
};
</script>

<style lang="scss">
  @import "../../scss/variables";

  .header {
    padding: 20px 0;
    background: url("../../../assets/img/bg-header.jpg");

    &_border {
      border-bottom: $brdc;
    }

    .container {
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
