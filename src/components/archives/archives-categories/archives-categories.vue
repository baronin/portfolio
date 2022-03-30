<template>
  <section class="archives-block category">
    <h3 class="h3">Archives by Category</h3>
    <ul class="ul-categories">
      <li v-for="categories in category" :key="categories.id" class="archives-item">
        <a href class="archives-link">{{ '- ' + categories }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ArchivesCategories',
  data: () => ({
    category: ['Video', 'Sports', 'Media', 'Entertainment', 'Life', 'Super Cool Stuff'],
  }),
};
</script>

<style lang="scss">
.ul-categories {
  margin-top: 10px;
}
</style>
