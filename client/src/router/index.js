import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import clients from '@/components/app/clients'

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
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
