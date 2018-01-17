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

<style lang="scss">
    $basic_color: #2c3e50;

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $basic_color;
        margin-top: 60px;
    }
</style>
