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
import FooterBlock from '../assets/components/the-footer/footer-block';
import AsideBlock from '../assets/components/aside-block/aside-block';
import Logo from '../assets/components/the-header/the-header-logo/the-header-logo';
import Navigation from '../assets/components/the-header/the-header-navigation/the-header-navigation';
import Search from '../assets/components/the-header/the-header-search/the-header-search';
import BlockMyWorks from '../assets/components/portfolio/portfolio-works';
import RecentWork from '../assets/components/recent-work/recent-work';
import SlideHeader from '../assets/components/the-header/the-header-slider/the-header-slider';
import MainTheHeader from '../assets/components/the-header/the-header';

export default {
  name: 'Home',
  components: {
    MainTheHeader,
    SlideHeader, RecentWork, BlockMyWorks, Search, Navigation, Logo, AsideBlock, FooterBlock,
  },
};
</script>

<style lang="scss">

  @import "../assets/scss/variables";
  @import "../assets/scss/settings";

  .slider {
    background: url("../assets/img/bg-header.jpg");

    .header {
      padding: 20px 0;

      .container {
        justify-content: space-between;

        .top-right {
          align-items: center;
        }
      }
    }
  }

  .main {
    .container {
      padding-left: 35px;
    }
  }
</style>
