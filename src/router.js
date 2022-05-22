import { createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Setting from './components/Setting.vue'
import Store from './index.js'

const routes = [
	{
		path: '/',            
		name: 'home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/login',            
		name: 'login',
		component: Login,
	},
	{
		path: '/setting',
		name: 'setting',
		component: Setting,
		meta: {
			requiresAuth: true
		}
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Store.state.isLogin) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next(); 
  }
});

export default router