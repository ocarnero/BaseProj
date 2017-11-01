import Vue from 'vue'
import Router from 'vue-router'
import clients from '@/components/app/clients'
import loginForm from '@/components/login-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/clients',
      name: 'clients',
      component: clients
    },
    {
      path: '/',
      name: 'loginForm',
      component: loginForm
    }
  ]
})
