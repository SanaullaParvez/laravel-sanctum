require('./bootstrap');

window.Vue = require('vue').default;
// import VueRouter from 'vue-router'
import router from "./routes";

// Vue.use(VueRouter)

// const router = new VueRouter(routes)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('member-login', require('./components/LogIn.vue').default);
Vue.component('layout', require('./components/Layout.vue').default);

const app = new Vue({
    el: '#app',
    router,
});
