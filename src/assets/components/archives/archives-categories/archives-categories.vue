<template>
  <section class="archives-block category">
    <h3 class="h3">Archives by Category</h3>
    <ul class="ul-categories">
      <li class="archives-item" v-for="(Categories, index) in category" :key="index">
        <a href="" class="archives-link">{{ '- ' + Categories }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'archives-categories',
  data() {
    return {
      category: [
        'Video',
        'Sports',
        'Media',
        'Entertainment',
        'Life',
        'Super Cool Stuff',
      ],
    };
  },
};
</script>

<style lang="scss">
  .ul-categories {
    margin-top: 10px;
  }
</style>
