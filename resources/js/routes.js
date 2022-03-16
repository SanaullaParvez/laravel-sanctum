
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LogIn from "./components/LogIn";
import Welcome from "./components/WelcomeComponent";
import Home from "./components/Home";
const routes = [
    { path:"/", name:Welcome, component:Welcome },
    { path:"/login", name:"login", component:LogIn, meta: {guestOnly: true}},
    { path:"/home", name:"home", component:Home, meta: {authOnly: true}},
]



const router = new VueRouter({
    mode: "history",
    base: '/laravel-8/',
    fallback:true,
    routes: routes
});
function getLoggedIn(){
    return localStorage.getItem("auth")
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!getLoggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }else {
            next()
        }
    }else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (getLoggedIn()) {
            next({
                path: '/home',
                query: { redirect: to.fullPath }
            })
        }else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router;
