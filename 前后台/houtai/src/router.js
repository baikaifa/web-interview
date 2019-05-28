import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import LoadMore from './views/LoadMore'
import infoShow from './views/infoShow.vue'
import TopicList from './views/TopicList.vue'
import ArticleList from './views/ArticleList.vue'
import RecommendList from './views/RecommendList'
import FourList from './views/FourList'
import Detail from './views/Detail'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: "", component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/loadMore', name: 'loadMore', component: LoadMore },
        { path: '/topicList', name: 'topicList', component: TopicList },
        { path: '/articleList', name: 'articleList', component: ArticleList },
        { path: '/recommendList', name: 'recommendList', component: RecommendList },
        { path: '/fourList', name: 'fourList', component: FourList },
        { path: '/detail', name: 'detail', component: Detail }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/infoShow',
      name: 'infoShow',
      component: infoShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    }
  ]
});
//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == '/login' || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router;