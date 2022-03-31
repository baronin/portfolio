<template>
  <div>
    <nav class="sidebar Categories">
      <h3 class="h3 line-bottom">{{ categories.titles }}</h3>
      <ul>
        <li v-for="(element, i) in categories.item" :key="i" class="archives-item">
          <a href="#" class="archives-link">{{ element }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageCategories',
  data() {
    return {
      categories: {
        titles: 'Categories',
        item: ['Video', 'Sports', 'Media', 'Entertainment', 'Life', 'Super Cool Stuff'],
      },
    };
  },
};
</script>
