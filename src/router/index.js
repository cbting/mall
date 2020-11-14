import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/profile',
      component: Profile
    }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
