<template>
  <div>
    <main-header></main-header>
    <main class="main">
      <div class="container flex">
        <main class="content-portfolio">
          <h3 class="h3 line-bottom">Portfolio</h3>
          <block-my-works></block-my-works>
        </main>
      </div>
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import MainHeader from '../components/the-header/the-header.vue';
import FooterBlock from '../components/the-footer/footer-block.vue';
import BlockMyWorks from '../components/portfolio/portfolio-works.vue';

export default {
  name: 'PagePortfolio',
  components: { BlockMyWorks, FooterBlock, MainHeader },
};
</script>
<style lang="scss">
.content-portfolio {
  width: 100%;
}
</style>
