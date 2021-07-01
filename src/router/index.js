import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'/Login'
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path:'/Home',
      component:Home
    }
]

const router = new VueRouter({
  routes
})

export default router
