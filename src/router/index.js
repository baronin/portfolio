import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Archives from '@/pages/Archives';
import Contacts from '@/pages/Contacts';
import Portfolio from '@/pages/Portfolio';
import AboutUs from '@/pages/AboutUs';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives,
      meta: {
        headerBorder: true,
      },
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
      meta: {
        headerBorder: true,
      },
    },
    {
      path: '/portfolio',
      component: Portfolio,
      name: 'Portfolio',
      meta: {
        headerBorder: true,
      },
    },
    {
      path: '/about-us',
      component: AboutUs,
      name: 'AboutUs',
      meta: {
        headerBorder: true,
      },
    },
  ],
});
