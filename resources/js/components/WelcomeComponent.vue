<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Welcome</div>

                    <div class="card-body">
                        <router-link to="/login" class="btn btn-secondary">login</router-link>
                        <router-link to="/home" class="btn btn-primary">Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WelcomeComponent"
}
</script>

<style scoped>

</style>
