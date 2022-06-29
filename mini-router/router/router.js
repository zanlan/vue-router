import { ref } from 'vue'
import RouterLink from './RouterLink'
import RouterView from './RouterView'
export function createRouter(options) {
  const router = {
    options, 
    current: ref(window.location.hash.slice(1) || '/'),
    install(app) {
      app.component('RouterLink', RouterLink)
      app.component('RouterView', RouterView)
      app.config.globalProperties.$router = this
    }
  } 
  window.addEventListener('hashchange', () => {
    router.current.value = window.location.hash.slice(1)
  })
  return router
}