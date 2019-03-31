<template>
  <div>
    <h3 class="title-h3__bg-bot"> {{archive.title}} </h3>
    <p class="paragraph">{{archive.paragraph}}</p>
  </div>
</template>
<script>
export default {
  name: 'title-item',
  props: ['archive'],
};
</script>
<style scoped></style>
