<template>
    <div class="app">
        <header-view></header-view>
        <router-view/>
        <footer-view></footer-view>
    </div>
</template>

<script>
/* eslint-disable */
import Header from './components/Header';
import Footer from './components/Footer';
export default {
    name: 'App',
    components: {
        'header-view': Header,
        'footer-view': Footer
    }
};
</script>

<style lang="scss" scoped>
    @import "styles/main";
</style>
