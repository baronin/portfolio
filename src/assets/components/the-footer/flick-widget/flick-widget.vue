<template>
  <div class="footer-block">
    <h2 class="h2">Flickr Widget</h2>
    <hr />
    <div class="flicks-block flex">
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
      <a href="#" class="flick-link"
        ><img src="../../../img/flickimg.png" alt="flick" class="flick-img"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flick-widget',
};
</script>

<style lang="scss">
@import '../../../scss/variables';

.flicks-block {
  justify-content: space-between;

  .flick-link {
    display: flex;
    width: 46px;
    height: 46px;
    margin-bottom: 12px;
    border: 1px solid $brflick;
    background: #fcfcfc;
    justify-content: center;
    align-items: center;
  }
}
</style>
