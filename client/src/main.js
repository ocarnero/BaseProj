// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.1'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify, Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
