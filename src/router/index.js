import Vue from 'vue'
import Router from 'vue-router'
import location from '@/components/location'
import register from '@/components/register'
import login from '@/components/login'
import mine from '@/components/mine'
import waimai from '@/components/waimai'
import search from '@/components/search'
import dingdan from '@/components/dingdan'
import city from '@/components/city'
import reset from '@/components/reset'
import dianmian from '@/components/dianmian'
import dianmian1 from '@/components/dianmian1'
import shopDetail from '@/components/shopDetail'
import lunboDetail from '@/components/lunboDetail'
import lunboDetail1 from '@/components/lunboDetail1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'location',
      component: location
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/waimai',
      name: 'waimai',
      component: waimai
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan,
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/dianmian',
      name: 'dianmian',
      component: dianmian
    },
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/dianmian1',
      name: 'dianmian1',
      component: dianmian1
    },
    {
      path: '/lunboDetail',
      name: 'lunboDetail',
      component: lunboDetail,
      children:[
        {
          path: '/lunboDetail1',
          name: 'lunboDetail1',
          component: lunboDetail1
        },
      ]
    },
  ]
})
