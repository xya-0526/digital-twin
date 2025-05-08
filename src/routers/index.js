import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path: 'layout',

  }
]

const route = createRouter({
  history: createWebHistory(),
  routes,
})

export default route