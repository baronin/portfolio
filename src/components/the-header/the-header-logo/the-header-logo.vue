<template>
  <router-link to="/" class="logotype-link">
    <img src="../../../assets/img/logotype.png" alt="logotype" class="logotype" />
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo',
};
</script>

<style lang="scss">
.logotype-link {
  display: inline-block;

  .logotype {
    display: block;
  }
}
</style>
