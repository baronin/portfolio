import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/home.vue';
import AboutUs from '../pages/aboutUs.vue';
import Portfolio from '../pages/portfolio.vue';
import Archives from '../pages/archives.vue';
import Contacts from '../pages/contacts.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: AboutUs },
      { path: '/portfolio', component: Portfolio },
      { path: '/archives', component: Archives },
      { path: '/contact', component: Contacts },
    ],
  });
}
