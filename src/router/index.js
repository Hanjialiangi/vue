import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = () => import(/* webpackChunkName: 'index' */ '@/pages/Index.vue')
const Home = () => import(/* webpackChunkName: home */'@/pages/Index/Home.vue')
const CorrespondingSongList = () => import(/* webpackChunkName: correspondingsonglist */'@/pages/Song/CorrespondingSongList.vue')
const PlayCustomer = () => import(/* webpackChunkName:playcustomer */'@/pages/boke/PlayCustomer.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'playcustomer',
          name: 'playcustomer',
          component: PlayCustomer
        },
        {
          path: 'correspondingsonglist/:id',
          name: 'correspondingsonglist',
          component: CorrespondingSongList
        }
      ]
    }
  ]
})
