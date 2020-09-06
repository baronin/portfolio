<template>
  <div>
    <main-header></main-header>
    <main class="main">
      <div class="container flex">
        <main class="content">
          <archives-content></archives-content>
        </main>
        <aside-block></aside-block>
      </div>
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import MainHeader from '../assets/components/the-header/the-header';
import FooterBlock from '../assets/components/the-footer/footer-block';
import ArchivesContent from '../assets/components/archives/archives-content';
import AsideBlock from '../assets/components/aside-block/aside-block';

export default {
  name: 'Archives',
  components: { AsideBlock, ArchivesContent, FooterBlock, MainHeader },
};
</script>

<style scoped></style>
