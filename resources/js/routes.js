
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import Welcome from "./components/WelcomeComponent";
const routes = [
    { path:"/", name:Welcome, component:Welcome },
    { path:"/login", name:"login", component:LogIn },
    { path:"/members", name:"dashboard", component:Dashboard },
]
export default new VueRouter({
    mode: "history",
    base: '/laravel-8/',
    fallback:true,
    routes: routes
})
