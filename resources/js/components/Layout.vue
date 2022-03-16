<template>
    <div>
        <NavBar></NavBar>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
    name: "Layout",
    components: {NavBar},
}
</script>

<style scoped>

</style>
