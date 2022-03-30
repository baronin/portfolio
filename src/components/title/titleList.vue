<template>
  <div>
    <title-item :archive="titles.archives"></title-item>
  </div>
</template>

<script>
import TitleItem from './titleItem.vue';

export default {
  name: 'TitleList',
  components: { TitleItem },
  data() {
    return {
      titles: {
        archives: {
          title: 'Archives',
          paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Sed cursusnte dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.' +
            'Duis sagittisipsum. Praesentmauris. Maecenas in magna mollis lectus lacinia mollis.',
        },
      },
    };
  },
};
</script>
<style scoped></style>
