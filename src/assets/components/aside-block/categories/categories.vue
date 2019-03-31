<template>
  <div>
    <nav class="sidebar Categories">
      <h3 class="h3 line-bottom">{{categories.titles}}</h3>
      <ul>
        <li class="archives-item" v-for="(element, index) in categories.item" :key="index">
          <a href="#" class="archives-link">{{ element }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'categories',
  data() {
    return {
      categories: {
        titles: 'Categories',
        item: [
          'Video',
          'Sports',
          'Media',
          'Entertainment',
          'Life',
          'Super Cool Stuff',
        ],
      },
    };
  },
};
</script>
<style scoped></style>
