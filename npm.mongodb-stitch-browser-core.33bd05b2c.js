(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+R2d":function(t,e,r){"use strict";var n,o,i=r("6Glz"),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=function(t){function e(e,r){return t.call(this,e,r)||this}return s(e,t),e.prototype.createApiKey=function(e){return t.prototype.createApiKey.call(this,e)},e.prototype.fetchApiKey=function(e){return t.prototype.fetchApiKey.call(this,e)},e.prototype.fetchApiKeys=function(){return t.prototype.fetchApiKeys.call(this)},e.prototype.deleteApiKey=function(e){return t.prototype.deleteApiKey.call(this,e)},e.prototype.enableApiKey=function(e){return t.prototype.enableApiKey.call(this,e)},e.prototype.disableApiKey=function(e){return t.prototype.disableApiKey.call(this,e)},e}(i.l);(o||(o={})).factory=new(function(){function t(){}return t.prototype.getClient=function(t,e,r){return new a(t,r)},t}());var c,u=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),p=function(t){function e(e,r){return t.call(this,i.D.DEFAULT_NAME,e,r)||this}return u(e,t),e.prototype.registerWithEmail=function(e,r){return t.prototype.registerWithEmailInternal.call(this,e,r)},e.prototype.confirmUser=function(e,r){return t.prototype.confirmUserInternal.call(this,e,r)},e.prototype.resendConfirmationEmail=function(e){return t.prototype.resendConfirmationEmailInternal.call(this,e)},e.prototype.resetPassword=function(e,r,n){return t.prototype.resetPasswordInternal.call(this,e,r,n)},e.prototype.sendResetPasswordEmail=function(e){return t.prototype.sendResetPasswordEmailInternal.call(this,e)},e.prototype.callResetPasswordFunction=function(e,r,n){return t.prototype.callResetPasswordFunctionInternal.call(this,e,r,n)},e}(i.m);(c||(c={})).factory=new(function(){function t(){}return t.prototype.getClient=function(t,e,r){return new p(e,r)},t}());var h={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(h.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(t){return t&&l.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function y(t){return"string"!=typeof t&&(t=String(t)),t}function v(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return h.iterable&&(e[Symbol.iterator]=function(){return e}),e}function b(t){this.map={},t instanceof b?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function w(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function g(t){var e=new FileReader,r=m(e);return e.readAsArrayBuffer(t),r}function A(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:h.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:h.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:h.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():h.arrayBuffer&&h.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=A(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):h.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||d(t))?this._bodyArrayBuffer=A(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):h.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},h.blob&&(this.blob=function(){var t=w(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var t,e,r,n=w(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=m(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},h.formData&&(this.formData=function(){return this.text().then(U)}),this.json=function(){return this.text().then(JSON.parse)},this}b.prototype.append=function(t,e){t=f(t),e=y(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},b.prototype.delete=function(t){delete this.map[f(t)]},b.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},b.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},b.prototype.set=function(t,e){this.map[f(t)]=y(e)},b.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},b.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),v(t)},b.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),v(t)},b.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),v(t)},h.iterable&&(b.prototype[Symbol.iterator]=b.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function R(t,e){var r,n,o=(e=e||{}).body;if(t instanceof R){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new b(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new b(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),E.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function U(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function O(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new b(e.headers),this.url=e.url||"",this._initBody(t)}R.prototype.clone=function(){return new R(this,{body:this._bodyInit})},_.call(R.prototype),_.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},O.error=function(){var t=new O(null,{status:0,statusText:""});return t.type="error",t};var P=[301,302,303,307,308];O.redirect=function(t,e){if(-1===P.indexOf(e))throw new RangeError("Invalid status code");return new O(null,{status:e,headers:{location:t}})};var I=self.DOMException;try{new I}catch(t){(I=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),I.prototype.constructor=I}function S(t,e){return new Promise((function(r,n){var o=new R(t,e);if(o.signal&&o.signal.aborted)return n(new I("Aborted","AbortError"));var i=new XMLHttpRequest;function s(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new b,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new O(o,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new I("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&h.blob&&(i.responseType="blob"),o.headers.forEach((function(t,e){i.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",s),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",s)}),i.send(void 0===o._bodyInit?null:o._bodyInit)}))}S.polyfill=!0,self.fetch||(self.fetch=S,self.Headers=b,self.Request=R,self.Response=O);var C,j=function(){function t(){}return t.prototype.roundTrip=function(t){var e=S(t.url,{body:t.body,headers:t.headers,method:t.method,mode:"cors"}),r=e.then((function(t){return t.text()}));return Promise.all([e,r]).then((function(t){var e=t[0],r=t[1],n={};return e.headers.forEach((function(t,e){n[e]=t})),new i.s(n,e.status,r)}))},t.prototype.stream=function(t,e,r){throw void 0===e&&(e=!0),new i.z(i.A.StreamingNotSupported)},t}(),T=function(){function t(t){this.suiteName=t}return t.prototype.get=function(t){return localStorage.getItem(this.getKey(t))},t.prototype.set=function(t,e){localStorage.setItem(this.getKey(t),e)},t.prototype.remove=function(t){localStorage.removeItem(this.getKey(t))},t.prototype.getKey=function(t){return"__stitch.client."+this.suiteName+"."+t},t}(),L=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),k=function(t){function e(e,r,n,o){var i=t.call(this,o)||this;return i.evtSrc=e,i.onOpenError=n,i.openedOnce=!1,i.evtSrc.onopen=function(t){r(i),i.openedOnce=!0},i.reset(),i}return L(e,t),e.prototype.open=function(){if(this.closed)throw new i.z(i.A.StreamClosed)},e.prototype.afterClose=function(){this.evtSrc.close()},e.prototype.onReconnect=function(t){this.evtSrc=t.evtSrc,this.reset(),this.events=t.events.concat(this.events)},e.prototype.reset=function(){var t=this;this.evtSrc.onmessage=function(e){t.events.push(new i.o(i.o.MESSAGE_EVENT,e.data)),t.poll()},this.evtSrc.onerror=function(e){return e instanceof MessageEvent?(t.lastErr=e.data,t.events.push(new i.o(i.C.ERROR_EVENT_NAME,t.lastErr)),t.close(),void t.poll()):t.openedOnce?(t.evtSrc.close(),void t.reconnect()):(t.close(),void t.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details")))}},e}(i.f),B=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),N=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return B(e,t),e.prototype.stream=function(t,e,r){void 0===e&&(e=!0);var n=N({},t.headers);return n[i.r.ACCEPT]=i.g.TEXT_EVENT_STREAM,n[i.r.CONTENT_TYPE]=i.g.TEXT_EVENT_STREAM,S(t.url+"&stitch_validate=true",{body:t.body,headers:n,method:t.method,mode:"cors"}).then((function(e){var n={};return e.headers.forEach((function(t,e){n[e]=t})),e.status<200||e.status>=300?e.text().then((function(t){return Object(i.F)(new i.s(n,e.status,t))})):new Promise((function(e,n){return new k(new EventSource(t.url),(function(t){return e(t)}),(function(t){return n(t)}),r?function(){return r().then((function(t){return t}))}:void 0)}))}))},e}(j),F=function(){function t(t){this.proxy=t}return t.prototype.callFunction=function(t,e,r){return this.proxy.callFunction(t,e,r)},t.prototype.streamFunction=function(t,e,r){return this.proxy.streamFunction(t,e,r)},t}(),W=r("SjWX");!function(t){t.StitchError="_stitch_error",t.State="_stitch_state",t.UserAuth="_stitch_ua",t.LinkUser="_stitch_link_user",t.StitchLink="_stitch_link",t.ClientAppId="_stitch_client_app_id"}(C||(C={}));var V,D=C;!function(t){t.ProviderName="_stitch_redirect_provider_name",t.ProviderType="_stitch_redirect_provider_type",t.State="_stitch_redirect_state"}(V||(V={}));var K=V,z=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),M=function(t){function e(e){return t.call(this,e)||this}return z(e,t),e}(i.B),q=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),H=function(t){function e(e,r,n,o,i,s,a){var c=t.call(this,e,r,n,o,i,s)||this;return c.auth=a,c}return q(e,t),e.prototype.linkWithCredential=function(t){return this.auth.linkWithCredential(this,t)},e.prototype.linkUserWithRedirect=function(t){return this.auth.linkWithRedirectInternal(this,t)},e}(i.k),G=function(){function t(t){this.auth=t}return t.prototype.makeUser=function(t,e,r,n,o,i){return new H(t,e,r,n,o,i,this.auth)},t}(),X=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),J=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",$=function(t){function e(e,r,n,o,i){void 0===i&&(i=window);var s=t.call(this,e,r,n)||this;return s.browserAuthRoutes=r,s.authStorage=n,s.appInfo=o,s.jsdomWindow=i,s.listeners=new Set,s.synchronousListeners=new Set,s}return X(e,t),Object.defineProperty(e.prototype,"userFactory",{get:function(){return new G(this)},enumerable:!0,configurable:!0}),e.prototype.getProviderClient=function(t,e){return function(t){return void 0!==t.getClient}(t)?t.getClient(this,this.requestClient,this.authRoutes):t.getNamedClient(e,this.requestClient,this.authRoutes)},e.prototype.loginWithCredential=function(e){return t.prototype.loginWithCredentialInternal.call(this,e)},e.prototype.loginWithRedirect=function(t){var e=this,r=this.prepareRedirect(t),n=r.redirectUrl,o=r.state;this.requestClient.getBaseURL().then((function(r){e.jsdomWindow.location.replace(r+e.browserAuthRoutes.getAuthProviderRedirectRoute(t,n,o,e.deviceInfo))}))},e.prototype.linkWithRedirectInternal=function(t,r){var n=this;if(void 0!==this.user&&t.id!==this.user.id)return Promise.reject(new i.z(i.A.UserNoLongerValid));var o=this.prepareRedirect(r),s=o.redirectUrl,a=o.state;return this.requestClient.getBaseURL().then((function(t){var o=t+n.browserAuthRoutes.getAuthProviderLinkRedirectRoute(r,s,a,n.deviceInfo);return(e.injectedFetch?e.injectedFetch:fetch)(new Request(o,{credentials:"include",headers:{Authorization:"Bearer "+n.authInfo.accessToken},mode:"cors"}))})).then((function(t){n.jsdomWindow.location.replace(t.headers.get("X-Stitch-Location"))}))},e.prototype.hasRedirectResult=function(){var t=!1;try{return t=this.parseRedirect().isValid}catch(t){return!1}finally{t||this.cleanupRedirect()}},e.prototype.handleRedirectResult=function(){try{var t=this.authStorage.get(K.ProviderName),e=this.authStorage.get(K.ProviderType),r=this.parseRedirect();return this.loginWithCredentialInternal(new i.y(this.processRedirectResult(r),e,t,r.asLink)).then((function(t){return t}))}catch(t){return Promise.reject(t)}},e.prototype.linkWithCredential=function(e,r){return t.prototype.linkUserWithCredentialInternal.call(this,e,r)},e.prototype.logout=function(){return arguments.length>0?Promise.reject(new i.z(i.A.UnexpectedArguments)):t.prototype.logoutInternal.call(this)},e.prototype.logoutUserWithId=function(e){return t.prototype.logoutUserWithIdInternal.call(this,e)},e.prototype.removeUser=function(){return arguments.length>0?Promise.reject(new i.z(i.A.UnexpectedArguments)):t.prototype.removeUserInternal.call(this)},e.prototype.removeUserWithId=function(e){return t.prototype.removeUserWithIdInternal.call(this,e)},Object.defineProperty(e.prototype,"deviceInfo",{get:function(){var t={};this.hasDeviceId&&(t[i.n.DEVICE_ID]=this.deviceId),void 0!==this.appInfo.localAppName&&(t[i.n.APP_ID]=this.appInfo.localAppName),void 0!==this.appInfo.localAppVersion&&(t[i.n.APP_VERSION]=this.appInfo.localAppVersion);var e=Object(W.detect)();return e?(t[i.n.PLATFORM]=e.name,t[i.n.PLATFORM_VERSION]=e.version):(t[i.n.PLATFORM]="web",t[i.n.PLATFORM_VERSION]="0.0.0"),t[i.n.SDK_VERSION]="4.7.1",t},enumerable:!0,configurable:!0}),e.prototype.addAuthListener=function(t){this.listeners.add(t),this.onAuthEvent(t),this.dispatchAuthEvent({kind:i.c.ListenerRegistered})},e.prototype.addSynchronousAuthListener=function(t){this.listeners.add(t),this.onAuthEvent(t),this.dispatchAuthEvent({kind:i.c.ListenerRegistered})},e.prototype.removeAuthListener=function(t){this.listeners.delete(t)},e.prototype.onAuthEvent=function(t){var e=this;if(t)new Promise((function(r){t.onAuthEvent&&t.onAuthEvent(e),r(void 0)}));else this.listeners.forEach((function(t){e.onAuthEvent(t)}))},e.prototype.dispatchAuthEvent=function(t){var e=this;switch(t.kind){case i.c.ActiveUserChanged:this.dispatchBlockToListeners((function(r){r.onActiveUserChanged&&r.onActiveUserChanged(e,t.currentActiveUser,t.previousActiveUser)}));break;case i.c.ListenerRegistered:this.dispatchBlockToListeners((function(t){t.onListenerRegistered&&t.onListenerRegistered(e)}));break;case i.c.UserAdded:this.dispatchBlockToListeners((function(r){r.onUserAdded&&r.onUserAdded(e,t.addedUser)}));break;case i.c.UserLinked:this.dispatchBlockToListeners((function(r){r.onUserLinked&&r.onUserLinked(e,t.linkedUser)}));break;case i.c.UserLoggedIn:this.dispatchBlockToListeners((function(r){r.onUserLoggedIn&&r.onUserLoggedIn(e,t.loggedInUser)}));break;case i.c.UserLoggedOut:this.dispatchBlockToListeners((function(r){r.onUserLoggedOut&&r.onUserLoggedOut(e,t.loggedOutUser)}));break;case i.c.UserRemoved:this.dispatchBlockToListeners((function(r){r.onUserRemoved&&r.onUserRemoved(e,t.removedUser)}));break;default:return this.assertNever(t)}},e.prototype.assertNever=function(t){throw new Error("unexpected object: "+t)},e.prototype.dispatchBlockToListeners=function(t){this.synchronousListeners.forEach(t),this.listeners.forEach((function(e){new Promise((function(r){t(e),r(void 0)}))}))},e.prototype.cleanupRedirect=function(){this.jsdomWindow.history.replaceState(null,"",this.pageRootUrl()),this.authStorage.remove(K.State),this.authStorage.remove(K.ProviderName),this.authStorage.remove(K.ProviderType)},e.prototype.parseRedirect=function(){if(void 0===this.jsdomWindow)throw new M("running in a non-browser environment");if(!this.jsdomWindow.location||!this.jsdomWindow.location.hash)throw new M("window location hash was undefined");var t=this.authStorage.get(K.State);return function(t,e,r){var n=t.split("&"),o=new Q;return n.forEach((function(t){var n=t.split("=");switch(decodeURIComponent(n[0])){case D.StitchError:o.lastError=decodeURIComponent(n[1]);break;case D.UserAuth:try{o.authInfo=function(t){var e=t.split("$");if(4!==e.length)throw new M("invalid user auth data provided while marshalling user authentication data: "+t);var r=J(e,4),n=r[0],o=r[1],s=r[2],a=r[3];return new i.d(s,a,n,o)}(decodeURIComponent(n[1]))}catch(t){o.lastError=t}break;case D.StitchLink:"ok"===n[1]&&(o.asLink=!0);break;case D.State:var s=decodeURIComponent(n[1]);e===s&&(o.stateValid=!0);break;case D.ClientAppId:var a=decodeURIComponent(n[1]);r===a&&(o.clientAppIdValid=!0)}})),o}(this.jsdomWindow.location.hash.substring(1),t,this.appInfo.clientAppId)},e.prototype.processRedirectResult=function(t){try{if(!t.isValid)throw new M("invalid redirect result");if(t.lastError)throw new M("error handling redirect: "+t.lastError);if(!t.authInfo)throw new M("no user auth value was found: it could not be decoded from fragment")}catch(t){throw t}finally{this.cleanupRedirect()}return t.authInfo},e.prototype.prepareRedirect=function(t){this.authStorage.set(K.ProviderName,t.providerName),this.authStorage.set(K.ProviderType,t.providerType);var e=t.redirectUrl;void 0===e&&(e=this.pageRootUrl());var r=function(){for(var t="",e=0;e<64;++e)t+=Y.charAt(Math.floor(Math.random()*Y.length));return t}();return this.authStorage.set(K.State,r),{redirectUrl:e,state:r}},e.prototype.pageRootUrl=function(){return[this.jsdomWindow.location.protocol,"//",this.jsdomWindow.location.host,this.jsdomWindow.location.pathname].join("")},e}(i.i);var Q=function(){function t(){this.stateValid=!1,this.clientAppIdValid=!1,this.asLink=!1}return Object.defineProperty(t.prototype,"isValid",{get:function(){return this.stateValid&&this.clientAppIdValid},enumerable:!0,configurable:!0}),t}();var Z=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),tt=function(t){function e(e){return t.call(this,e)||this}return Z(e,t),e.prototype.getAuthProviderRedirectRoute=function(t,e,r,n){return this.getAuthProviderLoginRoute(t.providerName)+"?redirect="+encodeURI(e)+"&state="+r+"&device="+this.uriEncodeObject(n)},e.prototype.getAuthProviderLinkRedirectRoute=function(t,e,r,n){return this.getAuthProviderLoginRoute(t.providerName)+"?redirect="+encodeURI(e)+"&state="+r+"&device="+this.uriEncodeObject(n)+"&link=true&providerRedirectHeader=true"},e.prototype.uriEncodeObject=function(t){return encodeURIComponent(Object(i.E)(JSON.stringify(t)))},e}(i.t),et=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),rt=function(t){function e(e){var r=t.call(this,e)||this;return r.authRoutes=new tt(e),r}return et(e,t),e}(i.x),nt=function(){function t(t,e){this.info=new i.v(t,e.dataDirectory,e.localAppName,e.localAppVersion),this.routes=new rt(this.info.clientAppId);var r=new i.w(t,e.baseUrl,e.transport);this.auth=new $(r,this.routes.authRoutes,e.storage,this.info),this.coreClient=new i.h(this.auth,this.routes),this.serviceClients=[],this.auth.addSynchronousAuthListener(this)}return t.prototype.getServiceClient=function(t,e){if(function(t){return void 0!==t.getClient}(t)){var r=new i.j(this.auth,this.routes.serviceRoutes,"");return this.bindServiceClient(r),t.getClient(r,this.info)}r=new i.j(this.auth,this.routes.serviceRoutes,e);return this.bindServiceClient(r),t.getNamedClient(r,this.info)},t.prototype.getGeneralServiceClient=function(t){var e=new i.j(this.auth,this.routes.serviceRoutes,t);return this.bindServiceClient(e),new F(e)},t.prototype.callFunction=function(t,e){return this.coreClient.callFunction(t,e)},t.prototype.onActiveUserChanged=function(t,e,r){this.onRebindEvent(new i.e({currentActiveUser:e,kind:i.c.ActiveUserChanged,previousActiveUser:r}))},t.prototype.bindServiceClient=function(t){this.serviceClients.push(t)},t.prototype.onRebindEvent=function(t){this.serviceClients.forEach((function(e){e.onRebindEvent(t)}))},t}();var ot={},it=function(){function t(){}return Object.defineProperty(t,"defaultAppClient",{get:function(){if(void 0===t.defaultClientAppId)throw new Error("default app client has not yet been initialized/set");return ot[t.defaultClientAppId]},enumerable:!0,configurable:!0}),t.getAppClient=function(t){if(void 0===ot[t])throw new Error("client for app '"+t+"' has not yet been initialized");return ot[t]},t.hasAppClient=function(t){return void 0!==ot[t]},t.initializeDefaultAppClient=function(e,r){if(void 0===r&&(r=(new i.u.Builder).build()),void 0===e||""===e)throw new Error("clientAppId must be set to a non-empty string");if(void 0!==t.defaultClientAppId)throw new Error("default app can only be set once; currently set to '"+t.defaultClientAppId+"'");var n=t.initializeAppClient(e,r);return t.defaultClientAppId=e,n},t.initializeAppClient=function(e,r){if(void 0===r&&(r=(new i.u.Builder).build()),void 0===e||""===e)throw new Error("clientAppId must be set to a non-empty string");if(void 0!==ot[e])throw new Error("client for app '"+e+"' has already been initialized");var n=r.builder?r.builder():new i.u.Builder(r);void 0===n.storage&&n.withStorage(new T(e)),void 0===n.transport&&(window.EventSource?n.withTransport(new x):n.withTransport(new j)),void 0!==n.baseUrl&&""!==n.baseUrl||n.withBaseUrl("https://stitch.mongodb.com"),void 0!==n.localAppName&&""!==n.localAppName||n.withLocalAppName(t.localAppName),void 0!==n.localAppVersion&&""!==n.localAppVersion||n.withLocalAppVersion(t.localAppVersion);var o=new nt(e,n.build());return ot[e]=o,o},t.clearApps=function(){ot={}},t}();r.d(e,"a",(function(){return i.a})),r.d(e,"b",(function(){return it}))}}]);