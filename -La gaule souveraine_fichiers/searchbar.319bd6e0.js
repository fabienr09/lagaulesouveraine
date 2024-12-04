"use strict";var storefront;(self.webpackChunkstorefront=self.webpackChunkstorefront||[]).push([[130],{3718:(e,t,a)=>{a.d(t,{default:()=>b});const s=function(){function e(t){this.buttonId="",this.buttonIcon=null,e.buttonElement=document.getElementById(t),e.buttonElement&&(this.buttonId=t,this.buttonIcon=e.buttonElement.querySelector("i"),e.buttonElement.addEventListener("click",this.handleClick.bind(this)))}return e.prototype.handleClick=function(){var e=new CustomEvent("manageSearchbar",{detail:{id:this.buttonId}});document.dispatchEvent(e)},e}();var n={MOBILE:{BUTTON:"searchbarBtnMobile",BUTTON_CLOSE:"searchbarBtnMobileClose",WRAPPER:"searchbarMobileWrapper"},DESKTOP:{BUTTON:"searchbarBtnDesktop",WRAPPER:"searchbarDesktopWrapper"}},r="headerContainer",i="navWrapper",o="os-theme-header",c="searchResultsMobile",h="searchResultsDesktop",l="search_values",u=function(){function e(){this.searchbarButtonMobile=null,this.searchbarButtonMobileClose=null,this.searchbarMobile=document.getElementById(n.MOBILE.WRAPPER),this.searchbarInputMobile=null,this.searchbarInputMobileSubmit=null,this.searchbarButtonDesktop=null,this.searchbarDesktop=document.getElementById(n.DESKTOP.WRAPPER),this.searchbarInputDesktop=null,this.searchbarInputDesktopSubmit=null,this.navigation=document.getElementById(i),this.header=document.getElementById(o),this.container=document.getElementById(r),this.manageSearchbarListener=null,this.init()}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.showMobileSearchbar=function(e,t){e.classList.remove("is-hidden"),t.focus()},e.prototype.hideMobileSearchbar=function(t,a){var s;a.value="",t.classList.add("is-hidden"),e.hideDropdown(e.searchResultsMobile),null===(s=this.header)||void 0===s||s.classList.remove("is-searchbar-active")},e.prototype.showDesktopSearchbar=function(t){this.container&&e.searchResultsDesktop&&(t.style.height=this.container.getBoundingClientRect().height>0?"".concat(this.container.getBoundingClientRect().height,"px"):"auto",e.searchResultsDesktop.style.top="calc(50% + 25px)"),t.classList.remove("is-hidden"),this.searchbarButtonDesktop&&this.searchbarButtonDesktop.buttonIcon&&this.searchbarInputDesktop&&this.header&&(this.searchbarButtonDesktop.buttonIcon.classList.replace("icon-search","icon-close"),this.header.classList.add("is-searchbar-active"),this.searchbarInputDesktop.focus())},e.prototype.hideDesktopSearchbar=function(t,a){var s;t.classList.add("is-hidden"),a.value="",e.hideDropdown(e.searchResultsDesktop),this.searchbarButtonDesktop&&this.searchbarButtonDesktop.buttonIcon&&this.header&&this.searchbarButtonDesktop.buttonIcon.classList.replace("icon-close","icon-search"),null===(s=this.header)||void 0===s||s.classList.remove("is-searchbar-active");var n=new Event("hideSearchbar",{bubbles:!0});window.dispatchEvent(n)},e.manageStorage=function(e){var t=e.target,a=[];localStorage.getItem(l)?((a=JSON.parse(localStorage.getItem(l))).length<3||a.pop(),a.unshift(t.value),localStorage.setItem(l,JSON.stringify(a))):(a.push(t.value),localStorage.setItem(l,JSON.stringify(a)))},e.buildDropdown=function(e,t){if(t&&t.classList.contains("is-hidden")){var a=t.querySelector("ul");e.map((function(e){var t=document.createElement("li");t.appendChild(document.createTextNode(e)),a.appendChild(t)})),t.classList.remove("is-hidden")}},e.hideDropdown=function(e){if(e){e.innerHTML="";var t=document.createElement("ul");e.appendChild(t),e.classList.add("is-hidden")}},e.isValueValid=function(e){return e.match(/^[^\s]+(\s+[^\s]+)*$/)},e.manageInput=function(t,a){var s=t.target.value.trim();if(""===s)e.hideDropdown(a);else if(localStorage.getItem(l)){var n=JSON.parse(localStorage.getItem(l));e.buildDropdown(n,a)}if("Enter"===t.key&&e.isValueValid(s)){e.manageStorage(t),e.hideDropdown(a);var r=new Event("search",{bubbles:!0});window.dispatchEvent(r),window.location.href=e.buildSearchQuery("search",s)}},e.buildSearchQuery=function(e,t){var a=window.location.search,s=new URLSearchParams(a);return s.set("search",t),"/".concat(e,"?").concat(s)},e.handleUIAction=function(t,a,s){t.addEventListener("keyup",(function(t){e.manageInput(t,a)})),a.addEventListener("click",(function(t){var a=t.target.innerText.trim(),s=new Event("search",{bubbles:!0});window.dispatchEvent(s),window.location.href=e.buildSearchQuery("search",a)})),s.addEventListener("click",(function(){var a=t.value.trim();if(t.value.length&&e.isValueValid(a)){var s=new Event("search",{bubbles:!0});window.dispatchEvent(s),window.location.href=e.buildSearchQuery("search",a)}}))},e.prototype.bindUiActions=function(){this.searchbarInputMobile&&e.searchResultsMobile&&this.searchbarInputMobileSubmit&&e.handleUIAction(this.searchbarInputMobile,e.searchResultsMobile,this.searchbarInputMobileSubmit),this.searchbarInputDesktop&&e.searchResultsDesktop&&this.searchbarInputDesktopSubmit&&e.handleUIAction(this.searchbarInputDesktop,e.searchResultsDesktop,this.searchbarInputDesktopSubmit)},e.prototype.init=function(){var t=this;this.searchbarButtonDesktop=new s(n.DESKTOP.BUTTON),this.searchbarButtonMobile=new s(n.MOBILE.BUTTON),this.searchbarButtonMobileClose=new s(n.MOBILE.BUTTON_CLOSE),this.header=document.getElementById(o),this.container=document.getElementById(r),this.searchbarMobile=document.getElementById(n.MOBILE.WRAPPER),this.searchbarDesktop=document.getElementById(n.DESKTOP.WRAPPER),e.searchResultsMobile=document.getElementById(c),e.searchResultsDesktop=document.getElementById(h),this.searchbarMobile&&(this.searchbarInputMobile=this.searchbarMobile.querySelector("input"),this.searchbarInputMobileSubmit=this.searchbarMobile.querySelector("#searchbarSubmitIcon")),this.searchbarDesktop&&(this.searchbarInputDesktop=this.searchbarDesktop.querySelector("input"),this.searchbarInputDesktopSubmit=this.searchbarDesktop.querySelector("#searchbarDesktopSubmitIcon")),this.manageSearchbarListener&&document.removeEventListener("manageSearchbar",this.manageSearchbarListener),this.manageSearchbarListener=function(a){var s;a.detail.id===n.MOBILE.BUTTON?e.showMobileSearchbar(t.searchbarMobile,t.searchbarInputMobile):a.detail.id===n.MOBILE.BUTTON_CLOSE?t.hideMobileSearchbar(t.searchbarMobile,t.searchbarInputMobile):(null===(s=t.searchbarDesktop)||void 0===s?void 0:s.classList.contains("is-hidden"))?t.showDesktopSearchbar(t.searchbarDesktop):t.hideDesktopSearchbar(t.searchbarDesktop,t.searchbarInputDesktop)},document.addEventListener("manageSearchbar",this.manageSearchbarListener),this.bindUiActions()},e.searchResultsMobile=document.getElementById(c),e.searchResultsDesktop=document.getElementById(h),e}();const b=u.getInstance()}},e=>{var t,a=(t=3718,e(e.s=t));(storefront=void 0===storefront?{}:storefront).searchbar=a.default}]);