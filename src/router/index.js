import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
// 路由导航守卫 就是路由跳转是默认被触发的函数
// 作用是检验登录
// 当用户登陆之后，会在浏览器中存储 sessionStorage ,只有在用户登陆之后才可以访问其他页面否则不可以访问
// 那么当用户直接进入非登录页的时候都需要判断用户是否登录，就可以使用路由导航守卫了

// beforeEach 就是守卫中的一个全局前置守卫，路由跳转之前触发

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

router.beforeEach((to, from, next) => {
  // 在路由跳转之前获取 token ，token 不存在跳转回 login 页面
  const token = window.sessionStorage.getItem('token')
  // console.log('xxx')
  if (to.path !== '/login' && !token) next('/login')
  else next()
})
export default router
