<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                Laravel
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <!-- Authentication Links -->
<!--                    @guest-->
<!--                    @if (Route::has('login'))-->
                    <li v-if="!isLoggedIn" class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
<!--                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>-->
                    </li>
<!--                    @endif-->

<!--                    @if (Route::has('register'))-->
                    <li v-if="!isLoggedIn" class="nav-item">
                        <router-link to="/login" class="nav-link">Register</router-link>
<!--                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>-->
                    </li>
<!--                    @endif-->
<!--                    @else-->
                    <li v-if="isLoggedIn" class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{user.name}}
                            <!--                            {{ Auth::user()->name }}-->
                        </a>

                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <router-link to="/home" class="dropdown-item">Home</router-link>
                            <a class="dropdown-item" @click.prevent="logout" href="#">Logout</a>
                            <!--                            <a class="dropdown-item" href="{{ route('logout') }}"-->
                            <!--                               onclick="event.preventDefault();-->
                            <!--                                                     document.getElementById('logout-form').submit();">-->
                            <!--                                {{ __('Logout') }}-->
                            <!--                            </a>-->

                            <!--                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">-->
                            <!--                                @csrf-->
                            <!--                            </form>-->
                        </div>
                    </li>
<!--                    @endguest-->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import User from "../apis/User";

export default {
    name: "NavBar",
    data() {
        return {
            user: {
                name:''
            },
            isLoggedIn:false
        }
    },
    mounted() {
        // this.$root.$on("login", () => {
        //     this.isLoggedIn = true;
        // });
        this.isLoggedIn = !!localStorage.getItem("auth");
        this.$root.$on('login',()=>{
            this.isLoggedIn = true;
            this.getUserInfo();
        })
    },
    methods: {
        getUserInfo(){
            User.auth()
                .then(response => {
                    this.user = response.data
                }).catch(error => {
                if(error.response.status == 401)
                {
                    localStorage.removeItem("auth");
                    this.$router.push({name:"login"})
                }
            });
        },
        logout() {
            User.logout()
                .then(() => {
                    this.isLoggedIn = false;
                    localStorage.removeItem("auth");
                    this.$router.push({name: "login"})
                })
        }
    }
}
</script>

<style scoped>

</style>
