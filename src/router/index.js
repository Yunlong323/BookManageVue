import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Register from '../views/Register'


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
    },
    {
    path:'/Register',
    component:Register
    }
]

const router = new VueRouter({
  routes
})

export default router
