<template>
  <div class="slider-main">
    <div class="container flex">

      <div class="slider-description">
        <h1 class="h1">Portfolio Website Theme: Perfect for Anyone</h1>
        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio.
          Praesent libero. Sed
          cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          Duis sagittis
          ipsum.
        </p>
        <p class="paragraph">Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
          Aenean quam. In scelerisque
          sem at dolor. Maecenas mattis.</p>
        <button class="btn-reset btn-gray the-btn">See Our Work</button>
      </div>
      <div class="slider-img">
        <img src="../../../../assets/img/slidergraphic.png" alt="graphic">
      </div>

      <div class="btn-block-wrap">
        <div class="btn-block">
          <button class="btn-slide active"></button>
          <button class="btn-slide"></button>
          <button class="btn-slide"></button>
          <button class="btn-slide"></button>
        </div>
      </div>

      <div class="featured-blocks flex">

        <div class="featured-item">
          <h2 class="h2">What I Can All Do</h2>
          <p class="paragraph__light">Lorem ipsum dolor sit amet, omnis euismod indoctum mel
            .</p>
          <p class="paragraph line-bottom">Lorem ipsum dolor sit amet, omnis
            euismod indoctum
            mel ei, mel
            erat
            ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id
            eum. Mel alia consul constituto ex, no his inani reformidans accommoda
            re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis
            deseruisse ius.
          </p>
          <button class="btn-read">Read More</button>
        </div>

        <div class="featured-item">
          <h2 class="h2">What I Can All Do</h2>
          <p class="paragraph__light">Lorem ipsum dolor sit amet, omnis euismod indoctum mel
            .</p>
          <p class="paragraph line-bottom">Lorem ipsum dolor sit amet, omnis
            euismod indoctum
            mel ei, mel
            erat
            ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id
            eum. Mel alia consul constituto ex, no his inani reformidans accommoda
            re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis
            deseruisse ius.
          </p>
          <button class="btn-read">Read More</button>
        </div>

        <div class="featured-item">
          <h2 class="h2">What I Can All Do</h2>
          <p class="paragraph__light">Lorem ipsum dolor sit amet, omnis euismod indoctum mel
            .</p>
          <p class="paragraph line-bottom">Lorem ipsum dolor sit amet, omnis
            euismod indoctum
            mel ei, mel
            erat
            ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id
            eum. Mel alia consul constituto ex, no his inani reformidans accommoda
            re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis
            deseruisse ius.
          </p>
          <button class="btn-read">Read More</button>
        </div>

        <div class="featured-item">
          <h2 class="h2">What I Can All Do</h2>
          <p class="paragraph__light">Lorem ipsum dolor sit amet, omnis euismod indoctum mel.</p>
          <p class="paragraph line-bottom">Lorem ipsum dolor sit amet, omnis
            euismod indoctum
            mel ei, mel
            erat
            ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id
            eum. Mel alia consul constituto ex, no his inani reformidans accommoda
            re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis
            deseruisse ius.
          </p>
          <button class="btn-read">Read More</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'the-header-slider',
};
</script>

<style lang="scss">
  @import "../../../scss/variables";
  @import "../../../scss/settings";

  .h2 {
    margin: 0 0 25px 0;
  }

  .slider-main {
    color: $white;
    border-bottom: $brdc;

    .container {
      position: relative;
      padding-top: 30px;
      padding-bottom: 30px;
      justify-content: space-between;
      margin-bottom: 60px;
    }

    .slider-description {
      max-width: 360px;

      .paragraph {
        margin: 0 0 25px 0;
        color: $white;
        padding: 0;
      }
    }
    .slider-img {
      margin-right: 80px;
    }

  }

  .paragraph {
    position: relative;
    padding: 0 0 40px 0;
  }

  .featured-blocks {
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: -50px;

    .featured-item {
      width: 220px;
      padding: 24px;
      margin-right: 20px;
      background: $white;
      color: $black-color;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .btn-block-wrap {
    position: absolute;
    width: 100%;
    bottom: 20px;

    .btn-block {
      position: absolute;
      bottom: 0;
      right: 0;
      .active {
        background-color: $colorLink;
      }
    }
  }
</style>
