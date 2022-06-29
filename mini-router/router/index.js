import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { createRouter } from './router'
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
]
const router = createRouter({
  // history: createWebHashHistory(),
  routes
})
export default router
