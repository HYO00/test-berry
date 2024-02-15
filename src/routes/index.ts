import  * as VueRouter from 'vue-router'
import CreateProcess from '../components/Process/CreateProcess.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  { path: '/', component:  HelloWorld  },
  { path: '/process', component:  CreateProcess }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;