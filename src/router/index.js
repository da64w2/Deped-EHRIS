import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', name: 'Dashboard', component: () => import('../views/Dashboard.vue'), meta: { title: 'Dashboard', breadcrumb: ['Home', 'Dashboard'] } },
      { path: 'employees', name: 'Employees', component: () => import('../views/Employees.vue'), meta: { title: 'Employee', breadcrumb: ['Home', 'Employee'] } },
      { path: 'departments', name: 'Departments', component: () => import('../views/Departments.vue'), meta: { title: 'Departments' } },
      { path: 'leave', name: 'Leave', component: () => import('../views/Leave.vue'), meta: { title: 'Leave' } },
      { path: 'my-details', name: 'MyDetails', component: () => import('../views/MyDetails.vue'), meta: { title: 'My Details', breadcrumb: ['Home', 'My Details'] } },
      { path: 'cot-rpms', name: 'COT-RPMS', component: () => import('../views/Placeholder.vue'), meta: { title: 'COT-RPMS Summary' } },
      { path: 'sat-summary', name: 'SAT-Summary', component: () => import('../views/Placeholder.vue'), meta: { title: 'SAT-Summary' } },
      { path: 'self-service', name: 'Self-Service', component: () => import('../views/Placeholder.vue'), meta: { title: 'Self-Service' } },
      { path: 'request-status', name: 'Request Status', component: () => import('../views/Placeholder.vue'), meta: { title: 'Request Status' } },
      { path: 'utilities', name: 'Utilities', component: () => import('../views/Placeholder.vue'), meta: { title: 'Utilities' } },
      { path: 'survey', name: 'Survey', component: () => import('../views/Placeholder.vue'), meta: { title: 'Survey' } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
