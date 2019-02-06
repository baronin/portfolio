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
import MainHeader from '../assets/components/the-header/the-header';
import FooterBlock from '../assets/components/the-footer/footer-block';
import BlockMyWorks from '../assets/components/portfolio/portfolio-works';
export default {
  name: 'Portfolio',
  components: { BlockMyWorks, FooterBlock, MainHeader },
};
</script>
<style lang="scss">
  .content-portfolio {
    width: 100%;
  }
</style>
