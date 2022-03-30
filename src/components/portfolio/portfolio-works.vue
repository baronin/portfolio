<template>
  <div>
    <nav class="nav">
      <ul class="portfolio-nav flex">
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input v-model="selectCategories" class="input-hover" type="radio" value="All" />
            All
          </label>
        </li>
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input
              v-model="selectCategories"
              class="input-hover"
              type="radio"
              value="audio motion graphics" />
            Aud io
          </label>
        </li>
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input
              v-model="selectCategories"
              class="input-hover"
              type="radio"
              value="development" />
            Development
          </label>
        </li>
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input v-model="selectCategories" class="input-hover" type="radio" value="web" />
            Web
          </label>
        </li>
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input
              v-model="selectCategories"
              class="input-hover"
              type="radio"
              value="print design" />
            Print Design
          </label>
        </li>
        <li class="portfolio-nav-item">
          <label class="portfolio-nav-link">
            <input
              v-model="selectCategories"
              class="input-hover"
              type="radio"
              value="motion graphics" />
            Motion Graphics
          </label>
        </li>
      </ul>
    </nav>

    <div class="flex content-portfolio">
      <article v-for="(portfolio, index) in filterTag" :key="index" class="block-my-works">
        <div class="block-image">
          <img :src="portfolio.img" class="portfolio-img" />
          <div class="block-image-hover">
            <footer class="the-footer flex">
              <span class="view">201 <br />views</span>
              <span class="likes">95 <br />likes</span>
              <span class="comments">10 <br />comments</span>
            </footer>
            <form action="" class="portfolio-search">
              <input type="text" class="search" placeholder="" />
            </form>
          </div>
        </div>
        <!-- /block-image -->
        <div class="block-title">
          <h3 class="title-h3">{{ portfolio.title }}</h3>
          <div class="tag flex">
            <img src="../../assets/img/tagicon.png" alt="tag icon" class="icon-tag" />
            <a v-for="(tagUnit, i) in portfolio.tag" :key="i" href="#" class="tag-link">
              {{ tagUnit }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioWorks',
  data() {
    return {
      portfolioData: [
        {
          img: require('../../assets/img/portfolio-image/screemsgirls.jpg'),
          title: 'Ultra Premium Slider',
          tag: ['web', 'development'],
        },
        {
          img: require('../../assets/img/portfolio-image/pistol.jpg'),
          title: 'Western Poster',
          tag: ['print'],
        },
        {
          img: require('../../assets/img/portfolio-image/premiumstickers.jpg'),
          title: 'Premium Stickers',
          tag: ['print', 'print design'],
        },
        {
          img: require('../../assets/img/portfolio-image/airplane.jpg'),
          title: 'Premium Stickers',
          tag: ['audio', 'motion graphics'],
        },
        {
          img: require('../../assets/img/portfolio-image/jungle1.jpg'),
          title: 'Premium Stickers',
          tag: ['web', 'development'],
        },
        {
          img: require('../../assets/img/portfolio-image/childcare.jpg'),
          title: 'Premium Stickers',
          tag: ['print'],
        },
        {
          img: require('../../assets/img/portfolio-image/premiumstickers.jpg'),
          title: 'Premium Stickers',
          tag: ['print design'],
        },
        {
          img: require('../../assets/img/portfolio-image/airplane.jpg'),
          title: 'Premium Stickers',
          tag: ['motion graphics', 'print'],
        },
        {
          img: require('../../assets/img/portfolio-image/screemsgirls.jpg'),
          title: 'Ultra Premium Slider',
          tag: ['web', 'development'],
        },
        {
          img: require('../../assets/img/portfolio-image/pistol.jpg'),
          title: 'Western Poster',
          tag: ['print'],
        },
        {
          img: require('../../assets/img/portfolio-image/premiumstickers.jpg'),
          title: 'Premium Stickers',
          tag: ['print', 'print design'],
        },
        {
          img: require('../../assets/img/portfolio-image/airplane.jpg'),
          title: 'Premium Stickers',
          tag: ['audio', 'motion graphics'],
        },
      ],
      selectCategories: ['All'],
    };
  },
  computed: {
    filterTag() {
      const tags = this.selectCategories;

      if (tags.indexOf('All') !== -1) {
        return this.portfolioData;
      }
      return this.portfolioData.filter(
        (portfolioUnit) =>
          portfolioUnit.tag.filter((portfolioTag) => tags.indexOf(portfolioTag) !== -1).length > 0,
      );
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables';

.portfolio-nav {
  margin: 34px 0 0 0;
  .portfolio-nav-item {
    &:first-child .portfolio-nav-link {
      padding-left: 0;
    }
    .portfolio-nav-link {
      display: block;
      color: $colorP;
      font-size: $h3Size;
      padding: 0 16px;
      border-right: 1px solid $black-color;
      cursor: pointer;
      .input-hover {
        display: none;
      }
    }
    &:last-child .portfolio-nav-link {
      border: none;
    }
  }
}

.content-portfolio {
  justify-content: space-between;
}

.block-my-works {
  margin: 40px 0;
  width: 220px;
  align-items: center;
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
        background-color: #8c8c8cd1;
        border-radius: 4px;
        border: none;
        cursor: pointer;
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
    //icon-tag
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

.title-h3 {
  padding: 0;
  margin-top: 15px;
  margin-bottom: 8px;
}
</style>
