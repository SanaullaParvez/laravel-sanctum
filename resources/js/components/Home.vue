<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Dashboard

                    </div>
                    <div class="card-body">
                        You are logged in!<br>
<!--                        Email: {{user.email}}<br>-->
<!--                        Name: {{user.name}}-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from "../apis/User";

export default {
    name: "Home"
}
</script>

<style scoped>

</style>
