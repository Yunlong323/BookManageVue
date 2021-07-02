import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Register from '../views/Register'
import UserInfo from '../views/UserInfo'



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
    },
    {
      path:'/UserInfo',
      component:UserInfo
    },
   

]

const router = new VueRouter({
  routes
})

export default router
