<template>
    <div class="general-header">
        <header>
            <div class="container">
                <div class="header clearfix">
                    <nav>
                        <ul class="nav nav-pills pull-right">
                            <li><a href="https://www.ipay.com.bd/login" class="ipay-global-btn btn-primary">LOG IN</a></li>
                            <li><a href="https://www.ipay.com.bd/signup" class="ipay-global-btn btn-default">SIGN UP</a></li>
                        </ul>
                    </nav>
                    <div class="logo">
                        <router-link to="/">
                            <img src="../assets/logo.png" class="img-responsive" alt="iPay Logo"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Header',
    data() {
        return {
            msg: 'Common Header'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
