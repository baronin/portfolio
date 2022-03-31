<template>
  <div class="footer-block">
    <h2 class="h2">Recent Posts</h2>
    <hr />
    <a v-for="post in recentPosts" :key="post.recentPost" href="#" class="white"
      ><p>{{ post.recentPost }}</p></a
    >
  </div>
</template>

<script>
export default {
  name: 'RecentPost',
  data() {
    return {
      recentPosts: [
        { recentPost: 'Yastech Developments: The Best Web Design Company' },
        {
          recentPost: 'Best PSD Freebies: Amazing Design Resource & Inspiration',
        },
        { recentPost: 'Best PSD Freebies: Login Form' },
        { recentPost: 'Wedding Photography Shoot Takes & Tricks}' },
      ],
    };
  },
};
</script>

<style scoped></style>
