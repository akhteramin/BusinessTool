<template>
    <div class="hello-5">
        <footer>
            <div class="container">
                <div class="footerContent preFooter footerTop">
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled list-inline">
                                <li><a ui-sref="public.footer.about-us">About iPay</a></li>
                                <li><a ui-sref="public.footer.fees">Fees</a></li>
                                <li><a ui-sref="public.footer.mobile">Apps</a></li>
                                <li><a ui-sref="public.footer.help">Help</a></li>
                                <li><a href="https://www.ipay.com.bd/career" target="_blank" rel="noopener">Jobs</a></li>
                                <li><a ui-sref="public.footer.contact-us">Contacts</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 socialMedia">
                            <ul class="list-unstyled list-inline text-right">
                                <li><a href="https://www.facebook.com/iPayBangladesh" target="_blank" rel="noopener" aria-label="ipay facebook">
                            <span class="fa-stack">
                              <i class="fa fa-circle-thin fa-stack-2x"></i>
                              <i class="fa fa-facebook fa-stack-1x"></i>
                            </span></a></li>
                                <li><a href="https://www.linkedin.com/company/ipaybangladesh" target="_blank" rel="noopener" aria-label="ipay linkedin">
                            <span class="fa-stack">
                              <i class="fa fa-circle-thin fa-stack-2x"></i>
                              <i class="fa fa-linkedin fa-stack-1x"></i>
                            </span></a></li>
                                <li><a href="https://twitter.com/iPayBangladesh" target="_blank" rel="noopener" aria-label="ipay twitter">
                            <span class="fa-stack">
                              <i class="fa fa-circle-thin fa-stack-2x"></i>
                              <i class="fa fa-twitter fa-stack-1x"></i>
                            </span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="footerBottom footerMenu">
                    <div class="row">
                        <div class="col-md-8">
                            <ul class="list-unstyled list-inline" data-ng-controller="TranslationCtrl as self">
                                <li><a ui-sref="public.footer.privacy-policy">Privacy</a></li>
                                <li><a ui-sref="public.footer.terms-condition">Terms</a></li>
                                <li><a ui-sref="public.footer.bug-bounty">Bug Bounty</a></li>
                                <li><span style="margin-right: 10px;border-right: 1px solid #FFFFFF; opacity: 0.3;"></span></li>
                                <li><a data-ng-click="self.selectLanguage('en')"> English </a></li>
                                <li><a data-ng-click="self.selectLanguage('bn')"> বাংলা </a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-unstyled list-inline text-right othersMenu">
                                <li class="icon">
                                    <a href="https://itunes.apple.com/us/app/ipay-by-ipay-systems-ltd./id1108322661?ls=1&mt=8"
                                       target="_blank" rel="noopener">
                                        <img src="../assets/mobile/apple-store-badge.sm.png" alt="Apple Store">
                                    </a>
                                </li>
                                <li class="icon">
                                    <a href="https://play.google.com/store/apps/details?id=bd.com.ipay.android"
                                       target="_blank" rel="noopener">
                                        <img src="../assets/mobile/google-play-badge.sm.png" alt="Google Play">
                                    </a>
                                </li>
                                <li class="icon">
                                    <a href="https://ssl.comodo.com/ev-ssl-certificates.php" target="_blank" rel="noopener">
                                        <img src="https://ssl.comodo.com/images/comodo_secure_seal_76x26_transp.png"
                                             alt="EV SSL Certificate" width="76" height="26"
                                             style="border: 0px;">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Footer',
    data() {
        return {
            msg: 'Common Footer'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
