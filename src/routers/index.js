import { createRouter,createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/national-planning'
  },
  {
    path: '/national-planning',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/national-planning/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'transportation', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  },
  {
    path: '/project-construction',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/project-construction/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'transportation', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  },
  {
    path: '/low-carbon-energy',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/low-carbon-energy/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'transportation', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  },
  {
    path: '/transportation',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/transportation/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'road-network', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  },
  {
    path: '/cultural-tourism',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/cultural-tourism/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'transportation', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  },
  {
    path: '/industrial-economy',
    component: () => import('../view/nationalPlanning/index.vue'),
    redirect: '/industrial-economy/location-conditions',
    children: [
      { path: 'location-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'spatial-conditions', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'ecological-structure', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'land-use', component: () => import('../view/nationalPlanning/components/locationConditions.vue') },
      { path: 'transportation', component: () => import('../view/nationalPlanning/components/locationConditions.vue') }
    ]
  }
];

const route = createRouter({
  history: createWebHistory(),
  routes,
})

export default route