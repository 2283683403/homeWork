import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [
  //index
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/',
    children:[
      {
        path: '/',
        name: '/',
        component: ()=>import('../views/index/index.vue'),
        meta:{
          title:'后台首页',
          path:"/"
        }
      }
    ]
  },
  //goods
  {
    path: '/',
    name: '/goods',
    component: HomeView,
    redirect:'/goods/list',
    children:[
      {
        path: '/goods/list',
        name: 'goods',
        component: ()=>import('../views/goods/goods.vue'),  
        meta:{
          title:'商品管理',
          path:"/goods/list"
        }  
      },
      {
        path: '/category/list',
        name: 'category',
        component: ()=>import('../views/goods/category.vue'), 
        meta:{
          title:'分类管理',
          path:"category/list"
        }   
      },
      {
        path: '/skus/list',
        name: 'skus',
        component: ()=>import('../views/goods/skus.vue'),    
        meta:{
          title:'规格管理',
          path:"/skus/list"
        }
      },
      {
        path: '/coupon/list',
        name: 'coupon',
        component: ()=>import('../views/goods/coupon.vue'),  
        meta:{
          title:'优惠卷管理',
          path:"/coupon/list"
        }  
      },
    ]
  }, 
  //user
  {
      path: '/',
      name: 'user',
      component: HomeView,
      redirect:'/user/list',
      children:[
        {
          path: '/user/list',
          name: 'user',
          component: ()=>import('../views/user/user.vue'),  
          meta:{
            title:'用户管理',
            path:"/user/list"
          }  
        },
        {
          path: '/level/list',
          name: 'category',
          component: ()=>import('../views/user/level.vue'), 
          meta:{
            title:'会员等级',
            path:"/level/list"
          }   
        },
      ]
  }, 
  //login
  {
    path:'/login',
    name:'login',
    component : () =>import('../views/Login/index.vue')
  },
  //404
  {
    path:'*',
    component : () =>import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
