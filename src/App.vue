<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import router from 'router';
import './assets/scss/style.scss';

// import FooterBlock from './components/the-footer/footer-block';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Мой тест',
      categories: {
        titles: 'categories',
        item: ['Video', 'Sports', 'Media', 'Entertainment', 'Life', 'Super Cool Stuff'],
      },
    };
  },
};
</script>

<style></style>
