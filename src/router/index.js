import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Employee from '../components/Employee'
import ApexChart from '../components/ApexChart'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Employee/:id',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/apex',
    name: 'Vue Chart',
    component: ApexChart
  }

]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
})

export default router
