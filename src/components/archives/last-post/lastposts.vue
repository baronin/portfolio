<template>
  <div>
    <section class="last-posts">
      <h3 class="h3">Last 25 Posts</h3>
      <ul>
        <li v-for="(post, i) in lastPost" :key="i" class="post-item">
          <a href="#" class="post-link">{{ post }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: 'LastPosts',
  data() {
    return {
      lastPost: [
        'Lorem ipsum sem id lectus seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid dolor sit amet elit',
        'Lorem ipsum blandit vitae seid dolor sit',
        'Lorem ipsum egestas enud',
        'Lorem ipsum seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id lectus',
        'Lorem ipsum sem id lectus',
        'Lorem ipsum sem id seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id lectus seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id',
        'Lorem ipsum sem id lectus seid seid dolor sit amet',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id lectus',
        'Lorem ipsum sem id lectus',
        'Lorem ipsum sem id seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id lectus seid dolor sit amet elit',
        'Lorem ipsum sem id lectus seid',
        'Lorem ipsum sem id',
        'Lorem ipsum sem id lectus seid seid dolor sit amet',
        'Lorem ipsum sem id lectus seid',
      ],
    };
  },
};
</script>
<style lang="scss">
.last-posts {
  width: 380px;
}
</style>
