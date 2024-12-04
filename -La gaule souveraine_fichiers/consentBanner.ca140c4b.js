"use strict";var storefront;(self.webpackChunkstorefront=self.webpackChunkstorefront||[]).push([[357],{2676:(e,t,n)=>{n.d(t,{default:()=>y});var o="cookie-banner",s="cookie-settings",i="cookie-banner-accept-button",r="cookie-banner-settings-button",a="cookie-settings-save-button",l="togglePerformance",c="togglePerformanceLabelOn",d="togglePerformanceLabelOff",p="performance_cookies",h=n(1083);const u=function(){function e(){var e;this.apiUrl=null===appInfo||void 0===appInfo?void 0:appInfo.checkoutApiUrl,this.shopId=null===appInfo||void 0===appInfo?void 0:appInfo.shopId,this.userKey=storefront&&storefront.hasOwnProperty("shared")?null===(e=storefront.shared)||void 0===e?void 0:e.userKey:null===appInfo||void 0===appInfo?void 0:appInfo.userKey}return e.getInstance=function(){return this.instance?this.instance:new this},e.prototype.getCookieConsent=function(){return h.A.get("".concat(this.apiUrl,"/api/consent/").concat(this.shopId,"/").concat(this.userKey),{data:{}})},e.prototype.saveCookieConsent=function(e){var t={userKey:this.userKey,consents:e};return h.A.post("".concat(this.apiUrl,"/api/consent/").concat(this.shopId),t)},e}().getInstance();var f=o,g=s,m=i,C=r,E=a,k=l,v=c,b=d;const y=function(){function e(){this.bannerElement=null,this.settingsElement=null,this.bannerAcceptButtonElements=null,this.bannerSettingsButtonElement=null,this.settingsSaveButtonElement=null,this.performanceCookiesToggleElement=null,this.performanceCookiesToggleLabelOnElement=null,this.performanceCookiesToggleLabelOffElement=null,this.currentConsents=null,this.bannerAcceptButtonElements=document.getElementsByClassName(m),this.bannerSettingsButtonElement=document.getElementById(C),this.settingsSaveButtonElement=document.getElementById(E),this.init()}return e.prototype.init=function(){var e=this;this.performanceCookiesToggleElement=document.getElementById(k),this.bannerElement=document.getElementById(f),this.settingsElement=document.getElementById(g),this.performanceCookiesToggleLabelOnElement=document.getElementById(v),this.performanceCookiesToggleLabelOffElement=document.getElementById(b),this.bannerSettingsButtonElement&&this.bannerSettingsButtonElement.addEventListener("click",this.displayCookieSettings.bind(this)),this.settingsSaveButtonElement&&this.settingsSaveButtonElement.addEventListener("click",this.handleSaveButtonClick.bind(this)),this.bannerAcceptButtonElements&&Array.prototype.map.call(this.bannerAcceptButtonElements,(function(t){return t.addEventListener("click",e.handleAcceptButtonClick.bind(e))})),this.performanceCookiesToggleElement&&this.performanceCookiesToggleElement.addEventListener("change",(function(t){return e.togglePerformanceCookies(t)})),u.getCookieConsent().then((function(t){t.data&&(e.currentConsents=t.data,e.dispatchCookieConsentInitializedEvent(),t.data.consents&&Object.prototype.hasOwnProperty.call(e.currentConsents.consents,p)&&e.toggleOnOffLabel(e.currentConsents.consents[p])),!t.data.exists&&e.bannerElement&&(e.bannerElement.classList.add("active"),e.toggleOnOffLabel(!1))}))},e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.togglePerformanceCookies=function(e){this.toggleOnOffLabel(e.target.checked)},e.prototype.setPerformanceCookies=function(e){var t,n=this;this.toggleOnOffLabel(e),this.updateAnalyticsConsentState(e),u.saveCookieConsent((t={},t[p]=e,t)).then((function(){n.currentConsents&&(n.currentConsents.consents[p]=e)})),this.dispatchUpdateConsentCookieEvent()},e.prototype.hideAll=function(){this.bannerElement&&this.settingsElement&&(this.settingsElement.classList.remove("active"),this.bannerElement.classList.remove("active"),window&&window.innerWidth<=576&&storefront&&storefront.hasOwnProperty("shared")&&void 0!==storefront.shared.enableBodyScrollbar&&storefront.shared.enableBodyScrollbar())},e.prototype.handleSaveButtonClick=function(){var e=this.performanceCookiesToggleElement;e&&(this.setPerformanceCookies(e.checked),this.hideAll())},e.prototype.handleAcceptButtonClick=function(){this.setPerformanceCookies(!0),this.hideAll()},e.prototype.displayCookieSettings=function(){this.bannerElement&&this.settingsElement&&this.performanceCookiesToggleElement&&(this.currentConsents&&Object.prototype.hasOwnProperty.call(this.currentConsents.consents,p)&&(this.performanceCookiesToggleElement.checked=this.currentConsents.consents[p]),this.bannerElement.classList.remove("active"),this.settingsElement.classList.add("active"),window&&window.innerWidth<=576&&storefront&&storefront.hasOwnProperty("shared")&&void 0!==storefront.shared.disableBodyScrollbar&&storefront.shared.disableBodyScrollbar())},e.prototype.dispatchUpdateConsentCookieEvent=function(){var e=new CustomEvent("updateCookieConsent");document.dispatchEvent(e)},e.prototype.dispatchCookieConsentInitializedEvent=function(){var e,t=null===(e=this.currentConsents)||void 0===e?void 0:e.consents[p],n=new CustomEvent("cookieConsentInitialized",{detail:t});document.dispatchEvent(n)},e.prototype.updateAnalyticsConsentState=function(e){"undefined"!=typeof gtag&&gtag("consent","update",{analytics_storage:e?"granted":"denied",ad_storage:e?"granted":"denied"}),"undefined"!=typeof pixel&&pixel.send("consent",e?"grant":"revoke")},e.prototype.toggleOnOffLabel=function(e){null!==this.performanceCookiesToggleLabelOnElement&&null!==this.performanceCookiesToggleLabelOffElement&&(e?(this.performanceCookiesToggleLabelOnElement.classList.remove("d-none"),this.performanceCookiesToggleLabelOffElement.classList.add("d-none")):(this.performanceCookiesToggleLabelOnElement.classList.add("d-none"),this.performanceCookiesToggleLabelOffElement.classList.remove("d-none")))},e.prototype.openCookiePreferenceBar=function(){this.displayCookieSettings()},e}().getInstance()}},e=>{e.O(0,[502],(()=>{return t=2676,e(e.s=t);var t}));var t=e.O();(storefront=void 0===storefront?{}:storefront).consentBanner=t.default}]);