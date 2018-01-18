<template>
    <div class="hello">
        <!-- Main Content -->
        <div class="mainContent site-wrapper">
            <div class="site-wrapper-inner">
                <!--welcome Screen-->
                <section class="welcomeScreen">
                    <div class="welcomeImage">
                        <img src="../assets/welcome/home-banner.jpg" alt="">
                    </div>
                    <div class="welcomeImage2">
                        <img src="../assets/welcome/home-banner-mobile.jpg" alt="">
                    </div>
                    <a href="/offer"><div class="promotional-offer-2">
                        <span>Special Offer:</span> Verified with iPay<br>Get <span class="amount">50tk</span> free iPay Balance.
                        <br>
                        <small>* for single device only</small>
                    </div></a>
                    <div class="welcomeContent text-center">
                        <h2>First Online Payment Platform in Bangladesh</h2>
                        <h3>Sign Up Now and Explore the Magic of iPay</h3>
                        <div class="buttonGroup"> <!-- desktop-only -->
                            <a data-ng-href="signup/personal"
                               class="ipay-global-btn btn-primary btn-lg">Sign Up for Personal Account</a>
                            <a data-ng-href="signup/business"
                               class="ipay-global-btn btn-default btn-lg">Sign Up for Business Account</a>
                        </div>
                    </div>
                    <div class="promotional-offer">
                        <a href="/offer"><img src="../assets/welcome/offer-50tk.png" alt="Special Offer"></a>
                    </div>
                </section>

                <!-- Secure Instant-payment -->
                <section class="secureInstantPayment">
                    <div class="container">
                        <div class="sectionHeader text-center">
                            <h2 class="headline-title-small-allcaps"> SECURE INSTANT PAYMENT</h2>
                            <p translate class="col-md-8 col-md-offset-2">We are the first online payment platform in Bangladesh. You will be able to exchange money with other iPay members and make payments for your purchases, utilities and other services in a cashless form.</p>
                        </div>
                        <div class="serviceType">
                            <div class="row">
                                <div class="col-md-4 serviceBlock">
                                    <div class="media-holder"><img
                                        src="../assets/welcome/send-money-icon.png" alt="Send Money"/></div>
                                    <div class="contentHolder">
                                        <h2>Send Money</h2>
                                        <p>You can send money from your iPay account to other members’ accounts.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 serviceBlock">
                                    <div class="media-holder"><img
                                        src="../assets/welcome/request-money-icon.png" alt="Request Money"/></div>
                                    <div class="contentHolder">
                                        <h2>Request Money</h2>
                                        <p>Running low balance in your iPay wallet? Request other members to transfer money to your iPay account.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 serviceBlock">
                                    <div class="media-holder"><img
                                        src="../assets/welcome/make-payment-icon.png" alt="Make Payment"/></div>
                                    <div class="contentHolder">
                                        <h2>Make Payment</h2>
                                        <p>Pay for goods through your iPay account to different business accounts registered in iPay platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Trusted best Partners -->
                <section class="trusted-partners">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2><span ng-bind-html="'Header' | translate"></span></h2>
                                <p class="col-md-8 col-md-offset-2">
                                    <span ng-bind-html="'Content' | translate"></span>
                                <div class="carousel slide" id="trusted-partners-carousel" data-ride="carousel">
                                    <!-- Indicators -->
                                    <ol class="carousel-indicators" style="bottom: -45px;">
                                        <li data-target="#trusted-partners-carousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#trusted-partners-carousel" data-slide-to="1"></li>
                                        <li data-target="#trusted-partners-carousel" data-slide-to="2"></li>
                                    </ol>

                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <ul class="list-unstyled list-inline item active">
                                            <li class="icon">
                                                <a href="https://sindabad.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/sindabad.png" alt="Sindabad">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://kiksha.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/kiksha.png" alt="Kiksha">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.priyo.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/priyo.png" alt="Priyo.com">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="http://www.agfood.com.bd" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/ag-food.png" alt="AG Food">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.othoba.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/othoba.com.png" alt="Othoba.com">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/BinniRestaurant" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/binni.png" alt="Binni Restaurant">
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled list-inline item ">
                                            <li class="icon">
                                                <a href="https://www.facebook.com/TheFumezbd" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/fumez.png" alt="Fumez BD">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="http://www.mybarcodecafe.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/barcode.png" alt="Barcode">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/digitalshopbd" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/digital-shop.png" alt="Digital Shop">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/kivahancafe" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/kivahan.png" alt="KIVA HAN">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.lerevecraze.com" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/le-reve.jpg" alt="Le Reve">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/IQLS.Inc" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/iq-lifestyle-inc.png" alt="IQLS.Inc">
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled list-inline item ">
                                            <li class="icon">
                                                <a href="https://www.facebook.com/FlavoursMusicCafe" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/flavours-music-cafe.png" alt="Flavours Music Cafe">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="http://www.fotocart.com.bd/" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/fotocart.png" alt="Foto Cart">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/terraceviewuttara" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/terrece.png" alt="Terrace View">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/travels-onlinebangladesh" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/travels-online.png" alt="travelsonline">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/Kabab-Palace-1088321284563945" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/kabab-palace.png" alt="Kabab Palace">
                                                </a>
                                            </li>
                                            <li class="icon">
                                                <a href="https://www.facebook.com/CombeDhaka" target="_blank" rel="noopener">
                                                    <img src="../assets/partners/combe-restaurant.png" alt="Combe Restaurant Dhaka">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Shopping Banner Section -->
                <section class="shoppingPromotion2">
                    <div class="shoppingPromotion-image">
                        <img src="../assets/welcome/shoppingBanner.jpg" alt="">
                    </div>
                    <div class="shoppingPromotion-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2>
                                        <span ng-bind-html="'WELCOME_PAGE_CONTENT_11' | translate"></span>
                                    </h2>
                                    <p>
                                        <span ng-bind-html="'WELCOME_PAGE_CONTENT_12' | translate"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Business Solution -->
                <section class="businessSolution">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2><span ng-bind-html="'WELCOME_PAGE_CONTENT_13' | translate"></span></h2>
                                <p class="col-md-8 col-md-offset-2"><span ng-bind-html="'WELCOME_PAGE_CONTENT_14' | translate"></span></p>
                                <a data-ng-href="signup/business"
                                   class="ipay-global-btn btn-brand-border btn-lg">
                                    <span ng-bind-html="'WELCOME_PAGE_button_15' | translate"></span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Hotjar Tracking Code for https://www.ipay.com.bd -->
        <!--<script src="js/hotjar.min.js"></script>-->

    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Welcome',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
