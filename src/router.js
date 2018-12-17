import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Type from './views/Type.vue'
import TopCharts from './views/TopCharts.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      props: true
    },{
      path: '/category',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    },
    {
      path: '/topcharts',
      name: 'topcharts',
      component: TopCharts
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
