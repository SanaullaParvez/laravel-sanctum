<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form method="POST" @submit.pre.prevent="handleSubmit">
                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="formData.email"  required autocomplete="email" autofocus>
                                    <span v-if="" class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="formData.password" required autocomplete="current-password">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                    <a class="btn btn-link" href="#">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from "../apis/User"
import Csrf from "../apis/Csrf"
import Secret from "../apis/Secret"
export default {
    name: "LogIn",
    data: () => ({
            secrets:[],
            formData: {
                email:'admin@example.com',
                password:'admin123'
            },
        errors:[]
    }),
    methods: {
        handleSubmit(){
            this.$router.push({name:"dashboard"})


        },
        getSecrets(){
            Secret.getSecret();
            // axios.get('/api/secrets').then(response => {
            //     console.log(response);
            // })
        }
    }
}
</script>

<style scoped>

</style>
