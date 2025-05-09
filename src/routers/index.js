import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/national-planning'
  },
  {
    path: '/national-planning',
    component: () => import(''),
    redirect: '/national-planning/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'transportation', component: () => import('') }
    ]
  },
  {
    path: '/project-construction',
    component: () => import('@/views/ProjectConstruction.vue'),
    redirect: '/project-construction/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'transportation', component: () => import('') }
    ]
  },
  {
    path: '/low-carbon-energy',
    component: () => import(''),
    redirect: '/low-carbon-energy/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'transportation', component: () => import('') }
    ]
  },
  {
    path: '/transportation',
    component: () => import('@/views/Transportation.vue'),
    redirect: '/transportation/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'road-network', component: () => import('') }
    ]
  },
  {
    path: '/cultural-tourism',
    component: () => import('@/views/CulturalTourism.vue'),
    redirect: '/cultural-tourism/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'transportation', component: () => import('') }
    ]
  },
  {
    path: '/industrial-economy',
    component: () => import(''),
    redirect: '/industrial-economy/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('') },
      { path: 'spatial-conditions', component: () => import('') },
      { path: 'ecological-structure', component: () => import('') },
      { path: 'land-use', component: () => import('') },
      { path: 'transportation', component: () => import('') }
    ]
  }
]

const route = createRouter({
  history: createWebHistory(),
  routes
})

export default route
