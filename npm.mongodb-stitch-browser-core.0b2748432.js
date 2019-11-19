(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "+R2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js + 77 modules
var esm = __webpack_require__("6Glz");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/facebook/FacebookRedirectCredential.js

var FacebookRedirectCredential_FacebookRedirectCredential = (function () {
    function FacebookRedirectCredential(redirectUrl, providerName, providerType) {
        if (providerName === void 0) { providerName = esm["p" /* FacebookAuthProvider */].DEFAULT_NAME; }
        if (providerType === void 0) { providerType = esm["p" /* FacebookAuthProvider */].TYPE; }
        this.redirectUrl = redirectUrl;
        this.providerName = providerName;
        this.providerType = providerType;
    }
    return FacebookRedirectCredential;
}());
/* harmony default export */ var facebook_FacebookRedirectCredential = (FacebookRedirectCredential_FacebookRedirectCredential);
//# sourceMappingURL=FacebookRedirectCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/google/GoogleRedirectCredential.js

var GoogleRedirectCredential_GoogleRedirectCredential = (function () {
    function GoogleRedirectCredential(redirectUrl, providerName, providerType) {
        if (providerName === void 0) { providerName = esm["q" /* GoogleAuthProvider */].DEFAULT_NAME; }
        if (providerType === void 0) { providerType = esm["q" /* GoogleAuthProvider */].TYPE; }
        this.redirectUrl = redirectUrl;
        this.providerName = providerName;
        this.providerType = providerType;
    }
    return GoogleRedirectCredential;
}());
/* harmony default export */ var google_GoogleRedirectCredential = (GoogleRedirectCredential_GoogleRedirectCredential);
//# sourceMappingURL=GoogleRedirectCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/internal/UserApiKeyAuthProviderClientImpl.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserApiKeyAuthProviderClientImpl = (function (_super) {
    __extends(UserApiKeyAuthProviderClientImpl, _super);
    function UserApiKeyAuthProviderClientImpl(requestClient, routes) {
        return _super.call(this, requestClient, routes) || this;
    }
    UserApiKeyAuthProviderClientImpl.prototype.createApiKey = function (name) {
        return _super.prototype.createApiKey.call(this, name);
    };
    UserApiKeyAuthProviderClientImpl.prototype.fetchApiKey = function (keyId) {
        return _super.prototype.fetchApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.fetchApiKeys = function () {
        return _super.prototype.fetchApiKeys.call(this);
    };
    UserApiKeyAuthProviderClientImpl.prototype.deleteApiKey = function (keyId) {
        return _super.prototype.deleteApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.enableApiKey = function (keyId) {
        return _super.prototype.enableApiKey.call(this, keyId);
    };
    UserApiKeyAuthProviderClientImpl.prototype.disableApiKey = function (keyId) {
        return _super.prototype.disableApiKey.call(this, keyId);
    };
    return UserApiKeyAuthProviderClientImpl;
}(esm["l" /* CoreUserApiKeyAuthProviderClient */]));
/* harmony default export */ var internal_UserApiKeyAuthProviderClientImpl = (UserApiKeyAuthProviderClientImpl);
//# sourceMappingURL=UserApiKeyAuthProviderClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userapikey/UserApiKeyAuthProviderClient.js

var UserApiKeyAuthProviderClient_UserApiKeyAuthProviderClient;
(function (UserApiKeyAuthProviderClient) {
    UserApiKeyAuthProviderClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getClient = function (authRequestClient, requestClient, routes) {
            return new internal_UserApiKeyAuthProviderClientImpl(authRequestClient, routes);
        };
        return class_1;
    }())();
})(UserApiKeyAuthProviderClient_UserApiKeyAuthProviderClient || (UserApiKeyAuthProviderClient_UserApiKeyAuthProviderClient = {}));
//# sourceMappingURL=UserApiKeyAuthProviderClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/internal/UserPasswordAuthProviderClientImpl.js
var UserPasswordAuthProviderClientImpl_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserPasswordAuthProviderClientImpl_UserPasswordAuthProviderClientImpl = (function (_super) {
    UserPasswordAuthProviderClientImpl_extends(UserPasswordAuthProviderClientImpl, _super);
    function UserPasswordAuthProviderClientImpl(requestClient, routes) {
        return _super.call(this, esm["D" /* UserPasswordAuthProvider */].DEFAULT_NAME, requestClient, routes) || this;
    }
    UserPasswordAuthProviderClientImpl.prototype.registerWithEmail = function (email, password) {
        return _super.prototype.registerWithEmailInternal.call(this, email, password);
    };
    UserPasswordAuthProviderClientImpl.prototype.confirmUser = function (token, tokenId) {
        return _super.prototype.confirmUserInternal.call(this, token, tokenId);
    };
    UserPasswordAuthProviderClientImpl.prototype.resendConfirmationEmail = function (email) {
        return _super.prototype.resendConfirmationEmailInternal.call(this, email);
    };
    UserPasswordAuthProviderClientImpl.prototype.resetPassword = function (token, tokenId, password) {
        return _super.prototype.resetPasswordInternal.call(this, token, tokenId, password);
    };
    UserPasswordAuthProviderClientImpl.prototype.sendResetPasswordEmail = function (email) {
        return _super.prototype.sendResetPasswordEmailInternal.call(this, email);
    };
    UserPasswordAuthProviderClientImpl.prototype.callResetPasswordFunction = function (email, password, args) {
        return _super.prototype.callResetPasswordFunctionInternal.call(this, email, password, args);
    };
    return UserPasswordAuthProviderClientImpl;
}(esm["m" /* CoreUserPassAuthProviderClient */]));
/* harmony default export */ var internal_UserPasswordAuthProviderClientImpl = (UserPasswordAuthProviderClientImpl_UserPasswordAuthProviderClientImpl);
//# sourceMappingURL=UserPasswordAuthProviderClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/providers/userpassword/UserPasswordAuthProviderClient.js

var UserPasswordAuthProviderClient_UserPasswordAuthProviderClient;
(function (UserPasswordAuthProviderClient) {
    UserPasswordAuthProviderClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getClient = function (authRequestClient, requestClient, routes) {
            return new internal_UserPasswordAuthProviderClientImpl(requestClient, routes);
        };
        return class_1;
    }())();
})(UserPasswordAuthProviderClient_UserPasswordAuthProviderClient || (UserPasswordAuthProviderClient_UserPasswordAuthProviderClient = {}));
//# sourceMappingURL=UserPasswordAuthProviderClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/node_modules/whatwg-fetch/fetch.js
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function fetch_Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof fetch_Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

fetch_Request.prototype.clone = function() {
  return new fetch_Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(fetch_Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch_fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new fetch_Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch_fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch_fetch
  self.Headers = Headers
  self.Request = fetch_Request
  self.Response = Response
}

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/BrowserFetchTransport.js


var BrowserFetchTransport_BrowserFetchTransport = (function () {
    function BrowserFetchTransport() {
    }
    BrowserFetchTransport.prototype.roundTrip = function (request) {
        var responsePromise = fetch_fetch(request.url, {
            body: request.body,
            headers: request.headers,
            method: request.method,
            mode: 'cors'
        });
        var responseTextPromise = responsePromise.then(function (response) {
            return response.text();
        });
        return Promise.all([responsePromise, responseTextPromise]).then(function (values) {
            var response = values[0];
            var body = values[1];
            var headers = {};
            response.headers.forEach(function (value, key) {
                headers[key] = value;
            });
            return new esm["s" /* Response */](headers, response.status, body);
        });
    };
    BrowserFetchTransport.prototype.stream = function (request, open, retryRequest) {
        if (open === void 0) { open = true; }
        throw new esm["z" /* StitchClientError */](esm["A" /* StitchClientErrorCode */].StreamingNotSupported);
    };
    return BrowserFetchTransport;
}());
/* harmony default export */ var net_BrowserFetchTransport = (BrowserFetchTransport_BrowserFetchTransport);
//# sourceMappingURL=BrowserFetchTransport.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/LocalStorage.js
var stitchPrefixKey = "__stitch.client";
var LocalStorage = (function () {
    function LocalStorage(suiteName) {
        this.suiteName = suiteName;
    }
    LocalStorage.prototype.get = function (key) {
        return localStorage.getItem(this.getKey(key));
    };
    LocalStorage.prototype.set = function (key, value) {
        localStorage.setItem(this.getKey(key), value);
    };
    LocalStorage.prototype.remove = function (key) {
        localStorage.removeItem(this.getKey(key));
    };
    LocalStorage.prototype.getKey = function (forKey) {
        return stitchPrefixKey + "." + this.suiteName + "." + forKey;
    };
    return LocalStorage;
}());
/* harmony default export */ var common_LocalStorage = (LocalStorage);
//# sourceMappingURL=LocalStorage.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/EventSourceEventStream.js
var EventSourceEventStream_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EventSourceEventStream_EventSourceEventStream = (function (_super) {
    EventSourceEventStream_extends(EventSourceEventStream, _super);
    function EventSourceEventStream(evtSrc, onOpen, onOpenError, reconnecter) {
        var _this = _super.call(this, reconnecter) || this;
        _this.evtSrc = evtSrc;
        _this.onOpenError = onOpenError;
        _this.openedOnce = false;
        _this.evtSrc.onopen = function (e) {
            onOpen(_this);
            _this.openedOnce = true;
        };
        _this.reset();
        return _this;
    }
    EventSourceEventStream.prototype.open = function () {
        if (this.closed) {
            throw new esm["z" /* StitchClientError */](esm["A" /* StitchClientErrorCode */].StreamClosed);
        }
    };
    EventSourceEventStream.prototype.afterClose = function () {
        this.evtSrc.close();
    };
    EventSourceEventStream.prototype.onReconnect = function (next) {
        this.evtSrc = next.evtSrc;
        this.reset();
        this.events = next.events.concat(this.events);
    };
    EventSourceEventStream.prototype.reset = function () {
        var _this = this;
        this.evtSrc.onmessage = function (e) {
            _this.events.push(new esm["o" /* Event */](esm["o" /* Event */].MESSAGE_EVENT, e.data));
            _this.poll();
        };
        this.evtSrc.onerror = function (e) {
            if (e instanceof MessageEvent) {
                _this.lastErr = e.data;
                _this.events.push(new esm["o" /* Event */](esm["C" /* StitchEvent */].ERROR_EVENT_NAME, _this.lastErr));
                _this.close();
                _this.poll();
                return;
            }
            if (!_this.openedOnce) {
                _this.close();
                _this.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details"));
                return;
            }
            _this.evtSrc.close();
            _this.reconnect();
        };
    };
    return EventSourceEventStream;
}(esm["f" /* BaseEventStream */]));
/* harmony default export */ var net_EventSourceEventStream = (EventSourceEventStream_EventSourceEventStream);
//# sourceMappingURL=EventSourceEventStream.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/net/BrowserFetchStreamTransport.js
var BrowserFetchStreamTransport_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var BrowserFetchStreamTransport_BrowserFetchStreamTransport = (function (_super) {
    BrowserFetchStreamTransport_extends(BrowserFetchStreamTransport, _super);
    function BrowserFetchStreamTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserFetchStreamTransport.prototype.stream = function (request, open, retryRequest) {
        if (open === void 0) { open = true; }
        var reqHeaders = __assign({}, request.headers);
        reqHeaders[esm["r" /* Headers */].ACCEPT] = esm["g" /* ContentTypes */].TEXT_EVENT_STREAM;
        reqHeaders[esm["r" /* Headers */].CONTENT_TYPE] = esm["g" /* ContentTypes */].TEXT_EVENT_STREAM;
        return fetch_fetch(request.url + "&stitch_validate=true", {
            body: request.body,
            headers: reqHeaders,
            method: request.method,
            mode: 'cors'
        }).then(function (response) {
            var respHeaders = {};
            response.headers.forEach(function (value, key) {
                respHeaders[key] = value;
            });
            if (response.status < 200 || response.status >= 300) {
                return response.text()
                    .then(function (body) { return Object(esm["F" /* handleRequestError */])(new esm["s" /* Response */](respHeaders, response.status, body)); });
            }
            return new Promise(function (resolve, reject) {
                return new net_EventSourceEventStream(new EventSource(request.url), function (stream) { return resolve(stream); }, function (error) { return reject(error); }, retryRequest ?
                    function () { return retryRequest().then(function (es) { return es; }); }
                    : undefined);
            });
        });
    };
    return BrowserFetchStreamTransport;
}(net_BrowserFetchTransport));
/* harmony default export */ var net_BrowserFetchStreamTransport = (BrowserFetchStreamTransport_BrowserFetchStreamTransport);
//# sourceMappingURL=BrowserFetchStreamTransport.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/services/internal/StitchServiceClientImpl.js
var StitchServiceClientImpl = (function () {
    function StitchServiceClientImpl(proxy) {
        this.proxy = proxy;
    }
    StitchServiceClientImpl.prototype.callFunction = function (name, args, codec) {
        return this.proxy.callFunction(name, args, codec);
    };
    StitchServiceClientImpl.prototype.streamFunction = function (name, args, codec) {
        return this.proxy.streamFunction(name, args, codec);
    };
    return StitchServiceClientImpl;
}());
/* harmony default export */ var internal_StitchServiceClientImpl = (StitchServiceClientImpl);
//# sourceMappingURL=StitchServiceClientImpl.js.map
// EXTERNAL MODULE: ./node_modules/detect-browser/index.js
var detect_browser = __webpack_require__("SjWX");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/common/Version.js
var version = "4.7.1";

//# sourceMappingURL=Version.js.map

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectFragmentFields.js
var RedirectFragmentFields;
(function (RedirectFragmentFields) {
    RedirectFragmentFields["StitchError"] = "_stitch_error";
    RedirectFragmentFields["State"] = "_stitch_state";
    RedirectFragmentFields["UserAuth"] = "_stitch_ua";
    RedirectFragmentFields["LinkUser"] = "_stitch_link_user";
    RedirectFragmentFields["StitchLink"] = "_stitch_link";
    RedirectFragmentFields["ClientAppId"] = "_stitch_client_app_id";
})(RedirectFragmentFields || (RedirectFragmentFields = {}));
/* harmony default export */ var internal_RedirectFragmentFields = (RedirectFragmentFields);
//# sourceMappingURL=RedirectFragmentFields.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/RedirectKeys.js
var RedirectKeys;
(function (RedirectKeys) {
    RedirectKeys["ProviderName"] = "_stitch_redirect_provider_name";
    RedirectKeys["ProviderType"] = "_stitch_redirect_provider_type";
    RedirectKeys["State"] = "_stitch_redirect_state";
})(RedirectKeys || (RedirectKeys = {}));
/* harmony default export */ var internal_RedirectKeys = (RedirectKeys);
//# sourceMappingURL=RedirectKeys.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchRedirectError.js
var StitchRedirectError_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchRedirectError = (function (_super) {
    StitchRedirectError_extends(StitchRedirectError, _super);
    function StitchRedirectError(msg) {
        return _super.call(this, msg) || this;
    }
    return StitchRedirectError;
}(esm["B" /* StitchError */]));
/* harmony default export */ var internal_StitchRedirectError = (StitchRedirectError);
//# sourceMappingURL=StitchRedirectError.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserImpl.js
var StitchUserImpl_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchUserImpl = (function (_super) {
    StitchUserImpl_extends(StitchUserImpl, _super);
    function StitchUserImpl(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile, auth) {
        var _this = _super.call(this, id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile) || this;
        _this.auth = auth;
        return _this;
    }
    StitchUserImpl.prototype.linkWithCredential = function (credential) {
        return this.auth.linkWithCredential(this, credential);
    };
    StitchUserImpl.prototype.linkUserWithRedirect = function (credential) {
        return this.auth.linkWithRedirectInternal(this, credential);
    };
    return StitchUserImpl;
}(esm["k" /* CoreStitchUserImpl */]));
/* harmony default export */ var internal_StitchUserImpl = (StitchUserImpl);
//# sourceMappingURL=StitchUserImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchUserFactoryImpl.js

var StitchUserFactoryImpl_StitchUserFactoryImpl = (function () {
    function StitchUserFactoryImpl(auth) {
        this.auth = auth;
    }
    StitchUserFactoryImpl.prototype.makeUser = function (id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, userProfile) {
        return new internal_StitchUserImpl(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, userProfile, this.auth);
    };
    return StitchUserFactoryImpl;
}());
/* harmony default export */ var internal_StitchUserFactoryImpl = (StitchUserFactoryImpl_StitchUserFactoryImpl);
//# sourceMappingURL=StitchUserFactoryImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchAuthImpl.js
var StitchAuthImpl_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};







var alphaNumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var StitchAuthImpl_StitchAuthImpl = (function (_super) {
    StitchAuthImpl_extends(StitchAuthImpl, _super);
    function StitchAuthImpl(requestClient, browserAuthRoutes, authStorage, appInfo, jsdomWindow) {
        if (jsdomWindow === void 0) { jsdomWindow = window; }
        var _this = _super.call(this, requestClient, browserAuthRoutes, authStorage) || this;
        _this.browserAuthRoutes = browserAuthRoutes;
        _this.authStorage = authStorage;
        _this.appInfo = appInfo;
        _this.jsdomWindow = jsdomWindow;
        _this.listeners = new Set();
        _this.synchronousListeners = new Set();
        return _this;
    }
    Object.defineProperty(StitchAuthImpl.prototype, "userFactory", {
        get: function () {
            return new internal_StitchUserFactoryImpl(this);
        },
        enumerable: true,
        configurable: true
    });
    StitchAuthImpl.prototype.getProviderClient = function (factory, providerName) {
        if (isAuthProviderClientFactory(factory)) {
            return factory.getClient(this, this.requestClient, this.authRoutes);
        }
        else {
            return factory.getNamedClient(providerName, this.requestClient, this.authRoutes);
        }
    };
    StitchAuthImpl.prototype.loginWithCredential = function (credential) {
        return _super.prototype.loginWithCredentialInternal.call(this, credential);
    };
    StitchAuthImpl.prototype.loginWithRedirect = function (credential) {
        var _this = this;
        var _a = this.prepareRedirect(credential), redirectUrl = _a.redirectUrl, state = _a.state;
        this.requestClient.getBaseURL().then(function (baseUrl) {
            _this.jsdomWindow.location.replace(baseUrl +
                _this.browserAuthRoutes.getAuthProviderRedirectRoute(credential, redirectUrl, state, _this.deviceInfo));
        });
    };
    StitchAuthImpl.prototype.linkWithRedirectInternal = function (user, credential) {
        var _this = this;
        if (this.user !== undefined && user.id !== this.user.id) {
            return Promise.reject(new esm["z" /* StitchClientError */](esm["A" /* StitchClientErrorCode */].UserNoLongerValid));
        }
        var _a = this.prepareRedirect(credential), redirectUrl = _a.redirectUrl, state = _a.state;
        return this.requestClient.getBaseURL().then(function (baseUrl) {
            var link = baseUrl +
                _this.browserAuthRoutes.getAuthProviderLinkRedirectRoute(credential, redirectUrl, state, _this.deviceInfo);
            return (StitchAuthImpl.injectedFetch ? StitchAuthImpl.injectedFetch : fetch)(new Request(link, {
                credentials: "include",
                headers: {
                    Authorization: "Bearer " + _this.authInfo.accessToken
                },
                mode: 'cors'
            }));
        }).then(function (response) {
            _this.jsdomWindow.location.replace(response.headers.get("X-Stitch-Location"));
        });
    };
    StitchAuthImpl.prototype.hasRedirectResult = function () {
        var isValid = false;
        try {
            isValid = this.parseRedirect().isValid;
            return isValid;
        }
        catch (_) {
            return false;
        }
        finally {
            if (!isValid) {
                this.cleanupRedirect();
            }
        }
    };
    StitchAuthImpl.prototype.handleRedirectResult = function () {
        try {
            var providerName = this.authStorage.get(internal_RedirectKeys.ProviderName);
            var providerType = this.authStorage.get(internal_RedirectKeys.ProviderType);
            var redirectFragment = this.parseRedirect();
            return this.loginWithCredentialInternal(new esm["y" /* StitchAuthResponseCredential */](this.processRedirectResult(redirectFragment), providerType, providerName, redirectFragment.asLink)).then(function (user) { return user; });
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    StitchAuthImpl.prototype.linkWithCredential = function (user, credential) {
        return _super.prototype.linkUserWithCredentialInternal.call(this, user, credential);
    };
    StitchAuthImpl.prototype.logout = function () {
        if (arguments.length > 0) {
            return Promise.reject(new esm["z" /* StitchClientError */](esm["A" /* StitchClientErrorCode */].UnexpectedArguments));
        }
        return _super.prototype.logoutInternal.call(this);
    };
    StitchAuthImpl.prototype.logoutUserWithId = function (userId) {
        return _super.prototype.logoutUserWithIdInternal.call(this, userId);
    };
    StitchAuthImpl.prototype.removeUser = function () {
        if (arguments.length > 0) {
            return Promise.reject(new esm["z" /* StitchClientError */](esm["A" /* StitchClientErrorCode */].UnexpectedArguments));
        }
        return _super.prototype.removeUserInternal.call(this);
    };
    StitchAuthImpl.prototype.removeUserWithId = function (userId) {
        return _super.prototype.removeUserWithIdInternal.call(this, userId);
    };
    Object.defineProperty(StitchAuthImpl.prototype, "deviceInfo", {
        get: function () {
            var info = {};
            if (this.hasDeviceId) {
                info[esm["n" /* DeviceFields */].DEVICE_ID] = this.deviceId;
            }
            if (this.appInfo.localAppName !== undefined) {
                info[esm["n" /* DeviceFields */].APP_ID] = this.appInfo.localAppName;
            }
            if (this.appInfo.localAppVersion !== undefined) {
                info[esm["n" /* DeviceFields */].APP_VERSION] = this.appInfo.localAppVersion;
            }
            var browser = Object(detect_browser["detect"])();
            if (browser) {
                info[esm["n" /* DeviceFields */].PLATFORM] = browser.name;
                info[esm["n" /* DeviceFields */].PLATFORM_VERSION] = browser.version;
            }
            else {
                info[esm["n" /* DeviceFields */].PLATFORM] = "web";
                info[esm["n" /* DeviceFields */].PLATFORM_VERSION] = "0.0.0";
            }
            info[esm["n" /* DeviceFields */].SDK_VERSION] = version;
            return info;
        },
        enumerable: true,
        configurable: true
    });
    StitchAuthImpl.prototype.addAuthListener = function (listener) {
        this.listeners.add(listener);
        this.onAuthEvent(listener);
        this.dispatchAuthEvent({
            kind: esm["c" /* AuthEventKind */].ListenerRegistered,
        });
    };
    StitchAuthImpl.prototype.addSynchronousAuthListener = function (listener) {
        this.listeners.add(listener);
        this.onAuthEvent(listener);
        this.dispatchAuthEvent({
            kind: esm["c" /* AuthEventKind */].ListenerRegistered,
        });
    };
    StitchAuthImpl.prototype.removeAuthListener = function (listener) {
        this.listeners.delete(listener);
    };
    StitchAuthImpl.prototype.onAuthEvent = function (listener) {
        var _this = this;
        if (listener) {
            var _1 = new Promise(function (resolve) {
                if (listener.onAuthEvent) {
                    listener.onAuthEvent(_this);
                }
                resolve(undefined);
            });
        }
        else {
            this.listeners.forEach(function (one) {
                _this.onAuthEvent(one);
            });
        }
    };
    StitchAuthImpl.prototype.dispatchAuthEvent = function (event) {
        var _this = this;
        switch (event.kind) {
            case esm["c" /* AuthEventKind */].ActiveUserChanged:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onActiveUserChanged) {
                        listener.onActiveUserChanged(_this, event.currentActiveUser, event.previousActiveUser);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].ListenerRegistered:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onListenerRegistered) {
                        listener.onListenerRegistered(_this);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].UserAdded:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onUserAdded) {
                        listener.onUserAdded(_this, event.addedUser);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].UserLinked:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onUserLinked) {
                        listener.onUserLinked(_this, event.linkedUser);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].UserLoggedIn:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onUserLoggedIn) {
                        listener.onUserLoggedIn(_this, event.loggedInUser);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].UserLoggedOut:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onUserLoggedOut) {
                        listener.onUserLoggedOut(_this, event.loggedOutUser);
                    }
                });
                break;
            case esm["c" /* AuthEventKind */].UserRemoved:
                this.dispatchBlockToListeners(function (listener) {
                    if (listener.onUserRemoved) {
                        listener.onUserRemoved(_this, event.removedUser);
                    }
                });
                break;
            default:
                return this.assertNever(event);
        }
    };
    StitchAuthImpl.prototype.assertNever = function (x) {
        throw new Error("unexpected object: " + x);
    };
    StitchAuthImpl.prototype.dispatchBlockToListeners = function (block) {
        this.synchronousListeners.forEach(block);
        this.listeners.forEach(function (listener) {
            var _ = new Promise(function (resolve) {
                block(listener);
                resolve(undefined);
            });
        });
    };
    StitchAuthImpl.prototype.cleanupRedirect = function () {
        this.jsdomWindow.history.replaceState(null, "", this.pageRootUrl());
        this.authStorage.remove(internal_RedirectKeys.State);
        this.authStorage.remove(internal_RedirectKeys.ProviderName);
        this.authStorage.remove(internal_RedirectKeys.ProviderType);
    };
    StitchAuthImpl.prototype.parseRedirect = function () {
        if (typeof this.jsdomWindow === "undefined") {
            throw new internal_StitchRedirectError("running in a non-browser environment");
        }
        if (!this.jsdomWindow.location || !this.jsdomWindow.location.hash) {
            throw new internal_StitchRedirectError("window location hash was undefined");
        }
        var ourState = this.authStorage.get(internal_RedirectKeys.State);
        var redirectFragment = this.jsdomWindow.location.hash.substring(1);
        return parseRedirectFragment(redirectFragment, ourState, this.appInfo.clientAppId);
    };
    StitchAuthImpl.prototype.processRedirectResult = function (redirectFragment) {
        try {
            if (!redirectFragment.isValid) {
                throw new internal_StitchRedirectError("invalid redirect result");
            }
            if (redirectFragment.lastError) {
                throw new internal_StitchRedirectError("error handling redirect: " + redirectFragment.lastError);
            }
            if (!redirectFragment.authInfo) {
                throw new internal_StitchRedirectError("no user auth value was found: it could not be decoded from fragment");
            }
        }
        catch (err) {
            throw err;
        }
        finally {
            this.cleanupRedirect();
        }
        return redirectFragment.authInfo;
    };
    StitchAuthImpl.prototype.prepareRedirect = function (credential) {
        this.authStorage.set(internal_RedirectKeys.ProviderName, credential.providerName);
        this.authStorage.set(internal_RedirectKeys.ProviderType, credential.providerType);
        var redirectUrl = credential.redirectUrl;
        if (redirectUrl === undefined) {
            redirectUrl = this.pageRootUrl();
        }
        var state = generateState();
        this.authStorage.set(internal_RedirectKeys.State, state);
        return { redirectUrl: redirectUrl, state: state };
    };
    StitchAuthImpl.prototype.pageRootUrl = function () {
        return [
            this.jsdomWindow.location.protocol,
            "//",
            this.jsdomWindow.location.host,
            this.jsdomWindow.location.pathname
        ].join("");
    };
    return StitchAuthImpl;
}(esm["i" /* CoreStitchAuth */]));
/* harmony default export */ var internal_StitchAuthImpl = (StitchAuthImpl_StitchAuthImpl);
function generateState() {
    var state = "";
    for (var i = 0; i < 64; ++i) {
        state += alphaNumericCharacters.charAt(Math.floor(Math.random() * alphaNumericCharacters.length));
    }
    return state;
}
function unmarshallUserAuth(data) {
    var parts = data.split("$");
    if (parts.length !== 4) {
        throw new internal_StitchRedirectError("invalid user auth data provided while " +
            "marshalling user authentication data: " +
            data);
    }
    var _a = __read(parts, 4), accessToken = _a[0], refreshToken = _a[1], userId = _a[2], deviceId = _a[3];
    return new esm["d" /* AuthInfo */](userId, deviceId, accessToken, refreshToken);
}
var ParsedRedirectFragment = (function () {
    function ParsedRedirectFragment() {
        this.stateValid = false;
        this.clientAppIdValid = false;
        this.asLink = false;
    }
    Object.defineProperty(ParsedRedirectFragment.prototype, "isValid", {
        get: function () {
            return this.stateValid && this.clientAppIdValid;
        },
        enumerable: true,
        configurable: true
    });
    return ParsedRedirectFragment;
}());
function parseRedirectFragment(fragment, ourState, ourClientAppId) {
    var vars = fragment.split("&");
    var result = new ParsedRedirectFragment();
    vars.forEach(function (kvp) {
        var pairParts = kvp.split("=");
        var pairKey = decodeURIComponent(pairParts[0]);
        switch (pairKey) {
            case internal_RedirectFragmentFields.StitchError:
                result.lastError = decodeURIComponent(pairParts[1]);
                break;
            case internal_RedirectFragmentFields.UserAuth:
                try {
                    result.authInfo = unmarshallUserAuth(decodeURIComponent(pairParts[1]));
                }
                catch (e) {
                    result.lastError = e;
                }
                break;
            case internal_RedirectFragmentFields.StitchLink:
                if (pairParts[1] === "ok") {
                    result.asLink = true;
                }
                break;
            case internal_RedirectFragmentFields.State:
                var theirState = decodeURIComponent(pairParts[1]);
                if (ourState === theirState) {
                    result.stateValid = true;
                }
                break;
            case internal_RedirectFragmentFields.ClientAppId:
                var clientAppId = decodeURIComponent(pairParts[1]);
                if (ourClientAppId === clientAppId) {
                    result.clientAppIdValid = true;
                }
                break;
            default:
                break;
        }
    });
    return result;
}
function isAuthProviderClientFactory(factory) {
    return (factory.getClient !== undefined);
}
//# sourceMappingURL=StitchAuthImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppAuthRoutes.js
var StitchBrowserAppAuthRoutes_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchBrowserAppAuthRoutes_StitchBrowserAppAuthRoutes = (function (_super) {
    StitchBrowserAppAuthRoutes_extends(StitchBrowserAppAuthRoutes, _super);
    function StitchBrowserAppAuthRoutes(clientAppId) {
        return _super.call(this, clientAppId) || this;
    }
    StitchBrowserAppAuthRoutes.prototype.getAuthProviderRedirectRoute = function (credential, redirectUrl, state, deviceInfo) {
        return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo);
    };
    StitchBrowserAppAuthRoutes.prototype.getAuthProviderLinkRedirectRoute = function (credential, redirectUrl, state, deviceInfo) {
        return this.getAuthProviderLoginRoute(credential.providerName) + "?redirect=" + encodeURI(redirectUrl) + "&state=" + state + "&device=" + this.uriEncodeObject(deviceInfo) + "&link=true&providerRedirectHeader=true";
    };
    StitchBrowserAppAuthRoutes.prototype.uriEncodeObject = function (obj) {
        return encodeURIComponent(Object(esm["E" /* base64Encode */])(JSON.stringify(obj)));
    };
    return StitchBrowserAppAuthRoutes;
}(esm["t" /* StitchAppAuthRoutes */]));
/* harmony default export */ var internal_StitchBrowserAppAuthRoutes = (StitchBrowserAppAuthRoutes_StitchBrowserAppAuthRoutes);
//# sourceMappingURL=StitchBrowserAppAuthRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/auth/internal/StitchBrowserAppRoutes.js
var StitchBrowserAppRoutes_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchBrowserAppRoutes_StitchBrowserAppRoutes = (function (_super) {
    StitchBrowserAppRoutes_extends(StitchBrowserAppRoutes, _super);
    function StitchBrowserAppRoutes(clientAppId) {
        var _this = _super.call(this, clientAppId) || this;
        _this.authRoutes = new internal_StitchBrowserAppAuthRoutes(clientAppId);
        return _this;
    }
    return StitchBrowserAppRoutes;
}(esm["x" /* StitchAppRoutes */]));
/* harmony default export */ var internal_StitchBrowserAppRoutes = (StitchBrowserAppRoutes_StitchBrowserAppRoutes);
//# sourceMappingURL=StitchBrowserAppRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/internal/StitchAppClientImpl.js




var StitchAppClientImpl_StitchAppClientImpl = (function () {
    function StitchAppClientImpl(clientAppId, config) {
        this.info = new esm["v" /* StitchAppClientInfo */](clientAppId, config.dataDirectory, config.localAppName, config.localAppVersion);
        this.routes = new internal_StitchBrowserAppRoutes(this.info.clientAppId);
        var requestClient = new esm["w" /* StitchAppRequestClient */](clientAppId, config.baseUrl, config.transport);
        this.auth = new internal_StitchAuthImpl(requestClient, this.routes.authRoutes, config.storage, this.info);
        this.coreClient = new esm["h" /* CoreStitchAppClient */](this.auth, this.routes);
        this.serviceClients = [];
        this.auth.addSynchronousAuthListener(this);
    }
    StitchAppClientImpl.prototype.getServiceClient = function (factory, serviceName) {
        if (isServiceClientFactory(factory)) {
            var serviceClient = new esm["j" /* CoreStitchServiceClientImpl */](this.auth, this.routes.serviceRoutes, "");
            this.bindServiceClient(serviceClient);
            return factory.getClient(serviceClient, this.info);
        }
        else {
            var serviceClient = new esm["j" /* CoreStitchServiceClientImpl */](this.auth, this.routes.serviceRoutes, serviceName);
            this.bindServiceClient(serviceClient);
            return factory.getNamedClient(serviceClient, this.info);
        }
    };
    StitchAppClientImpl.prototype.getGeneralServiceClient = function (serviceName) {
        var serviceClient = new esm["j" /* CoreStitchServiceClientImpl */](this.auth, this.routes.serviceRoutes, serviceName);
        this.bindServiceClient(serviceClient);
        return new internal_StitchServiceClientImpl(serviceClient);
    };
    StitchAppClientImpl.prototype.callFunction = function (name, args) {
        return this.coreClient.callFunction(name, args);
    };
    StitchAppClientImpl.prototype.onActiveUserChanged = function (_, currentActiveUser, previousActiveUser) {
        this.onRebindEvent(new esm["e" /* AuthRebindEvent */]({
            currentActiveUser: currentActiveUser,
            kind: esm["c" /* AuthEventKind */].ActiveUserChanged,
            previousActiveUser: previousActiveUser
        }));
    };
    StitchAppClientImpl.prototype.bindServiceClient = function (coreStitchServiceClient) {
        this.serviceClients.push(coreStitchServiceClient);
    };
    StitchAppClientImpl.prototype.onRebindEvent = function (rebindEvent) {
        this.serviceClients.forEach(function (serviceClient) {
            serviceClient.onRebindEvent(rebindEvent);
        });
    };
    return StitchAppClientImpl;
}());
/* harmony default export */ var internal_StitchAppClientImpl = (StitchAppClientImpl_StitchAppClientImpl);
function isServiceClientFactory(factory) {
    return factory.getClient !== undefined;
}
//# sourceMappingURL=StitchAppClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/core/Stitch.js





var DEFAULT_BASE_URL = "https://stitch.mongodb.com";
var appClients = {};
var Stitch_Stitch = (function () {
    function Stitch() {
    }
    Object.defineProperty(Stitch, "defaultAppClient", {
        get: function () {
            if (Stitch.defaultClientAppId === undefined) {
                throw new Error("default app client has not yet been initialized/set");
            }
            return appClients[Stitch.defaultClientAppId];
        },
        enumerable: true,
        configurable: true
    });
    Stitch.getAppClient = function (clientAppId) {
        if (appClients[clientAppId] === undefined) {
            throw new Error("client for app '" + clientAppId + "' has not yet been initialized");
        }
        return appClients[clientAppId];
    };
    Stitch.hasAppClient = function (clientAppId) {
        return appClients[clientAppId] !== undefined;
    };
    Stitch.initializeDefaultAppClient = function (clientAppId, config) {
        if (config === void 0) { config = new esm["u" /* StitchAppClientConfiguration */].Builder().build(); }
        if (clientAppId === undefined || clientAppId === "") {
            throw new Error("clientAppId must be set to a non-empty string");
        }
        if (Stitch.defaultClientAppId !== undefined) {
            throw new Error("default app can only be set once; currently set to '" + Stitch.defaultClientAppId + "'");
        }
        var client = Stitch.initializeAppClient(clientAppId, config);
        Stitch.defaultClientAppId = clientAppId;
        return client;
    };
    Stitch.initializeAppClient = function (clientAppId, config) {
        if (config === void 0) { config = new esm["u" /* StitchAppClientConfiguration */].Builder().build(); }
        if (clientAppId === undefined || clientAppId === "") {
            throw new Error("clientAppId must be set to a non-empty string");
        }
        if (appClients[clientAppId] !== undefined) {
            throw new Error("client for app '" + clientAppId + "' has already been initialized");
        }
        var builder = config.builder ? config.builder() : new esm["u" /* StitchAppClientConfiguration */].Builder(config);
        if (builder.storage === undefined) {
            builder.withStorage(new common_LocalStorage(clientAppId));
        }
        if (builder.transport === undefined) {
            if (window["EventSource"]) {
                builder.withTransport(new net_BrowserFetchStreamTransport());
            }
            else {
                builder.withTransport(new net_BrowserFetchTransport());
            }
        }
        if (builder.baseUrl === undefined || builder.baseUrl === "") {
            builder.withBaseUrl(DEFAULT_BASE_URL);
        }
        if (builder.localAppName === undefined || builder.localAppName === "") {
            builder.withLocalAppName(Stitch.localAppName);
        }
        if (builder.localAppVersion === undefined ||
            builder.localAppVersion === "") {
            builder.withLocalAppVersion(Stitch.localAppVersion);
        }
        var client = new internal_StitchAppClientImpl(clientAppId, builder.build());
        appClients[clientAppId] = client;
        return client;
    };
    Stitch.clearApps = function () {
        appClients = {};
    };
    return Stitch;
}());
/* harmony default export */ var core_Stitch = (Stitch_Stitch);
//# sourceMappingURL=Stitch.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-core/dist/esm/index.js
/* unused concated harmony import AnonymousAuthProvider */
/* concated harmony reexport AnonymousCredential */__webpack_require__.d(__webpack_exports__, "a", function() { return esm["a" /* AnonymousCredential */]; });
/* unused concated harmony import BSON */
/* unused concated harmony import BrowserFetchTransport */
/* unused concated harmony import CustomAuthProvider */
/* unused concated harmony import CustomCredential */
/* unused concated harmony import FacebookAuthProvider */
/* unused concated harmony import FacebookCredential */
/* unused concated harmony import FacebookRedirectCredential */
/* unused concated harmony import FunctionAuthProvider */
/* unused concated harmony import FunctionCredential */
/* unused concated harmony import GoogleAuthProvider */
/* unused concated harmony import GoogleCredential */
/* unused concated harmony import GoogleRedirectCredential */
/* unused concated harmony import MemoryStorage */
/* unused concated harmony import ServerApiKeyAuthProvider */
/* unused concated harmony import ServerApiKeyCredential */
/* concated harmony reexport Stitch */__webpack_require__.d(__webpack_exports__, "b", function() { return core_Stitch; });
/* unused concated harmony import StitchAppClientConfiguration */
/* unused concated harmony import StitchAppClientInfo */
/* unused concated harmony import StitchClientError */
/* unused concated harmony import StitchClientErrorCode */
/* unused concated harmony import StitchRequestError */
/* unused concated harmony import StitchRequestErrorCode */
/* unused concated harmony import StitchServiceError */
/* unused concated harmony import StitchServiceErrorCode */
/* unused concated harmony import StitchUserIdentity */
/* unused concated harmony import Stream */
/* unused concated harmony import UserApiKey */
/* unused concated harmony import UserApiKeyAuthProvider */
/* unused concated harmony import UserApiKeyAuthProviderClient */
/* unused concated harmony import UserApiKeyCredential */
/* unused concated harmony import UserPasswordAuthProvider */
/* unused concated harmony import UserPasswordAuthProviderClient */
/* unused concated harmony import UserPasswordCredential */
/* unused concated harmony import UserType */








//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=npm.mongodb-stitch-browser-core.0b2748432.js.map