<template>
  <aside>
    <div class="sidebar">
      <h3 class="h3 line-bottom">About Portfolio</h3>
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis
        sagittis ipsum.
      </p>
    </div>
    <!-- /sidebar -->
    <categories></categories>
    <!--<categories></categories>-->
    <nav class="sidebar twitter">
      <h3 class="h3 line-bottom">Twitter Widget</h3>
      <twitter-widget></twitter-widget>
    </nav>
    <!-- /twitter-widget -->
  </aside>
</template>

<script>
import TwitterWidget from './twitter-widget/twitter-widget.vue';
import Categories from './categories/categories.vue';

export default {
  name: 'AsideBlock',
  components: { Categories, TwitterWidget },
  methods: {
    show(el) {
      console.log(el);
    },
  },
};
</script>

<style lang="scss">
aside {
  max-width: 220px;

  .sidebar {
    margin-bottom: 30px;
  }
}
</style>
