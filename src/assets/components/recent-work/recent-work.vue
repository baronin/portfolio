<template>
  <div class="recent-work">


    <h2 class="h3 line-bottom">Recent Work</h2>

    <div class="recent-block flex">
      <div class="description">
        <p class="paragraph__light">Lorem ipsum dolor sit amet, omnis
          euismod indoctum mel
          .</p>
        <p class="paragraph">Lorem ipsum dolor sit amet, omnis
          euismod indoctum
          mel ei, mel
          erat
          ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id
          eum. Mel alia consul constituto ex, no his inani reformidans accommoda
          re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis
          deseruisse ius.
        </p>
      </div> <!-- /description -->

      <div class="slider-recent-work">
        <div class="btn-block">
          <button class="btn-slide active"></button>
          <button class="btn-slide"></button>
          <button class="btn-slide"></button>
        </div> <!-- /btn-block -->

        <div class="flex content-portfolio-home">

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/screems girls.jpg" alt="screems girls" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view">201 <br/>views</span>
                  <span class="likes">95 <br> likes</span>
                  <span class="comments">10 <br> comments</span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div> <!-- /block-image -->
          </div> <!-- /portfolio-works -->

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/pistol.jpg" alt="pistol" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view">201 <br/>views</span>
                  <span class="likes">95 <br> likes</span>
                  <span class="comments">10 <br> comments</span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div> <!-- /block-image -->
          </div> <!-- /portfolio-works -->

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/premiumstickers.jpg" alt="screems girls" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view">201 <br/>views</span>
                  <span class="likes">95 <br> likes</span>
                  <span class="comments">10 <br> comments</span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div> <!-- /block-image -->
          </div> <!-- /portfolio-works -->

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/airplane.jpg" alt="screems girls" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view">201 <br/>views</span>
                  <span class="likes">95 <br> likes</span>
                  <span class="comments">10 <br> comments</span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div> <!-- /block-image -->
          </div> <!-- /portfolio-works -->

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/jungle1.jpg" alt="screems girls" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view"> 201 <br/>views </span>
                  <span class="likes"> 95 <br> likes </span>
                  <span class="comments"> 10 <br> comments </span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div> <!-- /block-image -->
          </div> <!-- /portfolio-works -->

          <div class="block-my-works">
            <div class="block-image">
              <img src="../../../assets/img/portfolio-image/childcare.jpg" alt="childcare" class="portfolio-img">
              <div class="block-image-hover">
                <footer class="the-footer flex">
                  <span class="view"> 201 <br/>views </span>
                  <span class="likes"> 95 <br> likes </span>
                  <span class="comments"> 10 <br> comments </span>
                </footer>
                <form action="" class="portfolio-search">
                  <input type="text" class="search" placeholder="">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'recent-work',
  };
</script>

<style lang="scss">
  @import "../../scss/variables";
  @import "../../scss/settings";

  .recent-work {
    position: relative;
    margin-top: 350px;

    .recent-block {
      width: 100%;
      justify-content: space-between;
      padding: 30px 0;

      .description {
        width: 170px;
      }

      .slider-recent-work {
        .btn-block {
          position: absolute;
          top: 1px;
          right: 0;
        }
        .active {
          background-color: $colorLink;
        }
      }
    }
  }

  .content-portfolio-home {
    width: 700px;
    margin-left: 25px;

    .block-my-works {
      margin: 0 20px 20px 0;
      width: 220px;
      align-items: center;
      &:nth-last-child(3n + 1) {
        margin-right: 0;
      }

      .block-image {
        position: relative;
        display: block;
        &:hover .block-image-hover {
          display: flex;
        }

        .portfolio-img {
          display: block;
        }
      }

      .block-image-hover {
        display: none;
        position: absolute;
        flex-direction: column-reverse;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #00000094;

        .portfolio-search {
          display: block;
          margin: 0 auto 36px;

          .search {
            width: 70px;
            height: 70px;
            background: #8c8c8cd1;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            background-image: url("#{$assetsImgPath}/serchportfolio.png");
            background-position: 50% 50%;
            background-repeat: no-repeat;
          }
        }

        .the-footer {
          justify-content: space-around;
          color: $white;
          margin-bottom: 18px;
        }
      }

      .tag {
        .icon-tag {
          display: block;
          height: 100%;
          margin-right: 10px;
        }
        .tag-link {
          color: $colorWidget;
          padding: 0 4px;
          border-right: 1px solid $colorP;
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
</style>
