import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Home from '@/components/Home/Home'
import Menu from '@/components/Menu/Menu'
import Shopping from '@/components/Shopping/Shopping'
import Mine from '@/components/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/home',
          component:Home
        },
        {
          path:'/menu',
          component:Menu
        },
        {
          path:'/shopping',
          component:Shopping
        },
        {
          path:'/mine',
          component:Mine
        }
      ]
    }
  ]
})
