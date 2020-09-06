<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router';
import '@/assets/scss/style.scss';

import MainHeader from '@/assets/components/the-header/the-header';
import FooterBlock from '@/assets/components/the-footer/footer-block';

export default {
  name: 'App',
  router,
  components: { MainHeader, FooterBlock },
  data() {
    return {
      msg: 'Мой тест',
      categories: {
        titles: 'categories',
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

<style></style>
