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
import MainHeader from '../components/the-header/the-header.vue';
import FooterBlock from '../components/the-footer/footer-block.vue';
import ArchivesContent from '../components/archives/archives-content.vue';
import AsideBlock from '../components/aside-block/aside-block.vue';

export default {
  name: 'MainArchives',
  components: { AsideBlock, ArchivesContent, FooterBlock, MainHeader },
};
</script>

<style scoped></style>
