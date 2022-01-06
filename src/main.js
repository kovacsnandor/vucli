import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
//Ebben van leírva, hogy működik a route
import RouteConfig from './config/routes.js'

//Így indíjuk a router-t
const router = new VueRouter({
    routes: RouteConfig
});

//A VueResource, VueRouter használatba vétele
Vue.use(VueResource);
Vue.use(VueRouter);



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')