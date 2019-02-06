<template>
  <nav class="nav">
    <ul class="nav-top flex">
      <router-link tag="li" class="nav-top-item" exact to="/" active-class="active">
        <a class="nav-top-link">Home</a>
      </router-link>
      <router-link tag="li" class="nav-top-item" :to="{name:'AboutUs'}" active-class="active">
        <a class="nav-top-link">About</a>
      </router-link>
      <router-link tag="li" class="nav-top-item" :to="{name:'Portfolio'}" active-class="active">
        <a class="nav-top-link">Portfolio</a>
      </router-link>
      <router-link tag="li" class="nav-top-item" :to="{name:'Archives'}" active-class="active">
        <a class="nav-top-link">Archives</a>
      </router-link>
      <router-link tag="li" class="nav-top-item" :to="{name:'Contacts'}" active-class="active">
        <a class="nav-top-link">Contacts</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    data: function() {
      return {
        nav: [
          {
            link: 'home',
            href: 'home.html',
          },
          {
            link: 'about',
            href: 'about.html',
          },
          {
            link: 'portfolio',
            href: 'portfolio.html',
          },
          {
            link: 'blog',
            href: 'blog.html',
          },
          {
            link: 'archives',
            href: 'archives.html',
          },
          {
            link: 'contact',
            href: 'contact.html',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import "../../../scss/variables";
  @import "../../../scss/settings";

  .nav {
    display: flex;
    align-items: center;
  }

  .nav-top {
    .nav-top-item {
      position: relative;
      padding: 0 16px;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        width: 2px;
        background: linear-gradient(90deg, #080808 0%, #ffffff59 100%);
        opacity: 0.902;
        height: 20px;
      }

      .nav-top-link {
        color: $colorLink;
        font-size: 12px;
        padding: 10px;
        border-radius: 3px;
        text-transform: capitalize;
        &:hover,
        &:active {
          background: $colorLink-hover;
          box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.25),
          inset 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }

    .active {
      .nav-top-link {
        background: $colorLink-hover;
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.25),
        inset 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }
</style>
