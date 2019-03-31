<template>
  <div>
    <div class="twitter-comments">
      <p class="paragraph">
        @<a href="#" class="twitter-link">pixelmater</a> What an awesome design
        with great functionality :)
      </p>
      <span class="ago">about 1 hour ago</span>
    </div>
    <div class="twitter-comments">
      <p class="paragraph">
        @<a href="#" class="twitter-link">pixelmater</a> What an awesome design
        with great functionality :)
      </p>
      <span class="ago">about 2 hour ago</span>
    </div>
    <p>Follow @<a href="#" class="twitter-link">bestpsdfreebies</a></p>
  </div>
</template>

<script>
export default {
  name: 'twitter-widget',
};
</script>

<style lang="scss">
  @import "../../../scss/variables";

  .twitter-comments {
    margin: 20px 0;

    .paragraph {
      margin: 0;
    }
  }

  .twitter-link {
    color: $colorWidget;
    font-weight: 200;
  }

  .ago {
    display: block;
    margin-top: 8px;
    color: $colorWidget;
  }

  .footer {
    .paragraph {
      color: #fff;
    }
  }
</style>
