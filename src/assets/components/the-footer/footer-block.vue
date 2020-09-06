<template>
  <div>
    <footer class="footer">
      <div class="container flex footer-top">
        <div class="footer-block">
          <h2 class="h2">About Porftolio</h2>
          <hr />
          <p class="paragraph white">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            persinioa inceptos himenaeos. Curabitur sodales ligula in libero.
            Sed dignissim lacinia nunc. Curabitur tortor.
          </p>
          <p class="paragraph white">
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
          </p>
        </div>
        <recent-post></recent-post>
        <div class="footer-block">
          <h2 class="h2">Twitter Widget</h2>
          <hr />
          <twitter-widget></twitter-widget>
        </div>
        <flick-widget></flick-widget>
      </div>
      <!-- /the-footer-top -->
      <section class="bottom-section">
        <div class="container flex">
          <logo></logo>
          <!--the-header-logo -->
          <div class="footer-bot flex">
            <div class="footer-left">
              <p>The Ultimate Portfolio Wordpress Theme on the Web</p>
              t:<a href="tel:+8888428356" class="inherit">(888) 842 - 8356 </a>
              e:
              <a href="mailto:info@bestpsdfreebies.com" class="inherit"
                >info@bestpsdfreebies.com</a
              >
            </div>
            <div class="footer-right">
              <p>
                Copyright 2012. Powered by
                <a href="#" class="footer-bot-link">Wordpress</a>
              </p>
              <p>
                <a href="#" class="footer-bot-link">Portfolio</a> Theme by
                <a href="#" class="footer-bot-link">Best PSD Freebies</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- /bottom-section -->
    </footer>
    <!-- /the-footer -->
  </div>
</template>

<script>
import FlickWidget from '@/assets/components/the-footer/flick-widget/flick-widget';
import Logo from '@/assets/components/the-header/the-header-logo/the-header-logo';
import RecentPost from '@/assets/components/the-footer/recent-post/recent-post';
import TwitterWidget from '@/assets/components/aside-block/twitter-widget/twitter-widget';

export default {
  name: 'the-footer-block',
  components: { TwitterWidget, RecentPost, Logo, FlickWidget },
};
</script>

<style lang="scss">
@import '../../scss/_settings.scss';
@import '../../scss/_variables.scss';

.footer {
  background: url('../../img/bg-header.jpg');
  border-top: $brdc;
  color: $white;
  .footer-top {
    padding: 40px 0;
    justify-content: space-between;
    hr {
      margin: 20px 0;
      border: 1px solid $hr;
      height: 1px;
    }
  }
  .footer-block {
    width: 220px;
  }
  .bottom-section {
    padding: 20px 0;
    color: #818181;
    background: #00000042;
    .container {
      justify-content: space-between;
      align-items: center;
    }
    .footer-bot {
      .footer-left,
      .footer-right {
        width: 390px;
      }
      .footer-left {
        padding-left: 25px;
      }
      .footer-right {
        text-align: right;
        .footer-bot-link {
          color: $colorFooterLink;
        }
      }
    }
  }
}
</style>
