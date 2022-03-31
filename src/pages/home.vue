<template>
  <div>
    <main-the-header></main-the-header>
    <section class="slider">
      <slide-header></slide-header>
    </section>
    <main class="main">
      <div class="container flex">
        <recent-work></recent-work>
      </div>
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import MainTheHeader from '../components/the-header/the-header.vue';
import SlideHeader from '../components/the-header/the-header-slider/the-header-slider.vue';
import RecentWork from '../components/recent-work/recent-work.vue';
import FooterBlock from '../components/the-footer/footer-block.vue';

export default {
  name: 'PageHome',
  components: {
    MainTheHeader,
    SlideHeader,
    RecentWork,
    FooterBlock,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/settings';

.slider {
  background-image: url('../assets/img/bg-header.jpg');

  .header {
    padding: 20px 0;
  }

  .container {
    justify-content: space-between;

    .top-right {
      align-items: center;
    }
  }
}

.main {
  .container {
    padding-left: 35px;
  }
}
</style>
