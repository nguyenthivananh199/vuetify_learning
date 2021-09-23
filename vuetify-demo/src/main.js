import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Router from './router'
Vue.use(VueRouter);
const router=new VueRouter({
  routes:Router,
  mode:'history',
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
