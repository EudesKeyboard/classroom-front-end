import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import routes from './router'
import VuexStore from './vuex/store'

const store = new Vuex.Store(VuexStore);
const router = new VueRouter({
  routes
})

sync(store, router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
