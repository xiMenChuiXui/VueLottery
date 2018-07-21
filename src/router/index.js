import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import DetailPage from '@/pages/home/DetailPage'
import LoginPage from '@/pages/user/LoginPage'
import UserPage from '@/pages/user/UserPage'
import SelectPage from '@/pages/shop/SelectPage'
import CartPage from '@/pages/shop/CartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/user',
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/select',
      name: 'SelectPage',
      component: SelectPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    }
  ]
})
