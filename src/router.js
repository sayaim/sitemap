import { createRouter, createWebHistory} from 'vue-router'
import adminLogin from './components/auth/adminLogin.vue'
import adminRegister from './components/auth/adminRegister.vue'
import memberLogin from './components/auth/memberLogin.vue'
import memberRegister from './components/auth/memberRegister.vue'
import Home from './components/Home.vue'

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
		path: '/admin_login',            
		name: 'admin_login',
		component: adminLogin,
	},
	{
		path: '/admin_register',            
		name: 'admin_register',
		component: adminRegister,
	},
	{
		path: '/member_login',            
		name: 'member_login',
		component: memberLogin,
	},
	{
		path: '/member_register',            
		name: 'member_register',
		component: memberRegister,
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
		next({
			path: '/member_login',
			query: {
				redirect: to.fullPath,
			}
		})
	} else {
		next()
	}
})

export default router