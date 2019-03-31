<template>
  <div>
    <h3 class="h3 line-bottom">Archives</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Maecenas
      in magna mollis lectus lacinia mollis.
    </p>
    <div class="archives flex">
      <lastposts></lastposts>
      <div class="right-block">
        <archives-month></archives-month>
        <archives-categories></archives-categories>
      </div>
    </div>
  </div>
</template>

<script>
import Lastposts from './last-post/lastposts';
import ArchivesMonth from './archives-month/archives-month';
import ArchivesCategories from './archives-categories/archives-categories';

export default {
  name: 'archives-content',
  components: { ArchivesCategories, ArchivesMonth, Lastposts },
  props: {
    titles: Object,
  },
};
</script>

<style lang="scss">
  .archives {
    justify-content: space-between;

    .archives-block {
      margin-bottom: 40px;
    }
  }
</style>
