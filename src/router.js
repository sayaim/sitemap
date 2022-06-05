import { createRouter, createWebHistory} from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/Home.vue'

const routes = [
	{
		path: '/home',
		name: 'home',
		component: Home,
		// meta: {
		// 	requiresAuth: true
		// }
	},
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		next({
// 			path: '/login',
// 			query: { redirect: to.fullPath }
// 		})
// 	} else {
// 		next()
// 	}
// })

export default router