import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home')
const sort = () => import('views/category/category')
const carts = () => import('views/cart/cart')
const mine = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/mine'
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/sort',
    component:sort,
  },
  {
    path:'/carts',
    component:carts,
  },
  {
    path:'/mine',
    component:mine,
  },
  {
    path:'/detail/:iid',
    component:detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
