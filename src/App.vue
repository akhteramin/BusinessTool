<template>
    <div class="app">
        <!--<img src="./assets/logo.png">-->
        <router-view/>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'App'
};
</script>

<style lang="scss" scoped>
    $base_color: red;
    $base_size: 60px;
    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $base_color;
        margin-top: $base_size;
    }
</style>
