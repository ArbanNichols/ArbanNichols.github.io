(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "6Glz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/bson/dist/bson.browser.esm.js
var bson_browser_esm = __webpack_require__("no5z");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthEvent.js
var AuthEventKind;
(function (AuthEventKind) {
    AuthEventKind[AuthEventKind["ActiveUserChanged"] = 0] = "ActiveUserChanged";
    AuthEventKind[AuthEventKind["ListenerRegistered"] = 1] = "ListenerRegistered";
    AuthEventKind[AuthEventKind["UserAdded"] = 2] = "UserAdded";
    AuthEventKind[AuthEventKind["UserLinked"] = 3] = "UserLinked";
    AuthEventKind[AuthEventKind["UserLoggedIn"] = 4] = "UserLoggedIn";
    AuthEventKind[AuthEventKind["UserLoggedOut"] = 5] = "UserLoggedOut";
    AuthEventKind[AuthEventKind["UserRemoved"] = 6] = "UserRemoved";
})(AuthEventKind || (AuthEventKind = {}));
//# sourceMappingURL=AuthEvent.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AuthInfo.js
var AuthInfo = (function () {
    function AuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) {
        this.userId = userId;
        this.deviceId = deviceId;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.loggedInProviderType = loggedInProviderType;
        this.loggedInProviderName = loggedInProviderName;
        this.lastAuthActivity = lastAuthActivity;
        this.userProfile = userProfile;
    }
    AuthInfo.empty = function () {
        return new AuthInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    };
    Object.defineProperty(AuthInfo.prototype, "hasUser", {
        get: function () {
            return this.userId !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthInfo.prototype, "isEmpty", {
        get: function () {
            return this.deviceId === undefined;
        },
        enumerable: true,
        configurable: true
    });
    AuthInfo.prototype.loggedOut = function () {
        return new AuthInfo(this.userId, this.deviceId, undefined, undefined, this.loggedInProviderType, this.loggedInProviderName, new Date(), this.userProfile);
    };
    AuthInfo.prototype.withClearedUser = function () {
        return new AuthInfo(undefined, this.deviceId, undefined, undefined, undefined, undefined, undefined, undefined);
    };
    AuthInfo.prototype.withAuthProvider = function (providerType, providerName) {
        return new AuthInfo(this.userId, this.deviceId, this.accessToken, this.refreshToken, providerType, providerName, new Date(), this.userProfile);
    };
    AuthInfo.prototype.withNewAuthActivityTime = function () {
        return new AuthInfo(this.userId, this.deviceId, this.accessToken, this.refreshToken, this.loggedInProviderType, this.loggedInProviderName, new Date(), this.userProfile);
    };
    Object.defineProperty(AuthInfo.prototype, "isLoggedIn", {
        get: function () {
            return this.accessToken !== undefined && this.refreshToken !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    AuthInfo.prototype.merge = function (newInfo) {
        return new AuthInfo(newInfo.userId === undefined ? this.userId : newInfo.userId, newInfo.deviceId === undefined ? this.deviceId : newInfo.deviceId, newInfo.accessToken === undefined
            ? this.accessToken
            : newInfo.accessToken, newInfo.refreshToken === undefined
            ? this.refreshToken
            : newInfo.refreshToken, newInfo.loggedInProviderType === undefined
            ? this.loggedInProviderType
            : newInfo.loggedInProviderType, newInfo.loggedInProviderName === undefined
            ? this.loggedInProviderName
            : newInfo.loggedInProviderName, newInfo.lastAuthActivity === undefined
            ? this.lastAuthActivity
            : newInfo.lastAuthActivity, newInfo.userProfile === undefined
            ? this.userProfile
            : newInfo.userProfile);
    };
    return AuthInfo;
}());
/* harmony default export */ var internal_AuthInfo = (AuthInfo);
//# sourceMappingURL=AuthInfo.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchError.js
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
var _Error = function (message) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this);
    }
    this.message = message;
    this.name = this.constructor.name;
};
_Error.prototype = Object.create(Error.prototype);
var StitchError = (function (_super) {
    __extends(StitchError, _super);
    function StitchError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StitchError;
}(_Error));
/* harmony default export */ var esm_StitchError = (StitchError);
//# sourceMappingURL=StitchError.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestErrorCode.js
var StitchRequestErrorCode_a;
var StitchRequestErrorCode;
(function (StitchRequestErrorCode) {
    StitchRequestErrorCode[StitchRequestErrorCode["TRANSPORT_ERROR"] = 0] = "TRANSPORT_ERROR";
    StitchRequestErrorCode[StitchRequestErrorCode["DECODING_ERROR"] = 1] = "DECODING_ERROR";
    StitchRequestErrorCode[StitchRequestErrorCode["ENCODING_ERROR"] = 2] = "ENCODING_ERROR";
})(StitchRequestErrorCode || (StitchRequestErrorCode = {}));
var requestErrorCodeDescs = (StitchRequestErrorCode_a = {},
    StitchRequestErrorCode_a[StitchRequestErrorCode.TRANSPORT_ERROR] = "the request transport encountered an error communicating with Stitch",
    StitchRequestErrorCode_a[StitchRequestErrorCode.DECODING_ERROR] = "an error occurred while decoding a response from Stitch",
    StitchRequestErrorCode_a[StitchRequestErrorCode.ENCODING_ERROR] = "an error occurred while encoding a request for Stitch",
    StitchRequestErrorCode_a);
//# sourceMappingURL=StitchRequestErrorCode.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchRequestError.js
var StitchRequestError_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchRequestError_StitchRequestError = (function (_super) {
    StitchRequestError_extends(StitchRequestError, _super);
    function StitchRequestError(underlyingError, errorCode) {
        var _this = this;
        var message = "(" + StitchRequestErrorCode[errorCode] + "): " + requestErrorCodeDescs[errorCode] + ": " + underlyingError.message;
        _this = _super.call(this, message) || this;
        _this.underlyingError = underlyingError;
        _this.errorCode = errorCode;
        _this.errorCodeName = StitchRequestErrorCode[errorCode];
        return _this;
    }
    return StitchRequestError;
}(esm_StitchError));
/* harmony default export */ var esm_StitchRequestError = (StitchRequestError_StitchRequestError);
//# sourceMappingURL=StitchRequestError.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceErrorCode.js
var StitchServiceErrorCode;
(function (StitchServiceErrorCode) {
    StitchServiceErrorCode[StitchServiceErrorCode["MissingAuthReq"] = 0] = "MissingAuthReq";
    StitchServiceErrorCode[StitchServiceErrorCode["InvalidSession"] = 1] = "InvalidSession";
    StitchServiceErrorCode[StitchServiceErrorCode["UserAppDomainMismatch"] = 2] = "UserAppDomainMismatch";
    StitchServiceErrorCode[StitchServiceErrorCode["DomainNotAllowed"] = 3] = "DomainNotAllowed";
    StitchServiceErrorCode[StitchServiceErrorCode["ReadSizeLimitExceeded"] = 4] = "ReadSizeLimitExceeded";
    StitchServiceErrorCode[StitchServiceErrorCode["InvalidParameter"] = 5] = "InvalidParameter";
    StitchServiceErrorCode[StitchServiceErrorCode["MissingParameter"] = 6] = "MissingParameter";
    StitchServiceErrorCode[StitchServiceErrorCode["TwilioError"] = 7] = "TwilioError";
    StitchServiceErrorCode[StitchServiceErrorCode["GCMError"] = 8] = "GCMError";
    StitchServiceErrorCode[StitchServiceErrorCode["HTTPError"] = 9] = "HTTPError";
    StitchServiceErrorCode[StitchServiceErrorCode["AWSError"] = 10] = "AWSError";
    StitchServiceErrorCode[StitchServiceErrorCode["MongoDBError"] = 11] = "MongoDBError";
    StitchServiceErrorCode[StitchServiceErrorCode["ArgumentsNotAllowed"] = 12] = "ArgumentsNotAllowed";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionExecutionError"] = 13] = "FunctionExecutionError";
    StitchServiceErrorCode[StitchServiceErrorCode["NoMatchingRuleFound"] = 14] = "NoMatchingRuleFound";
    StitchServiceErrorCode[StitchServiceErrorCode["InternalServerError"] = 15] = "InternalServerError";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderNotFound"] = 16] = "AuthProviderNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderAlreadyExists"] = 17] = "AuthProviderAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceNotFound"] = 18] = "ServiceNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceTypeNotFound"] = 19] = "ServiceTypeNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceAlreadyExists"] = 20] = "ServiceAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ServiceCommandNotFound"] = 21] = "ServiceCommandNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueNotFound"] = 22] = "ValueNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueAlreadyExists"] = 23] = "ValueAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["ValueDuplicateName"] = 24] = "ValueDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionNotFound"] = 25] = "FunctionNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionAlreadyExists"] = 26] = "FunctionAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionDuplicateName"] = 27] = "FunctionDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionSyntaxError"] = 28] = "FunctionSyntaxError";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionInvalid"] = 29] = "FunctionInvalid";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookNotFound"] = 30] = "IncomingWebhookNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookAlreadyExists"] = 31] = "IncomingWebhookAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookDuplicateName"] = 32] = "IncomingWebhookDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleNotFound"] = 33] = "RuleNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["ApiKeyNotFound"] = 34] = "ApiKeyNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleAlreadyExists"] = 35] = "RuleAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["RuleDuplicateName"] = 36] = "RuleDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["AuthProviderDuplicateName"] = 37] = "AuthProviderDuplicateName";
    StitchServiceErrorCode[StitchServiceErrorCode["RestrictedHost"] = 38] = "RestrictedHost";
    StitchServiceErrorCode[StitchServiceErrorCode["ApiKeyAlreadyExists"] = 39] = "ApiKeyAlreadyExists";
    StitchServiceErrorCode[StitchServiceErrorCode["IncomingWebhookAuthFailed"] = 40] = "IncomingWebhookAuthFailed";
    StitchServiceErrorCode[StitchServiceErrorCode["ExecutionTimeLimitExceeded"] = 41] = "ExecutionTimeLimitExceeded";
    StitchServiceErrorCode[StitchServiceErrorCode["FunctionNotCallable"] = 42] = "FunctionNotCallable";
    StitchServiceErrorCode[StitchServiceErrorCode["UserAlreadyConfirmed"] = 43] = "UserAlreadyConfirmed";
    StitchServiceErrorCode[StitchServiceErrorCode["UserNotFound"] = 44] = "UserNotFound";
    StitchServiceErrorCode[StitchServiceErrorCode["UserDisabled"] = 45] = "UserDisabled";
    StitchServiceErrorCode[StitchServiceErrorCode["Unknown"] = 46] = "Unknown";
})(StitchServiceErrorCode || (StitchServiceErrorCode = {}));
var apiErrorCodes = {
    APIKeyAlreadyExists: StitchServiceErrorCode.ApiKeyAlreadyExists,
    APIKeyNotFound: StitchServiceErrorCode.ApiKeyNotFound,
    AWSError: StitchServiceErrorCode.AWSError,
    ArgumentsNotAllowed: StitchServiceErrorCode.ArgumentsNotAllowed,
    AuthProviderAlreadyExists: StitchServiceErrorCode.AuthProviderAlreadyExists,
    AuthProviderDuplicateName: StitchServiceErrorCode.AuthProviderDuplicateName,
    AuthProviderNotFound: StitchServiceErrorCode.AuthProviderNotFound,
    DomainNotAllowed: StitchServiceErrorCode.DomainNotAllowed,
    ExecutionTimeLimitExceeded: StitchServiceErrorCode.ExecutionTimeLimitExceeded,
    FunctionAlreadyExists: StitchServiceErrorCode.FunctionAlreadyExists,
    FunctionDuplicateName: StitchServiceErrorCode.FunctionDuplicateName,
    FunctionExecutionError: StitchServiceErrorCode.FunctionExecutionError,
    FunctionInvalid: StitchServiceErrorCode.FunctionInvalid,
    FunctionNotCallable: StitchServiceErrorCode.FunctionNotCallable,
    FunctionNotFound: StitchServiceErrorCode.FunctionNotFound,
    FunctionSyntaxError: StitchServiceErrorCode.FunctionSyntaxError,
    GCMError: StitchServiceErrorCode.GCMError,
    HTTPError: StitchServiceErrorCode.HTTPError,
    IncomingWebhookAlreadyExists: StitchServiceErrorCode.IncomingWebhookAlreadyExists,
    IncomingWebhookAuthFailed: StitchServiceErrorCode.IncomingWebhookAuthFailed,
    IncomingWebhookDuplicateName: StitchServiceErrorCode.IncomingWebhookDuplicateName,
    IncomingWebhookNotFound: StitchServiceErrorCode.IncomingWebhookNotFound,
    InternalServerError: StitchServiceErrorCode.InternalServerError,
    InvalidParameter: StitchServiceErrorCode.InvalidParameter,
    InvalidSession: StitchServiceErrorCode.InvalidSession,
    MissingAuthReq: StitchServiceErrorCode.MissingAuthReq,
    MissingParameter: StitchServiceErrorCode.MissingParameter,
    MongoDBError: StitchServiceErrorCode.MongoDBError,
    NoMatchingRuleFound: StitchServiceErrorCode.NoMatchingRuleFound,
    ReadSizeLimitExceeded: StitchServiceErrorCode.ReadSizeLimitExceeded,
    RestrictedHost: StitchServiceErrorCode.RestrictedHost,
    RuleAlreadyExists: StitchServiceErrorCode.RuleAlreadyExists,
    RuleDuplicateName: StitchServiceErrorCode.RuleDuplicateName,
    RuleNotFound: StitchServiceErrorCode.RuleNotFound,
    ServiceAlreadyExists: StitchServiceErrorCode.ServiceAlreadyExists,
    ServiceCommandNotFound: StitchServiceErrorCode.ServiceCommandNotFound,
    ServiceNotFound: StitchServiceErrorCode.ServiceNotFound,
    ServiceTypeNotFound: StitchServiceErrorCode.ServiceTypeNotFound,
    TwilioError: StitchServiceErrorCode.TwilioError,
    UserAlreadyConfirmed: StitchServiceErrorCode.UserAlreadyConfirmed,
    UserAppDomainMismatch: StitchServiceErrorCode.UserAppDomainMismatch,
    UserDisabled: StitchServiceErrorCode.UserDisabled,
    UserNotFound: StitchServiceErrorCode.UserNotFound,
    ValueAlreadyExists: StitchServiceErrorCode.ValueAlreadyExists,
    ValueDuplicateName: StitchServiceErrorCode.ValueDuplicateName,
    ValueNotFound: StitchServiceErrorCode.ValueNotFound
};
function stitchServiceErrorCodeFromApi(code) {
    if (!(code in apiErrorCodes)) {
        return StitchServiceErrorCode.Unknown;
    }
    return apiErrorCodes[code];
}
//# sourceMappingURL=StitchServiceErrorCode.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchServiceError.js
var StitchServiceError_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchServiceError_StitchServiceError = (function (_super) {
    StitchServiceError_extends(StitchServiceError, _super);
    function StitchServiceError(message, errorCode) {
        if (errorCode === void 0) { errorCode = StitchServiceErrorCode.Unknown; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.errorCode = errorCode;
        _this.errorCodeName = StitchServiceErrorCode[errorCode];
        return _this;
    }
    return StitchServiceError;
}(esm_StitchError));
/* harmony default export */ var esm_StitchServiceError = (StitchServiceError_StitchServiceError);
//# sourceMappingURL=StitchServiceError.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ContentTypes.js
var ContentTypes = (function () {
    function ContentTypes() {
    }
    ContentTypes.APPLICATION_JSON = "application/json";
    ContentTypes.TEXT_EVENT_STREAM = "text/event-stream";
    return ContentTypes;
}());
/* harmony default export */ var net_ContentTypes = (ContentTypes);
//# sourceMappingURL=ContentTypes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Headers.js
var Headers = (function () {
    function Headers() {
    }
    Headers.getAuthorizationBearer = function (value) {
        return Headers.AUTHORIZATION_BEARER + " " + value;
    };
    Headers.CONTENT_TYPE_CANON = "Content-Type";
    Headers.CONTENT_TYPE = Headers.CONTENT_TYPE_CANON.toLocaleLowerCase();
    Headers.AUTHORIZATION_CANON = "Authorization";
    Headers.AUTHORIZATION = Headers.AUTHORIZATION_CANON.toLocaleLowerCase();
    Headers.ACCEPT_CANON = "Accept";
    Headers.ACCEPT = Headers.ACCEPT_CANON.toLocaleLowerCase();
    Headers.AUTHORIZATION_BEARER = "Bearer";
    return Headers;
}());
/* harmony default export */ var net_Headers = (Headers);
//# sourceMappingURL=Headers.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/StitchErrorUtils.js







var Fields;
(function (Fields) {
    Fields["ERROR"] = "error";
    Fields["ERROR_CODE"] = "error_code";
})(Fields || (Fields = {}));
function wrapDecodingError(err) {
    if (err instanceof esm_StitchError) {
        return err;
    }
    return new esm_StitchRequestError(err, StitchRequestErrorCode.DECODING_ERROR);
}
function handleRequestError(response) {
    if (response.body === undefined) {
        throw new esm_StitchServiceError("received unexpected status code " + response.statusCode, StitchServiceErrorCode.Unknown);
    }
    var body;
    try {
        body = response.body;
    }
    catch (e) {
        throw new esm_StitchServiceError("received unexpected status code " + response.statusCode, StitchServiceErrorCode.Unknown);
    }
    var errorMsg = handleRichError(response, body);
    throw new esm_StitchServiceError(errorMsg, StitchServiceErrorCode.Unknown);
}
function handleRichError(response, body) {
    if (response.headers[net_Headers.CONTENT_TYPE] === undefined ||
        (response.headers[net_Headers.CONTENT_TYPE] !== undefined &&
            response.headers[net_Headers.CONTENT_TYPE] !== net_ContentTypes.APPLICATION_JSON)) {
        return body;
    }
    var bsonObj = JSON.parse(body);
    if (!(bsonObj instanceof Object)) {
        return body;
    }
    var doc = bsonObj;
    if (doc[Fields.ERROR] === undefined) {
        return body;
    }
    var errorMsg = doc[Fields.ERROR];
    if (doc[Fields.ERROR_CODE] === undefined) {
        return errorMsg;
    }
    var errorCode = doc[Fields.ERROR_CODE];
    throw new esm_StitchServiceError(errorMsg, stitchServiceErrorCodeFromApi(errorCode));
}
//# sourceMappingURL=StitchErrorUtils.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Method.js
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
    Method["HEAD"] = "HEAD";
    Method["OPTIONS"] = "OPTIONS";
    Method["TRACE"] = "TRACE";
    Method["PATCH"] = "PATCH";
})(Method || (Method = {}));
/* harmony default export */ var net_Method = (Method);
//# sourceMappingURL=Method.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequest.js
var StitchRequest = (function () {
    function StitchRequest(method, path, headers, startedAt, body) {
        this.method = method;
        this.path = path;
        this.headers = headers;
        this.body = body;
        this.startedAt = startedAt;
    }
    Object.defineProperty(StitchRequest.prototype, "builder", {
        get: function () {
            return new StitchRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchRequest;
}());

(function (StitchRequest) {
    var Builder = (function () {
        function Builder(request) {
            if (request !== undefined) {
                this.method = request.method;
                this.path = request.path;
                this.headers = request.headers;
                this.body = request.body;
                this.startedAt = request.startedAt;
            }
        }
        Builder.prototype.withMethod = function (method) {
            this.method = method;
            return this;
        };
        Builder.prototype.withPath = function (path) {
            this.path = path;
            return this;
        };
        Builder.prototype.withHeaders = function (headers) {
            this.headers = headers;
            return this;
        };
        Builder.prototype.withBody = function (body) {
            this.body = body;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.method === undefined) {
                throw Error("must set method");
            }
            if (this.path === undefined) {
                throw Error("must set non-empty path");
            }
            if (this.startedAt === undefined) {
                this.startedAt = Date.now() / 1000;
            }
            return new StitchRequest(this.method, this.path, this.headers === undefined ? {} : this.headers, this.startedAt, this.body);
        };
        return Builder;
    }());
    StitchRequest.Builder = Builder;
})(StitchRequest || (StitchRequest = {}));
//# sourceMappingURL=StitchRequest.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthRequest.js
var StitchAuthRequest_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchAuthRequest_StitchAuthRequest = (function (_super) {
    StitchAuthRequest_extends(StitchAuthRequest, _super);
    function StitchAuthRequest(request, useRefreshToken, shouldRefreshOnFailure) {
        if (useRefreshToken === void 0) { useRefreshToken = false; }
        if (shouldRefreshOnFailure === void 0) { shouldRefreshOnFailure = true; }
        var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
        _this.useRefreshToken = useRefreshToken;
        _this.shouldRefreshOnFailure = shouldRefreshOnFailure;
        return _this;
    }
    Object.defineProperty(StitchAuthRequest.prototype, "builder", {
        get: function () {
            return new StitchAuthRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchAuthRequest;
}(StitchRequest));

(function (StitchAuthRequest) {
    var Builder = (function (_super) {
        StitchAuthRequest_extends(Builder, _super);
        function Builder(request) {
            return _super.call(this, request) || this;
        }
        Builder.prototype.withAccessToken = function () {
            this.useRefreshToken = false;
            return this;
        };
        Builder.prototype.withRefreshToken = function () {
            this.useRefreshToken = true;
            return this;
        };
        Builder.prototype.withShouldRefreshOnFailure = function (shouldRefreshOnFailure) {
            this.shouldRefreshOnFailure = shouldRefreshOnFailure;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.useRefreshToken) {
                this.shouldRefreshOnFailure = false;
            }
            return new StitchAuthRequest(_super.prototype.build.call(this), this.useRefreshToken, this.shouldRefreshOnFailure);
        };
        return Builder;
    }(StitchRequest.Builder));
    StitchAuthRequest.Builder = Builder;
})(StitchAuthRequest_StitchAuthRequest || (StitchAuthRequest_StitchAuthRequest = {}));
//# sourceMappingURL=StitchAuthRequest.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAuthDocRequest.js
var StitchAuthDocRequest_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StitchAuthDocRequest_StitchAuthDocRequest = (function (_super) {
    StitchAuthDocRequest_extends(StitchAuthDocRequest, _super);
    function StitchAuthDocRequest(request, document) {
        var _this = this;
        request instanceof StitchAuthRequest_StitchAuthRequest
            ? _this = _super.call(this, request, request.useRefreshToken, request.shouldRefreshOnFailure) || this : _this = _super.call(this, request) || this;
        _this.document = document;
        return _this;
    }
    Object.defineProperty(StitchAuthDocRequest.prototype, "builder", {
        get: function () {
            return new StitchAuthDocRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchAuthDocRequest;
}(StitchAuthRequest_StitchAuthRequest));

(function (StitchAuthDocRequest) {
    var Builder = (function (_super) {
        StitchAuthDocRequest_extends(Builder, _super);
        function Builder(request) {
            var _this = _super.call(this, request) || this;
            if (request !== undefined) {
                _this.document = request.document;
                _this.useRefreshToken = request.useRefreshToken;
            }
            return _this;
        }
        Builder.prototype.withDocument = function (document) {
            this.document = document;
            return this;
        };
        Builder.prototype.withAccessToken = function () {
            this.useRefreshToken = false;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.document === undefined || !(this.document instanceof Object)) {
                throw new Error("document must be set: " + this.document);
            }
            if (this.headers === undefined) {
                this.withHeaders({});
            }
            this.headers[net_Headers.CONTENT_TYPE] = net_ContentTypes.APPLICATION_JSON;
            this.withBody(bson_browser_esm["a" /* EJSON */].stringify(this.document, { relaxed: false }));
            return new StitchAuthDocRequest(_super.prototype.build.call(this), this.document);
        };
        return Builder;
    }(StitchAuthRequest_StitchAuthRequest.Builder));
    StitchAuthDocRequest.Builder = Builder;
})(StitchAuthDocRequest_StitchAuthDocRequest || (StitchAuthDocRequest_StitchAuthDocRequest = {}));
//# sourceMappingURL=StitchAuthDocRequest.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchDocRequest.js
var StitchDocRequest_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StitchDocRequest_StitchDocRequest = (function (_super) {
    StitchDocRequest_extends(StitchDocRequest, _super);
    function StitchDocRequest(request, document) {
        var _this = _super.call(this, request.method, request.path, request.headers, request.startedAt, request.body) || this;
        _this.document = document;
        return _this;
    }
    Object.defineProperty(StitchDocRequest.prototype, "builder", {
        get: function () {
            return new StitchDocRequest.Builder(this);
        },
        enumerable: true,
        configurable: true
    });
    return StitchDocRequest;
}(StitchRequest));

(function (StitchDocRequest) {
    var Builder = (function (_super) {
        StitchDocRequest_extends(Builder, _super);
        function Builder(request) {
            var _this = _super.call(this, request) || this;
            if (request !== undefined) {
                _this.document = request.document;
            }
            return _this;
        }
        Builder.prototype.withDocument = function (document) {
            this.document = document;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.document === undefined || !(this.document instanceof Object)) {
                throw new Error("document must be set");
            }
            if (this.headers === undefined) {
                this.withHeaders({});
            }
            this.headers[net_Headers.CONTENT_TYPE] = net_ContentTypes.APPLICATION_JSON;
            this.withBody(bson_browser_esm["a" /* EJSON */].stringify(this.document, { relaxed: false }));
            return new StitchDocRequest(_super.prototype.build.call(this), this.document);
        };
        return Builder;
    }(StitchRequest.Builder));
    StitchDocRequest.Builder = Builder;
})(StitchDocRequest_StitchDocRequest || (StitchDocRequest_StitchDocRequest = {}));
//# sourceMappingURL=StitchDocRequest.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientErrorCode.js
var StitchClientErrorCode_a;
var StitchClientErrorCode;
(function (StitchClientErrorCode) {
    StitchClientErrorCode[StitchClientErrorCode["LoggedOutDuringRequest"] = 0] = "LoggedOutDuringRequest";
    StitchClientErrorCode[StitchClientErrorCode["MustAuthenticateFirst"] = 1] = "MustAuthenticateFirst";
    StitchClientErrorCode[StitchClientErrorCode["UserNoLongerValid"] = 2] = "UserNoLongerValid";
    StitchClientErrorCode[StitchClientErrorCode["UserNotFound"] = 3] = "UserNotFound";
    StitchClientErrorCode[StitchClientErrorCode["UserNotLoggedIn"] = 4] = "UserNotLoggedIn";
    StitchClientErrorCode[StitchClientErrorCode["CouldNotLoadPersistedAuthInfo"] = 5] = "CouldNotLoadPersistedAuthInfo";
    StitchClientErrorCode[StitchClientErrorCode["CouldNotPersistAuthInfo"] = 6] = "CouldNotPersistAuthInfo";
    StitchClientErrorCode[StitchClientErrorCode["StreamingNotSupported"] = 7] = "StreamingNotSupported";
    StitchClientErrorCode[StitchClientErrorCode["StreamClosed"] = 8] = "StreamClosed";
    StitchClientErrorCode[StitchClientErrorCode["UnexpectedArguments"] = 9] = "UnexpectedArguments";
})(StitchClientErrorCode || (StitchClientErrorCode = {}));
var clientErrorCodeDescs = (StitchClientErrorCode_a = {},
    StitchClientErrorCode_a[StitchClientErrorCode.LoggedOutDuringRequest] = "logged out while making a request to Stitch",
    StitchClientErrorCode_a[StitchClientErrorCode.MustAuthenticateFirst] = "method called requires being authenticated",
    StitchClientErrorCode_a[StitchClientErrorCode.UserNoLongerValid] = "user instance being accessed is no longer valid; please get a new user with auth.getUser()",
    StitchClientErrorCode_a[StitchClientErrorCode.UserNotFound] = "user not found in list of users",
    StitchClientErrorCode_a[StitchClientErrorCode.UserNotLoggedIn] = "cannot make the active user a logged out user; please use loginWithCredential() to switch to this user",
    StitchClientErrorCode_a[StitchClientErrorCode.CouldNotLoadPersistedAuthInfo] = "failed to load stored auth information for Stitch",
    StitchClientErrorCode_a[StitchClientErrorCode.CouldNotPersistAuthInfo] = "failed to save auth information for Stitch",
    StitchClientErrorCode_a[StitchClientErrorCode.StreamingNotSupported] = "streaming not supported in this SDK",
    StitchClientErrorCode_a[StitchClientErrorCode.StreamClosed] = "stream is closed",
    StitchClientErrorCode_a[StitchClientErrorCode.UnexpectedArguments] = "function does not accept arguments",
    StitchClientErrorCode_a);
//# sourceMappingURL=StitchClientErrorCode.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientError.js
var StitchClientError_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StitchClientError_StitchClientError = (function (_super) {
    StitchClientError_extends(StitchClientError, _super);
    function StitchClientError(errorCode) {
        var _this = this;
        var message = "(" + StitchClientErrorCode[errorCode] + "): " + clientErrorCodeDescs[errorCode];
        _this = _super.call(this, message) || this;
        _this.errorCode = errorCode;
        _this.errorCodeName = StitchClientErrorCode[errorCode];
        return _this;
    }
    return StitchClientError;
}(esm_StitchError));
/* harmony default export */ var esm_StitchClientError = (StitchClientError_StitchClientError);
//# sourceMappingURL=StitchClientError.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Event.js
var Event = (function () {
    function Event(eventName, data) {
        this.eventName = eventName;
        this.data = data;
    }
    Event.MESSAGE_EVENT = "message";
    return Event;
}());
/* harmony default export */ var net_Event = (Event);
//# sourceMappingURL=Event.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchEvent.js




var StitchEvent_StitchEvent = (function () {
    function StitchEvent(eventName, data, decoder) {
        this.eventName = eventName;
        data = data ? data : "";
        var decodedStringBuffer = [];
        for (var chIdx = 0; chIdx < data.length; chIdx++) {
            var c = data[chIdx];
            switch (c) {
                case '%':
                    if (chIdx + 2 >= data.length) {
                        break;
                    }
                    var code = data.substring(chIdx + 1, chIdx + 3);
                    var found = void 0;
                    switch (code) {
                        case "25":
                            found = true;
                            decodedStringBuffer.push("%");
                            break;
                        case "0A":
                            found = true;
                            decodedStringBuffer.push("\n");
                            break;
                        case "0D":
                            found = true;
                            decodedStringBuffer.push("\r");
                            break;
                        default:
                            found = false;
                    }
                    if (found) {
                        chIdx += 2;
                        continue;
                    }
                    break;
                default:
                    break;
            }
            decodedStringBuffer.push(c);
        }
        var decodedData = decodedStringBuffer.join('');
        switch (this.eventName) {
            case StitchEvent.ERROR_EVENT_NAME:
                var errorMsg = void 0;
                var errorCode = void 0;
                try {
                    var errorDoc = bson_browser_esm["a" /* EJSON */].parse(decodedData, { strict: false });
                    errorMsg = errorDoc[ErrorFields.Error];
                    errorCode = stitchServiceErrorCodeFromApi(errorDoc[ErrorFields.ErrorCode]);
                }
                catch (error) {
                    errorMsg = decodedData;
                    errorCode = StitchServiceErrorCode.Unknown;
                }
                this.error = new esm_StitchServiceError(errorMsg, errorCode);
                break;
            case net_Event.MESSAGE_EVENT:
                this.data = bson_browser_esm["a" /* EJSON */].parse(decodedData, { strict: false });
                if (decoder) {
                    this.data = decoder.decode(this.data);
                }
                break;
        }
    }
    StitchEvent.fromEvent = function (event, decoder) {
        return new StitchEvent(event.eventName, event.data, decoder);
    };
    StitchEvent.ERROR_EVENT_NAME = "error";
    return StitchEvent;
}());
/* harmony default export */ var net_StitchEvent = (StitchEvent_StitchEvent);
var ErrorFields;
(function (ErrorFields) {
    ErrorFields["Error"] = "error";
    ErrorFields["ErrorCode"] = "error_code";
})(ErrorFields || (ErrorFields = {}));
//# sourceMappingURL=StitchEvent.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/Stream.js


var Stream_Stream = (function () {
    function Stream(eventStream, decoder) {
        this.eventStream = eventStream;
        this.decoder = decoder;
        this.listeners = [];
    }
    Stream.prototype.next = function () {
        var _this = this;
        return this.eventStream.nextEvent()
            .then(function (event) {
            var se = net_StitchEvent.fromEvent(event, _this.decoder);
            if (se.eventName === net_StitchEvent.ERROR_EVENT_NAME) {
                throw se.error;
            }
            if (se.eventName === net_Event.MESSAGE_EVENT) {
                return se.data;
            }
            return _this.next();
        });
    };
    Stream.prototype.onNext = function (callback) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = net_StitchEvent.fromEvent(e, _this.decoder);
                if (se.eventName !== net_Event.MESSAGE_EVENT) {
                    return;
                }
                callback(se.data);
            }
        };
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.onError = function (callback) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = net_StitchEvent.fromEvent(e, _this.decoder);
                if (se.eventName === net_StitchEvent.ERROR_EVENT_NAME) {
                    callback(se.error);
                }
            }
        };
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.addListener = function (listener) {
        var _this = this;
        var wrapper = {
            onEvent: function (e) {
                var se = net_StitchEvent.fromEvent(e, _this.decoder);
                if (se.eventName === net_StitchEvent.ERROR_EVENT_NAME) {
                    if (listener.onError) {
                        listener.onError(se.error);
                    }
                }
                else {
                    if (listener.onNext) {
                        listener.onNext(se.data);
                    }
                }
            }
        };
        this.listeners.push([listener, wrapper]);
        this.eventStream.addListener(wrapper);
    };
    Stream.prototype.removeListener = function (listener) {
        var index = -1;
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i][0] === listener) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return;
        }
        var wrapper = this.listeners[index][1];
        this.listeners.splice(index, 1);
        this.eventStream.removeListener(wrapper);
    };
    Stream.prototype.isOpen = function () {
        return this.eventStream.isOpen();
    };
    Stream.prototype.close = function () {
        this.eventStream.close();
    };
    return Stream;
}());
/* harmony default export */ var esm_Stream = (Stream_Stream);
//# sourceMappingURL=Stream.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousAuthProvider.js
var AnonymousAuthProvider = (function () {
    function AnonymousAuthProvider() {
    }
    AnonymousAuthProvider.TYPE = "anon-user";
    AnonymousAuthProvider.DEFAULT_NAME = "anon-user";
    return AnonymousAuthProvider;
}());
/* harmony default export */ var anonymous_AnonymousAuthProvider = (AnonymousAuthProvider);
//# sourceMappingURL=AnonymousAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/StitchAuthResponseCredential.js
var StitchAuthResponseCredential = (function () {
    function StitchAuthResponseCredential(authInfo, providerType, providerName, asLink) {
        this.authInfo = authInfo;
        this.providerType = providerType;
        this.providerName = providerName;
        this.asLink = asLink;
    }
    return StitchAuthResponseCredential;
}());
/* harmony default export */ var internal_StitchAuthResponseCredential = (StitchAuthResponseCredential);
//# sourceMappingURL=StitchAuthResponseCredential.js.map
// EXTERNAL MODULE: ./node_modules/base64-js/index.js
var base64_js = __webpack_require__("H7XF");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Base64.js

function base64Decode(str) {
    var unevenBytes = str.length % 4;
    var strToDecode;
    if (unevenBytes != 0) {
        var paddingNeeded = 4 - unevenBytes;
        strToDecode = str + "=".repeat(paddingNeeded);
    }
    else {
        strToDecode = str;
    }
    var bytes = Object(base64_js["toByteArray"])(strToDecode);
    return utf8Slice(bytes, 0, bytes.length);
}
function base64Encode(str) {
    var result;
    if ("undefined" === typeof Uint8Array) {
        result = utf8ToBytes(str);
    }
    result = new Uint8Array(utf8ToBytes(str));
    return Object(base64_js["fromByteArray"])(result);
}
function utf8ToBytes(string) {
    var units = Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    var i = 0;
    for (; i < length; i++) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 0xd7ff && codePoint < 0xe000) {
            if (leadSurrogate) {
                if (codePoint < 0xdc00) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    leadSurrogate = codePoint;
                    continue;
                }
                else {
                    codePoint =
                        ((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00) | 0x10000;
                    leadSurrogate = null;
                }
            }
            else {
                if (codePoint > 0xdbff) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                }
                else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                }
                else {
                    leadSurrogate = codePoint;
                    continue;
                }
            }
        }
        else if (leadSurrogate) {
            if ((units -= 3) > -1) {
                bytes.push(0xef, 0xbf, 0xbd);
            }
            leadSurrogate = null;
        }
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) {
                break;
            }
            bytes.push(codePoint);
        }
        else if (codePoint < 0x800) {
            if ((units -= 2) < 0) {
                break;
            }
            bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) {
                break;
            }
            bytes.push((codePoint >> 0xc) | 0xe0, ((codePoint >> 0x6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint < 0x200000) {
            if ((units -= 4) < 0) {
                break;
            }
            bytes.push((codePoint >> 0x12) | 0xf0, ((codePoint >> 0xc) & 0x3f) | 0x80, ((codePoint >> 0x6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else {
            throw new Error("Invalid code point");
        }
    }
    return bytes;
}
function utf8Slice(buf, start, end) {
    var res = "";
    var tmp = "";
    end = Math.min(buf.length, end || Infinity);
    start = start || 0;
    for (var i = start; i < end; i++) {
        if (buf[i] <= 0x7f) {
            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
            tmp = "";
        }
        else {
            tmp += "%" + buf[i].toString(16);
        }
    }
    return res + decodeUtf8Char(tmp);
}
function decodeUtf8Char(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (err) {
        return String.fromCharCode(0xfffd);
    }
}
//# sourceMappingURL=Base64.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/JWT.js

var EXPIRES = "exp";
var ISSUED_AT = "iat";
var JWT_JWT = (function () {
    function JWT(expires, issuedAt) {
        this.expires = expires;
        this.issuedAt = issuedAt;
    }
    JWT.fromEncoded = function (encodedJWT) {
        var parts = JWT.splitToken(encodedJWT);
        var json = JSON.parse(base64Decode(parts[1]));
        var expires = json[EXPIRES];
        var iat = json[ISSUED_AT];
        return new JWT(expires, iat);
    };
    JWT.splitToken = function (jwt) {
        var parts = jwt.split(".");
        if (parts.length !== 3) {
            throw new Error("Malformed JWT token. The string " + jwt + " should have 3 parts.");
        }
        return parts;
    };
    return JWT;
}());
/* harmony default export */ var internal_JWT = (JWT_JWT);
//# sourceMappingURL=JWT.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/AccessTokenRefresher.js

var SLEEP_MILLIS = 60000;
var EXPIRATION_WINDOW_SECS = 300;
var AccessTokenRefresher_AccessTokenRefresher = (function () {
    function AccessTokenRefresher(auth) {
        this.auth = auth;
    }
    AccessTokenRefresher.prototype.shouldRefresh = function () {
        var auth = this.auth;
        if (auth === undefined) {
            return false;
        }
        if (!auth.isLoggedIn) {
            return false;
        }
        var info = auth.authInfo;
        if (info === undefined) {
            return false;
        }
        if (!info.isLoggedIn) {
            return false;
        }
        var jwt;
        try {
            jwt = internal_JWT.fromEncoded(info.accessToken);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        if (Date.now() / 1000 < jwt.expires - EXPIRATION_WINDOW_SECS) {
            return false;
        }
        return true;
    };
    AccessTokenRefresher.prototype.run = function () {
        var _this = this;
        if (!this.shouldRefresh()) {
            this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
        }
        else {
            this.auth.refreshAccessToken().then(function () {
                _this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
            }).catch(function () {
                _this.nextTimeout = setTimeout(function () { return _this.run(); }, SLEEP_MILLIS);
            });
        }
    };
    AccessTokenRefresher.prototype.stop = function () {
        clearTimeout(this.nextTimeout);
    };
    return AccessTokenRefresher;
}());
/* harmony default export */ var internal_AccessTokenRefresher = (AccessTokenRefresher_AccessTokenRefresher);
//# sourceMappingURL=AccessTokenRefresher.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiAuthInfo.js
var ApiAuthInfo_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ApiAuthInfo_Fields;
(function (Fields) {
    Fields["USER_ID"] = "user_id";
    Fields["DEVICE_ID"] = "device_id";
    Fields["ACCESS_TOKEN"] = "access_token";
    Fields["REFRESH_TOKEN"] = "refresh_token";
})(ApiAuthInfo_Fields || (ApiAuthInfo_Fields = {}));
var ApiAuthInfo = (function (_super) {
    ApiAuthInfo_extends(ApiAuthInfo, _super);
    function ApiAuthInfo(userId, deviceId, accessToken, refreshToken) {
        return _super.call(this, userId, deviceId, accessToken, refreshToken) || this;
    }
    ApiAuthInfo.fromJSON = function (json) {
        return new ApiAuthInfo(json[ApiAuthInfo_Fields.USER_ID], json[ApiAuthInfo_Fields.DEVICE_ID], json[ApiAuthInfo_Fields.ACCESS_TOKEN], json[ApiAuthInfo_Fields.REFRESH_TOKEN]);
    };
    ApiAuthInfo.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[ApiAuthInfo_Fields.USER_ID] = this.userId,
            _a[ApiAuthInfo_Fields.DEVICE_ID] = this.deviceId,
            _a[ApiAuthInfo_Fields.ACCESS_TOKEN] = this.accessToken,
            _a[ApiAuthInfo_Fields.REFRESH_TOKEN] = this.refreshToken,
            _a;
    };
    return ApiAuthInfo;
}(internal_AuthInfo));
/* harmony default export */ var models_ApiAuthInfo = (ApiAuthInfo);
//# sourceMappingURL=ApiAuthInfo.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Assertions.js
var Assertions = (function () {
    function Assertions() {
    }
    Assertions.keyPresent = function (key, object) {
        if (object[key] === undefined) {
            throw new Error("expected " + key + " to be present");
        }
    };
    return Assertions;
}());
/* harmony default export */ var common_Assertions = (Assertions);
//# sourceMappingURL=Assertions.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/StitchUserProfileImpl.js
var NAME = "name";
var EMAIL = "email";
var PICTURE_URL = "picture";
var FIRST_NAME = "first_name";
var LAST_NAME = "last_name";
var GENDER = "gender";
var BIRTHDAY = "birthday";
var MIN_AGE = "min_age";
var MAX_AGE = "max_age";
var StitchUserProfileImpl = (function () {
    function StitchUserProfileImpl(userType, data, identities) {
        if (data === void 0) { data = {}; }
        if (identities === void 0) { identities = []; }
        this.userType = userType;
        this.data = data;
        this.identities = identities;
    }
    StitchUserProfileImpl.empty = function () {
        return new StitchUserProfileImpl();
    };
    Object.defineProperty(StitchUserProfileImpl.prototype, "name", {
        get: function () {
            return this.data[NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "email", {
        get: function () {
            return this.data[EMAIL];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "pictureUrl", {
        get: function () {
            return this.data[PICTURE_URL];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "firstName", {
        get: function () {
            return this.data[FIRST_NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "lastName", {
        get: function () {
            return this.data[LAST_NAME];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "gender", {
        get: function () {
            return this.data[GENDER];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "birthday", {
        get: function () {
            return this.data[BIRTHDAY];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "minAge", {
        get: function () {
            var age = this.data[MIN_AGE];
            if (age === undefined) {
                return undefined;
            }
            return age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StitchUserProfileImpl.prototype, "maxAge", {
        get: function () {
            var age = this.data[MAX_AGE];
            if (age === undefined) {
                return undefined;
            }
            return age;
        },
        enumerable: true,
        configurable: true
    });
    return StitchUserProfileImpl;
}());
/* harmony default export */ var internal_StitchUserProfileImpl = (StitchUserProfileImpl);
//# sourceMappingURL=StitchUserProfileImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/StitchUserIdentity.js
var StitchUserIdentity = (function () {
    function StitchUserIdentity(id, providerType) {
        this.id = id;
        this.providerType = providerType;
    }
    return StitchUserIdentity;
}());
/* harmony default export */ var auth_StitchUserIdentity = (StitchUserIdentity);
//# sourceMappingURL=StitchUserIdentity.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiStitchUserIdentity.js
var ApiStitchUserIdentity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ApiStitchUserIdentity_Fields;
(function (Fields) {
    Fields["ID"] = "id";
    Fields["PROVIDER_TYPE"] = "provider_type";
})(ApiStitchUserIdentity_Fields || (ApiStitchUserIdentity_Fields = {}));
var ApiStitchUserIdentity = (function (_super) {
    ApiStitchUserIdentity_extends(ApiStitchUserIdentity, _super);
    function ApiStitchUserIdentity(id, providerType) {
        return _super.call(this, id, providerType) || this;
    }
    ApiStitchUserIdentity.fromJSON = function (json) {
        return new ApiStitchUserIdentity(json[ApiStitchUserIdentity_Fields.ID], json[ApiStitchUserIdentity_Fields.PROVIDER_TYPE]);
    };
    ApiStitchUserIdentity.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[ApiStitchUserIdentity_Fields.ID] = this.id,
            _a[ApiStitchUserIdentity_Fields.PROVIDER_TYPE] = this.providerType,
            _a;
    };
    return ApiStitchUserIdentity;
}(auth_StitchUserIdentity));
/* harmony default export */ var models_ApiStitchUserIdentity = (ApiStitchUserIdentity);
//# sourceMappingURL=ApiStitchUserIdentity.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/ApiCoreUserProfile.js
var ApiCoreUserProfile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ApiCoreUserProfile_Fields;
(function (Fields) {
    Fields["DATA"] = "data";
    Fields["USER_TYPE"] = "type";
    Fields["IDENTITIES"] = "identities";
})(ApiCoreUserProfile_Fields || (ApiCoreUserProfile_Fields = {}));
var ApiCoreUserProfile_ApiCoreUserProfile = (function (_super) {
    ApiCoreUserProfile_extends(ApiCoreUserProfile, _super);
    function ApiCoreUserProfile(userType, data, identities) {
        return _super.call(this, userType, data, identities) || this;
    }
    ApiCoreUserProfile.fromJSON = function (json) {
        common_Assertions.keyPresent(ApiCoreUserProfile_Fields.USER_TYPE, json);
        common_Assertions.keyPresent(ApiCoreUserProfile_Fields.DATA, json);
        common_Assertions.keyPresent(ApiCoreUserProfile_Fields.IDENTITIES, json);
        return new ApiCoreUserProfile(json[ApiCoreUserProfile_Fields.USER_TYPE], json[ApiCoreUserProfile_Fields.DATA], json[ApiCoreUserProfile_Fields.IDENTITIES].map(models_ApiStitchUserIdentity.fromJSON));
    };
    ApiCoreUserProfile.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[ApiCoreUserProfile_Fields.DATA] = this.data,
            _a[ApiCoreUserProfile_Fields.USER_TYPE] = this.userType,
            _a[ApiCoreUserProfile_Fields.IDENTITIES] = this.identities,
            _a;
    };
    return ApiCoreUserProfile;
}(internal_StitchUserProfileImpl));
/* harmony default export */ var models_ApiCoreUserProfile = (ApiCoreUserProfile_ApiCoreUserProfile);
//# sourceMappingURL=ApiCoreUserProfile.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreStitchUserIdentity.js
var StoreStitchUserIdentity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StoreStitchUserIdentity_Fields;
(function (Fields) {
    Fields["ID"] = "id";
    Fields["PROVIDER_TYPE"] = "provider_type";
})(StoreStitchUserIdentity_Fields || (StoreStitchUserIdentity_Fields = {}));
var StoreStitchUserIdentity = (function (_super) {
    StoreStitchUserIdentity_extends(StoreStitchUserIdentity, _super);
    function StoreStitchUserIdentity(id, providerType) {
        return _super.call(this, id, providerType) || this;
    }
    StoreStitchUserIdentity.decode = function (from) {
        return new StoreStitchUserIdentity(from[StoreStitchUserIdentity_Fields.ID], from[StoreStitchUserIdentity_Fields.PROVIDER_TYPE]);
    };
    StoreStitchUserIdentity.prototype.encode = function () {
        var _a;
        return _a = {},
            _a[StoreStitchUserIdentity_Fields.ID] = this.id,
            _a[StoreStitchUserIdentity_Fields.PROVIDER_TYPE] = this.providerType,
            _a;
    };
    return StoreStitchUserIdentity;
}(auth_StitchUserIdentity));
/* harmony default export */ var models_StoreStitchUserIdentity = (StoreStitchUserIdentity);
//# sourceMappingURL=StoreStitchUserIdentity.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreCoreUserProfile.js
var StoreCoreUserProfile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StoreCoreUserProfile_Fields;
(function (Fields) {
    Fields["DATA"] = "data";
    Fields["USER_TYPE"] = "type";
    Fields["IDENTITIES"] = "identities";
})(StoreCoreUserProfile_Fields || (StoreCoreUserProfile_Fields = {}));
var StoreCoreUserProfile_StoreCoreUserProfile = (function (_super) {
    StoreCoreUserProfile_extends(StoreCoreUserProfile, _super);
    function StoreCoreUserProfile(userType, data, identities) {
        var _this = _super.call(this, userType, data, identities) || this;
        _this.userType = userType;
        _this.data = data;
        _this.identities = identities;
        return _this;
    }
    StoreCoreUserProfile.decode = function (from) {
        return from
            ? new StoreCoreUserProfile(from[StoreCoreUserProfile_Fields.USER_TYPE], from[StoreCoreUserProfile_Fields.DATA], from[StoreCoreUserProfile_Fields.IDENTITIES].map(function (identity) {
                return models_StoreStitchUserIdentity.decode(identity);
            }))
            : undefined;
    };
    StoreCoreUserProfile.prototype.encode = function () {
        var _a;
        return _a = {},
            _a[StoreCoreUserProfile_Fields.DATA] = this.data,
            _a[StoreCoreUserProfile_Fields.USER_TYPE] = this.userType,
            _a[StoreCoreUserProfile_Fields.IDENTITIES] = this.identities.map(function (identity) { return identity.encode(); }),
            _a;
    };
    return StoreCoreUserProfile;
}(internal_StitchUserProfileImpl));
/* harmony default export */ var models_StoreCoreUserProfile = (StoreCoreUserProfile_StoreCoreUserProfile);
//# sourceMappingURL=StoreCoreUserProfile.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/models/StoreAuthInfo.js
var StoreAuthInfo_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var StoreAuthInfo_Fields;
(function (Fields) {
    Fields["USER_ID"] = "user_id";
    Fields["DEVICE_ID"] = "device_id";
    Fields["ACCESS_TOKEN"] = "access_token";
    Fields["REFRESH_TOKEN"] = "refresh_token";
    Fields["LAST_AUTH_ACTIVITY"] = "last_auth_activity";
    Fields["LOGGED_IN_PROVIDER_TYPE"] = "logged_in_provider_type";
    Fields["LOGGED_IN_PROVIDER_NAME"] = "logged_in_provider_name";
    Fields["USER_PROFILE"] = "user_profile";
})(StoreAuthInfo_Fields || (StoreAuthInfo_Fields = {}));
function readActiveUserFromStorage(storage) {
    var rawInfo = storage.get(StoreAuthInfo_StoreAuthInfo.ACTIVE_USER_STORAGE_NAME);
    if (!rawInfo) {
        return undefined;
    }
    return StoreAuthInfo_StoreAuthInfo.decode(JSON.parse(rawInfo));
}
function readCurrentUsersFromStorage(storage) {
    var rawInfo = storage.get(StoreAuthInfo_StoreAuthInfo.ALL_USERS_STORAGE_NAME);
    if (!rawInfo) {
        return new Map();
    }
    var rawArray = JSON.parse(rawInfo);
    if (!Array.isArray(rawArray)) {
        throw new esm_StitchClientError(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
    }
    var userIdToAuthInfoMap = new Map();
    rawArray.forEach(function (rawEntry) {
        var authInfo = StoreAuthInfo_StoreAuthInfo.decode(rawEntry);
        userIdToAuthInfoMap.set(authInfo.userId, authInfo);
    });
    return userIdToAuthInfoMap;
}
function writeActiveUserAuthInfoToStorage(authInfo, storage) {
    if (authInfo.isEmpty) {
        storage.remove(StoreAuthInfo_StoreAuthInfo.ACTIVE_USER_STORAGE_NAME);
        return;
    }
    var info = new StoreAuthInfo_StoreAuthInfo(authInfo.userId, authInfo.deviceId, authInfo.accessToken, authInfo.refreshToken, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.lastAuthActivity, authInfo.userProfile
        ? new models_StoreCoreUserProfile(authInfo.userProfile.userType, authInfo.userProfile.data, authInfo.userProfile.identities.map(function (identity) {
            return new models_StoreStitchUserIdentity(identity.id, identity.providerType);
        }))
        : undefined);
    storage.set(StoreAuthInfo_StoreAuthInfo.ACTIVE_USER_STORAGE_NAME, JSON.stringify(info.encode()));
}
function writeAllUsersAuthInfoToStorage(currentUsersAuthInfo, storage) {
    var encodedStoreInfos = [];
    currentUsersAuthInfo.forEach(function (authInfo, userId) {
        var storeInfo = new StoreAuthInfo_StoreAuthInfo(userId, authInfo.deviceId, authInfo.accessToken, authInfo.refreshToken, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.lastAuthActivity, authInfo.userProfile
            ? new models_StoreCoreUserProfile(authInfo.userProfile.userType, authInfo.userProfile.data, authInfo.userProfile.identities.map(function (identity) {
                return new models_StoreStitchUserIdentity(identity.id, identity.providerType);
            }))
            : undefined);
        encodedStoreInfos.push(storeInfo.encode());
    });
    storage.set(StoreAuthInfo_StoreAuthInfo.ALL_USERS_STORAGE_NAME, JSON.stringify(encodedStoreInfos));
}
var StoreAuthInfo_StoreAuthInfo = (function (_super) {
    StoreAuthInfo_extends(StoreAuthInfo, _super);
    function StoreAuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) {
        var _this = _super.call(this, userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, lastAuthActivity, userProfile) || this;
        _this.userProfile = userProfile;
        return _this;
    }
    StoreAuthInfo.decode = function (from) {
        var userId = from[StoreAuthInfo_Fields.USER_ID];
        var deviceId = from[StoreAuthInfo_Fields.DEVICE_ID];
        var accessToken = from[StoreAuthInfo_Fields.ACCESS_TOKEN];
        var refreshToken = from[StoreAuthInfo_Fields.REFRESH_TOKEN];
        var loggedInProviderType = from[StoreAuthInfo_Fields.LOGGED_IN_PROVIDER_TYPE];
        var loggedInProviderName = from[StoreAuthInfo_Fields.LOGGED_IN_PROVIDER_NAME];
        var userProfile = from[StoreAuthInfo_Fields.USER_PROFILE];
        var lastAuthActivityMillisSinceEpoch = from[StoreAuthInfo_Fields.LAST_AUTH_ACTIVITY];
        return new StoreAuthInfo(userId, deviceId, accessToken, refreshToken, loggedInProviderType, loggedInProviderName, new Date(lastAuthActivityMillisSinceEpoch), models_StoreCoreUserProfile.decode(userProfile));
    };
    StoreAuthInfo.prototype.encode = function () {
        var to = {};
        to[StoreAuthInfo_Fields.USER_ID] = this.userId;
        to[StoreAuthInfo_Fields.ACCESS_TOKEN] = this.accessToken;
        to[StoreAuthInfo_Fields.REFRESH_TOKEN] = this.refreshToken;
        to[StoreAuthInfo_Fields.DEVICE_ID] = this.deviceId;
        to[StoreAuthInfo_Fields.LOGGED_IN_PROVIDER_NAME] = this.loggedInProviderName;
        to[StoreAuthInfo_Fields.LOGGED_IN_PROVIDER_TYPE] = this.loggedInProviderType;
        to[StoreAuthInfo_Fields.LAST_AUTH_ACTIVITY] = this.lastAuthActivity
            ? this.lastAuthActivity.getTime()
            : undefined;
        to[StoreAuthInfo_Fields.USER_PROFILE] = this.userProfile
            ? this.userProfile.encode()
            : undefined;
        return to;
    };
    StoreAuthInfo.ACTIVE_USER_STORAGE_NAME = "auth_info";
    StoreAuthInfo.ALL_USERS_STORAGE_NAME = "all_auth_infos";
    return StoreAuthInfo;
}(internal_AuthInfo));

//# sourceMappingURL=StoreAuthInfo.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchAuth.js
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
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
























var OPTIONS = "options";
var DEVICE = "device";
var CoreStitchAuth_CoreStitchAuth = (function () {
    function CoreStitchAuth(requestClient, authRoutes, storage, useTokenRefresher) {
        if (useTokenRefresher === void 0) { useTokenRefresher = true; }
        this.requestClient = requestClient;
        this.authRoutes = authRoutes;
        this.storage = storage;
        var allUsersAuthInfo;
        try {
            allUsersAuthInfo = readCurrentUsersFromStorage(storage);
        }
        catch (e) {
            throw new esm_StitchClientError(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
        }
        this.allUsersAuthInfo = allUsersAuthInfo;
        var activeUserAuthInfo;
        try {
            activeUserAuthInfo = readActiveUserFromStorage(storage);
        }
        catch (e) {
            throw new esm_StitchClientError(StitchClientErrorCode.CouldNotLoadPersistedAuthInfo);
        }
        this.activeUserAuthInfo =
            activeUserAuthInfo === undefined ? internal_AuthInfo.empty() : activeUserAuthInfo;
        if (this.activeUserAuthInfo.hasUser) {
            this.currentUser = this.prepUser(this.activeUserAuthInfo);
        }
        if (useTokenRefresher) {
            this.accessTokenRefresher = new internal_AccessTokenRefresher(this);
            this.accessTokenRefresher.run();
        }
    }
    Object.defineProperty(CoreStitchAuth.prototype, "authInfo", {
        get: function () {
            return this.activeUserAuthInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser !== undefined && this.currentUser.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "user", {
        get: function () {
            return this.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "hasDeviceId", {
        get: function () {
            return (this.activeUserAuthInfo.deviceId !== undefined &&
                this.activeUserAuthInfo.deviceId !== "" &&
                this.activeUserAuthInfo.deviceId !== "000000000000000000000000");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchAuth.prototype, "deviceId", {
        get: function () {
            if (!this.hasDeviceId) {
                return undefined;
            }
            return this.activeUserAuthInfo.deviceId;
        },
        enumerable: true,
        configurable: true
    });
    CoreStitchAuth.prototype.listUsers = function () {
        var _this = this;
        var list = [];
        this.allUsersAuthInfo.forEach(function (authInfo) {
            list.push(_this.prepUser(authInfo));
        });
        return list;
    };
    CoreStitchAuth.prototype.doAuthenticatedRequest = function (stitchReq, authInfo) {
        var _this = this;
        try {
            return this.requestClient
                .doRequest(this.prepareAuthRequest(stitchReq, authInfo || this.activeUserAuthInfo))
                .catch(function (err) {
                return _this.handleAuthFailure(err, stitchReq);
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    CoreStitchAuth.prototype.doAuthenticatedRequestWithDecoder = function (stitchReq, decoder) {
        return this.doAuthenticatedRequest(stitchReq)
            .then(function (response) {
            var obj = bson_browser_esm["a" /* EJSON */].parse(response.body, { strict: false });
            if (decoder) {
                return decoder.decode(obj);
            }
            return obj;
        })
            .catch(function (err) {
            throw wrapDecodingError(err);
        });
    };
    CoreStitchAuth.prototype.openAuthenticatedEventStream = function (stitchReq, open) {
        var _this = this;
        if (open === void 0) { open = true; }
        if (!this.isLoggedIn) {
            throw new esm_StitchClientError(StitchClientErrorCode.MustAuthenticateFirst);
        }
        var authToken = stitchReq.useRefreshToken ?
            this.activeUserAuthInfo.refreshToken : this.activeUserAuthInfo.accessToken;
        return this.requestClient.doStreamRequest(stitchReq.builder
            .withPath(stitchReq.path + "&stitch_at=" + authToken)
            .build(), open, function () { return _this.openAuthenticatedEventStream(stitchReq, false); })
            .catch(function (err) {
            return _this.handleAuthFailureForEventStream(err, stitchReq, open);
        });
    };
    CoreStitchAuth.prototype.openAuthenticatedStreamWithDecoder = function (stitchReq, decoder) {
        return this.openAuthenticatedEventStream(stitchReq)
            .then(function (eventStream) {
            return new esm_Stream(eventStream, decoder);
        });
    };
    CoreStitchAuth.prototype.refreshAccessToken = function () {
        var _this = this;
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder()
            .withRefreshToken()
            .withPath(this.authRoutes.sessionRoute)
            .withMethod(net_Method.POST);
        return this.doAuthenticatedRequest(reqBuilder.build()).then(function (response) {
            try {
                var partialInfo = models_ApiAuthInfo.fromJSON(JSON.parse(response.body));
                _this.activeUserAuthInfo = _this.activeUserAuthInfo.merge(partialInfo);
            }
            catch (err) {
                throw new esm_StitchRequestError(err, StitchRequestErrorCode.DECODING_ERROR);
            }
            try {
                writeActiveUserAuthInfoToStorage(_this.activeUserAuthInfo, _this.storage);
                _this.allUsersAuthInfo.set(_this.activeUserAuthInfo.userId, _this.activeUserAuthInfo);
                writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
            }
            catch (err) {
                throw new esm_StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo);
            }
        });
    };
    CoreStitchAuth.prototype.switchToUserWithId = function (userId) {
        var authInfo = this.allUsersAuthInfo.get(userId);
        if (authInfo === undefined) {
            throw new esm_StitchClientError(StitchClientErrorCode.UserNotFound);
        }
        if (!authInfo.isLoggedIn) {
            throw new esm_StitchClientError(StitchClientErrorCode.UserNotLoggedIn);
        }
        if (this.activeUserAuthInfo.hasUser) {
            this.allUsersAuthInfo.set(this.activeUserAuthInfo.userId, this.activeUserAuthInfo.withNewAuthActivityTime());
        }
        var newAuthInfo = authInfo.withNewAuthActivityTime();
        this.allUsersAuthInfo.set(userId, newAuthInfo);
        writeActiveUserAuthInfoToStorage(newAuthInfo, this.storage);
        this.activeUserAuthInfo = newAuthInfo;
        var previousUser = this.currentUser;
        this.currentUser = this.prepUser(newAuthInfo);
        this.onAuthEvent();
        this.dispatchAuthEvent({
            currentActiveUser: this.currentUser,
            kind: AuthEventKind.ActiveUserChanged,
            previousActiveUser: previousUser
        });
        return this.currentUser;
    };
    CoreStitchAuth.prototype.loginWithCredentialInternal = function (credential) {
        var _this = this;
        var e_1, _a;
        if (credential instanceof internal_StitchAuthResponseCredential) {
            return this.processLogin(credential, credential.authInfo, credential.asLink).then(function (user) {
                _this.dispatchAuthEvent({
                    kind: AuthEventKind.UserLoggedIn,
                    loggedInUser: user
                });
                return user;
            });
        }
        if (credential.providerCapabilities.reusesExistingSession) {
            try {
                for (var _b = __values(this.allUsersAuthInfo), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), userId = _d[0], authInfo = _d[1];
                    if (authInfo.loggedInProviderType === credential.providerType) {
                        if (authInfo.isLoggedIn) {
                            try {
                                return Promise.resolve(this.switchToUserWithId(userId));
                            }
                            catch (error) {
                                return Promise.reject(error);
                            }
                        }
                        if (authInfo.userId !== undefined) {
                            this.removeUserWithIdInternal(authInfo.userId);
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return this.doLogin(credential, false);
    };
    CoreStitchAuth.prototype.linkUserWithCredentialInternal = function (user, credential) {
        if (this.currentUser !== undefined && user.id !== this.currentUser.id) {
            return Promise.reject(new esm_StitchClientError(StitchClientErrorCode.UserNoLongerValid));
        }
        return this.doLogin(credential, true);
    };
    CoreStitchAuth.prototype.logoutInternal = function () {
        if (!this.isLoggedIn || !this.currentUser) {
            return Promise.resolve();
        }
        return this.logoutUserWithIdInternal(this.currentUser.id);
    };
    CoreStitchAuth.prototype.logoutUserWithIdInternal = function (userId) {
        var _this = this;
        var authInfo = this.allUsersAuthInfo.get(userId);
        if (authInfo === undefined) {
            return Promise.reject(new esm_StitchClientError(StitchClientErrorCode.UserNotFound));
        }
        if (!authInfo.isLoggedIn) {
            return Promise.resolve();
        }
        var clearAuthBlock = function () {
            _this.clearUserAuthTokens(authInfo.userId);
            if (authInfo.loggedInProviderType === anonymous_AnonymousAuthProvider.TYPE) {
                _this.removeUserWithIdInternal(authInfo.userId);
            }
        };
        return this.doLogout(authInfo)
            .then(function () {
            clearAuthBlock();
        })
            .catch(function () {
            clearAuthBlock();
        });
    };
    CoreStitchAuth.prototype.removeUserInternal = function () {
        if (!this.isLoggedIn || this.currentUser === undefined) {
            return Promise.resolve();
        }
        return this.removeUserWithIdInternal(this.currentUser.id);
    };
    CoreStitchAuth.prototype.removeUserWithIdInternal = function (userId) {
        var _this = this;
        var authInfo = this.allUsersAuthInfo.get(userId);
        if (authInfo === undefined) {
            return Promise.reject(new esm_StitchClientError(StitchClientErrorCode.UserNotFound));
        }
        var removeBlock = function () {
            _this.clearUserAuthTokens(authInfo.userId);
            _this.allUsersAuthInfo.delete(userId);
            writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
            var removedUser = _this.prepUser(authInfo.loggedOut());
            _this.onAuthEvent();
            _this.dispatchAuthEvent({
                kind: AuthEventKind.UserRemoved,
                removedUser: removedUser
            });
        };
        if (authInfo.isLoggedIn) {
            return this.doLogout(authInfo).then(function () {
                removeBlock();
            }).catch(function (err) {
                removeBlock();
            });
        }
        removeBlock();
        return Promise.resolve();
    };
    CoreStitchAuth.prototype.close = function () {
        if (this.accessTokenRefresher) {
            this.accessTokenRefresher.stop();
        }
    };
    CoreStitchAuth.prototype.prepareAuthRequest = function (stitchReq, authInfo) {
        if (!authInfo.isLoggedIn) {
            throw new esm_StitchClientError(StitchClientErrorCode.MustAuthenticateFirst);
        }
        var newReq = stitchReq.builder;
        var newHeaders = newReq.headers || {};
        if (stitchReq.useRefreshToken) {
            newHeaders[net_Headers.AUTHORIZATION] = net_Headers.getAuthorizationBearer(authInfo.refreshToken);
        }
        else {
            newHeaders[net_Headers.AUTHORIZATION] = net_Headers.getAuthorizationBearer(authInfo.accessToken);
        }
        newReq.withHeaders(newHeaders);
        return newReq.build();
    };
    CoreStitchAuth.prototype.handleAuthFailureForEventStream = function (ex, req, open) {
        var _this = this;
        if (open === void 0) { open = true; }
        if (!(ex instanceof esm_StitchServiceError) ||
            ex.errorCode !== StitchServiceErrorCode.InvalidSession) {
            throw ex;
        }
        if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
            this.clearActiveUserAuth();
            throw ex;
        }
        return this.tryRefreshAccessToken(req.startedAt).then(function () {
            return _this.openAuthenticatedEventStream(req.builder.withShouldRefreshOnFailure(false).build(), open);
        });
    };
    CoreStitchAuth.prototype.handleAuthFailure = function (ex, req) {
        var _this = this;
        if (!(ex instanceof esm_StitchServiceError) ||
            ex.errorCode !== StitchServiceErrorCode.InvalidSession) {
            throw ex;
        }
        if (req.useRefreshToken || !req.shouldRefreshOnFailure) {
            this.clearActiveUserAuth();
            throw ex;
        }
        return this.tryRefreshAccessToken(req.startedAt).then(function () {
            return _this.doAuthenticatedRequest(req.builder.withShouldRefreshOnFailure(false).build());
        });
    };
    CoreStitchAuth.prototype.tryRefreshAccessToken = function (reqStartedAt) {
        if (!this.isLoggedIn) {
            throw new esm_StitchClientError(StitchClientErrorCode.LoggedOutDuringRequest);
        }
        try {
            var jwt = internal_JWT.fromEncoded(this.activeUserAuthInfo.accessToken);
            if (jwt.issuedAt >= reqStartedAt) {
                return Promise.resolve();
            }
        }
        catch (e) {
        }
        return this.refreshAccessToken();
    };
    CoreStitchAuth.prototype.prepUser = function (authInfo) {
        return this.userFactory.makeUser(authInfo.userId, authInfo.loggedInProviderType, authInfo.loggedInProviderName, authInfo.isLoggedIn, authInfo.lastAuthActivity, authInfo.userProfile);
    };
    CoreStitchAuth.prototype.attachAuthOptions = function (authBody) {
        var options = {};
        options[DEVICE] = this.deviceInfo;
        authBody[OPTIONS] = options;
    };
    CoreStitchAuth.prototype.doLogin = function (credential, asLinkRequest) {
        var _this = this;
        var previousActiveUser = this.currentUser;
        return this.doLoginRequest(credential, asLinkRequest)
            .then(function (response) { return _this.processLoginResponse(credential, response, asLinkRequest); })
            .then(function (user) {
            _this.onAuthEvent();
            if (asLinkRequest) {
                _this.dispatchAuthEvent({
                    kind: AuthEventKind.UserLinked,
                    linkedUser: user
                });
            }
            else {
                _this.dispatchAuthEvent({
                    kind: AuthEventKind.UserLoggedIn,
                    loggedInUser: user,
                });
                _this.dispatchAuthEvent({
                    currentActiveUser: user,
                    kind: AuthEventKind.ActiveUserChanged,
                    previousActiveUser: previousActiveUser
                });
            }
            return user;
        });
    };
    CoreStitchAuth.prototype.doLoginRequest = function (credential, asLinkRequest) {
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder.withMethod(net_Method.POST);
        if (asLinkRequest) {
            reqBuilder.withPath(this.authRoutes.getAuthProviderLinkRoute(credential.providerName));
        }
        else {
            reqBuilder.withPath(this.authRoutes.getAuthProviderLoginRoute(credential.providerName));
        }
        var material = credential.material;
        this.attachAuthOptions(material);
        reqBuilder.withDocument(material);
        if (!asLinkRequest) {
            return this.requestClient.doRequest(reqBuilder.build());
        }
        var linkRequest = new StitchAuthDocRequest_StitchAuthDocRequest(reqBuilder.build(), reqBuilder.document);
        return this.doAuthenticatedRequest(linkRequest);
    };
    CoreStitchAuth.prototype.processLogin = function (credential, newAuthInfo, asLinkRequest) {
        var _this = this;
        var oldActiveUserInfo = this.activeUserAuthInfo;
        var oldActiveUser = this.currentUser;
        newAuthInfo = this.activeUserAuthInfo.merge(new internal_AuthInfo(newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, undefined, undefined));
        this.activeUserAuthInfo = newAuthInfo;
        this.currentUser = this.userFactory.makeUser(this.activeUserAuthInfo.userId, credential.providerType, credential.providerName, this.activeUserAuthInfo.isLoggedIn, new Date(), undefined);
        return this.doGetUserProfile()
            .then(function (profile) {
            if (oldActiveUserInfo.hasUser) {
                _this.allUsersAuthInfo.set(oldActiveUserInfo.userId, oldActiveUserInfo.withNewAuthActivityTime());
            }
            newAuthInfo = newAuthInfo.merge(new internal_AuthInfo(newAuthInfo.userId, newAuthInfo.deviceId, newAuthInfo.accessToken, newAuthInfo.refreshToken, credential.providerType, credential.providerName, new Date(), profile));
            var newUserAdded = !_this.allUsersAuthInfo.has(newAuthInfo.userId);
            try {
                writeActiveUserAuthInfoToStorage(newAuthInfo, _this.storage);
                _this.allUsersAuthInfo.set(newAuthInfo.userId, newAuthInfo);
                writeAllUsersAuthInfoToStorage(_this.allUsersAuthInfo, _this.storage);
            }
            catch (err) {
                _this.activeUserAuthInfo = oldActiveUserInfo;
                _this.currentUser = oldActiveUser;
                if (newAuthInfo.userId !== oldActiveUserInfo.userId && newAuthInfo.userId) {
                    _this.allUsersAuthInfo.delete(newAuthInfo.userId);
                }
                throw new esm_StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo);
            }
            _this.activeUserAuthInfo = newAuthInfo;
            _this.currentUser = _this.userFactory.makeUser(_this.activeUserAuthInfo.userId, credential.providerType, credential.providerName, _this.activeUserAuthInfo.isLoggedIn, _this.activeUserAuthInfo.lastAuthActivity, profile);
            if (newUserAdded) {
                _this.onAuthEvent();
                _this.dispatchAuthEvent({
                    addedUser: _this.currentUser,
                    kind: AuthEventKind.UserAdded
                });
            }
            return _this.currentUser;
        })
            .catch(function (err) {
            if (err instanceof esm_StitchClientError) {
                throw err;
            }
            if (asLinkRequest || oldActiveUserInfo.hasUser) {
                var linkedAuthInfo = _this.activeUserAuthInfo;
                _this.activeUserAuthInfo = oldActiveUserInfo;
                _this.currentUser = oldActiveUser;
                if (asLinkRequest) {
                    _this.activeUserAuthInfo = _this.activeUserAuthInfo.withAuthProvider(linkedAuthInfo.loggedInProviderType, linkedAuthInfo.loggedInProviderName);
                }
            }
            else {
                _this.clearActiveUserAuth();
            }
            throw err;
        });
    };
    CoreStitchAuth.prototype.processLoginResponse = function (credential, response, asLinkRequest) {
        try {
            if (!response) {
                throw new esm_StitchServiceError("the login response could not be processed for credential: " + credential + ";" +
                    "response was undefined");
            }
            if (!response.body) {
                throw new esm_StitchServiceError("response with status code " + response.statusCode + " has empty body");
            }
            return this.processLogin(credential, models_ApiAuthInfo.fromJSON(JSON.parse(response.body)), asLinkRequest);
        }
        catch (err) {
            throw new esm_StitchRequestError(err, StitchRequestErrorCode.DECODING_ERROR);
        }
    };
    CoreStitchAuth.prototype.doGetUserProfile = function () {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder.withMethod(net_Method.GET).withPath(this.authRoutes.profileRoute);
        return this.doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) { return models_ApiCoreUserProfile.fromJSON(JSON.parse(response.body)); })
            .catch(function (err) {
            if (err instanceof esm_StitchError) {
                throw err;
            }
            else {
                throw new esm_StitchRequestError(err, StitchRequestErrorCode.DECODING_ERROR);
            }
        });
    };
    CoreStitchAuth.prototype.doLogout = function (authInfo) {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withRefreshToken()
            .withPath(this.authRoutes.sessionRoute)
            .withMethod(net_Method.DELETE);
        return this.doAuthenticatedRequest(reqBuilder.build(), authInfo).then(function () {
            return;
        });
    };
    CoreStitchAuth.prototype.clearActiveUserAuth = function () {
        if (!this.isLoggedIn) {
            return;
        }
        this.clearUserAuthTokens(this.activeUserAuthInfo.userId);
    };
    CoreStitchAuth.prototype.clearUserAuthTokens = function (userId) {
        var unclearedAuthInfo = this.allUsersAuthInfo.get(userId);
        if (unclearedAuthInfo === undefined) {
            if (this.activeUserAuthInfo.userId !== userId) {
                throw new esm_StitchClientError(StitchClientErrorCode.UserNotFound);
            }
        }
        else if (!unclearedAuthInfo.isLoggedIn) {
            return;
        }
        try {
            var loggedOutUser = void 0;
            if (unclearedAuthInfo) {
                var loggedOutAuthInfo = unclearedAuthInfo.loggedOut();
                this.allUsersAuthInfo.set(userId, loggedOutAuthInfo);
                writeAllUsersAuthInfoToStorage(this.allUsersAuthInfo, this.storage);
                loggedOutUser = this.userFactory.makeUser(loggedOutAuthInfo.userId, loggedOutAuthInfo.loggedInProviderType, loggedOutAuthInfo.loggedInProviderName, loggedOutAuthInfo.isLoggedIn, loggedOutAuthInfo.lastAuthActivity, loggedOutAuthInfo.userProfile);
            }
            var wasActiveUser = false;
            if (this.activeUserAuthInfo.hasUser && this.activeUserAuthInfo.userId === userId) {
                wasActiveUser = true;
                this.activeUserAuthInfo = this.activeUserAuthInfo.withClearedUser();
                this.currentUser = undefined;
                writeActiveUserAuthInfoToStorage(this.activeUserAuthInfo, this.storage);
            }
            if (loggedOutUser) {
                this.onAuthEvent();
                this.dispatchAuthEvent({
                    kind: AuthEventKind.UserLoggedOut,
                    loggedOutUser: loggedOutUser,
                });
                if (wasActiveUser) {
                    this.dispatchAuthEvent({
                        currentActiveUser: undefined,
                        kind: AuthEventKind.ActiveUserChanged,
                        previousActiveUser: loggedOutUser
                    });
                }
            }
        }
        catch (err) {
            throw new esm_StitchClientError(StitchClientErrorCode.CouldNotPersistAuthInfo);
        }
    };
    return CoreStitchAuth;
}());
/* harmony default export */ var internal_CoreStitchAuth = (CoreStitchAuth_CoreStitchAuth);
//# sourceMappingURL=CoreStitchAuth.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/CoreStitchUserImpl.js

var CoreStitchUserImpl_CoreStitchUserImpl = (function () {
    function CoreStitchUserImpl(id, loggedInProviderType, loggedInProviderName, isLoggedIn, lastAuthActivity, profile) {
        this.id = id;
        this.loggedInProviderType = loggedInProviderType;
        this.loggedInProviderName = loggedInProviderName;
        this.profile =
            profile === undefined ? internal_StitchUserProfileImpl.empty() : profile;
        this.isLoggedIn = isLoggedIn;
        this.lastAuthActivity = lastAuthActivity;
    }
    Object.defineProperty(CoreStitchUserImpl.prototype, "userType", {
        get: function () {
            return this.profile.userType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreStitchUserImpl.prototype, "identities", {
        get: function () {
            return this.profile.identities;
        },
        enumerable: true,
        configurable: true
    });
    CoreStitchUserImpl.prototype.equals = function (other) {
        return this.id === other.id
            && JSON.stringify(this.identities) === JSON.stringify(other.identities)
            && this.isLoggedIn === other.isLoggedIn
            && this.loggedInProviderName === other.loggedInProviderName
            && this.loggedInProviderType === other.loggedInProviderType
            && JSON.stringify(this.profile) === JSON.stringify(other.profile);
    };
    return CoreStitchUserImpl;
}());
/* harmony default export */ var internal_CoreStitchUserImpl = (CoreStitchUserImpl_CoreStitchUserImpl);
//# sourceMappingURL=CoreStitchUserImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/internal/DeviceFields.js
var DeviceFields;
(function (DeviceFields) {
    DeviceFields["DEVICE_ID"] = "deviceId";
    DeviceFields["APP_ID"] = "appId";
    DeviceFields["APP_VERSION"] = "appVersion";
    DeviceFields["PLATFORM"] = "platform";
    DeviceFields["PLATFORM_VERSION"] = "platformVersion";
    DeviceFields["SDK_VERSION"] = "sdkVersion";
})(DeviceFields || (DeviceFields = {}));
/* harmony default export */ var internal_DeviceFields = (DeviceFields);
//# sourceMappingURL=DeviceFields.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/ProviderCapabilities.js
var ProviderCapabilities = (function () {
    function ProviderCapabilities(reusesExistingSession) {
        if (reusesExistingSession === void 0) { reusesExistingSession = false; }
        this.reusesExistingSession = reusesExistingSession;
    }
    return ProviderCapabilities;
}());
/* harmony default export */ var auth_ProviderCapabilities = (ProviderCapabilities);
//# sourceMappingURL=ProviderCapabilities.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/anonymous/AnonymousCredential.js


var AnonymousCredential_AnonymousCredential = (function () {
    function AnonymousCredential(providerName) {
        if (providerName === void 0) { providerName = anonymous_AnonymousAuthProvider.DEFAULT_NAME; }
        this.providerType = anonymous_AnonymousAuthProvider.TYPE;
        this.material = {};
        this.providerCapabilities = new auth_ProviderCapabilities(true);
        this.providerName = providerName;
    }
    return AnonymousCredential;
}());
/* harmony default export */ var anonymous_AnonymousCredential = (AnonymousCredential_AnonymousCredential);
//# sourceMappingURL=AnonymousCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomAuthProvider.js
var CustomAuthProvider = (function () {
    function CustomAuthProvider() {
    }
    CustomAuthProvider.TYPE = "custom-token";
    CustomAuthProvider.DEFAULT_NAME = "custom-token";
    return CustomAuthProvider;
}());
/* harmony default export */ var custom_CustomAuthProvider = (CustomAuthProvider);
//# sourceMappingURL=CustomAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/custom/CustomCredential.js


var CustomCredential_Fields;
(function (Fields) {
    Fields["TOKEN"] = "token";
})(CustomCredential_Fields || (CustomCredential_Fields = {}));
var CustomCredential_CustomCredential = (function () {
    function CustomCredential(token, providerName) {
        var _a;
        if (providerName === void 0) { providerName = custom_CustomAuthProvider.DEFAULT_NAME; }
        this.providerType = custom_CustomAuthProvider.TYPE;
        this.providerCapabilities = new auth_ProviderCapabilities(false);
        this.providerName = providerName;
        this.token = token;
        this.material = (_a = {}, _a[CustomCredential_Fields.TOKEN] = this.token, _a);
    }
    return CustomCredential;
}());
/* harmony default export */ var custom_CustomCredential = (CustomCredential_CustomCredential);
//# sourceMappingURL=CustomCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookAuthProvider.js
var FacebookAuthProvider = (function () {
    function FacebookAuthProvider() {
    }
    FacebookAuthProvider.TYPE = "oauth2-facebook";
    FacebookAuthProvider.DEFAULT_NAME = "oauth2-facebook";
    return FacebookAuthProvider;
}());
/* harmony default export */ var facebook_FacebookAuthProvider = (FacebookAuthProvider);
//# sourceMappingURL=FacebookAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/facebook/FacebookCredential.js


var FacebookCredential_Fields;
(function (Fields) {
    Fields["ACCESS_TOKEN"] = "accessToken";
})(FacebookCredential_Fields || (FacebookCredential_Fields = {}));
var FacebookCredential_FacebookCredential = (function () {
    function FacebookCredential(accessToken, providerName) {
        var _a;
        if (providerName === void 0) { providerName = facebook_FacebookAuthProvider.DEFAULT_NAME; }
        this.providerType = facebook_FacebookAuthProvider.TYPE;
        this.providerName = providerName;
        this.accessToken = accessToken;
        this.material = (_a = {}, _a[FacebookCredential_Fields.ACCESS_TOKEN] = this.accessToken, _a);
    }
    Object.defineProperty(FacebookCredential.prototype, "providerCapabilities", {
        get: function () {
            return new auth_ProviderCapabilities(false);
        },
        enumerable: true,
        configurable: true
    });
    return FacebookCredential;
}());
/* harmony default export */ var facebook_FacebookCredential = (FacebookCredential_FacebookCredential);
//# sourceMappingURL=FacebookCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/function/FunctionAuthProvider.js
var FunctionAuthProvider = (function () {
    function FunctionAuthProvider() {
    }
    FunctionAuthProvider.TYPE = "custom-function";
    FunctionAuthProvider.DEFAULT_NAME = "custom-function";
    return FunctionAuthProvider;
}());
/* harmony default export */ var function_FunctionAuthProvider = (FunctionAuthProvider);
//# sourceMappingURL=FunctionAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/function/FunctionCredential.js


var FunctionCredential_FunctionCredential = (function () {
    function FunctionCredential(payload, providerName) {
        if (providerName === void 0) { providerName = function_FunctionAuthProvider.DEFAULT_NAME; }
        this.providerType = function_FunctionAuthProvider.TYPE;
        this.providerName = providerName;
        this.material = payload;
    }
    Object.defineProperty(FunctionCredential.prototype, "providerCapabilities", {
        get: function () {
            return new auth_ProviderCapabilities(false);
        },
        enumerable: true,
        configurable: true
    });
    return FunctionCredential;
}());
/* harmony default export */ var function_FunctionCredential = (FunctionCredential_FunctionCredential);
//# sourceMappingURL=FunctionCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleAuthProvider.js
var GoogleAuthProvider = (function () {
    function GoogleAuthProvider() {
    }
    GoogleAuthProvider.TYPE = "oauth2-google";
    GoogleAuthProvider.DEFAULT_NAME = "oauth2-google";
    return GoogleAuthProvider;
}());
/* harmony default export */ var google_GoogleAuthProvider = (GoogleAuthProvider);
//# sourceMappingURL=GoogleAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/google/GoogleCredential.js


var GoogleCredential_Fields;
(function (Fields) {
    Fields["AUTH_CODE"] = "authCode";
})(GoogleCredential_Fields || (GoogleCredential_Fields = {}));
var GoogleCredential_GoogleCredential = (function () {
    function GoogleCredential(authCode, providerName) {
        var _a;
        if (providerName === void 0) { providerName = google_GoogleAuthProvider.DEFAULT_NAME; }
        this.providerType = google_GoogleAuthProvider.TYPE;
        this.providerCapabilities = new auth_ProviderCapabilities(false);
        this.providerName = providerName;
        this.authCode = authCode;
        this.material = (_a = {}, _a[GoogleCredential_Fields.AUTH_CODE] = this.authCode, _a);
    }
    return GoogleCredential;
}());
/* harmony default export */ var google_GoogleCredential = (GoogleCredential_GoogleCredential);
//# sourceMappingURL=GoogleCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyAuthProvider.js
var ServerApiKeyAuthProvider = (function () {
    function ServerApiKeyAuthProvider() {
    }
    ServerApiKeyAuthProvider.TYPE = "api-key";
    ServerApiKeyAuthProvider.DEFAULT_NAME = "api-key";
    return ServerApiKeyAuthProvider;
}());
/* harmony default export */ var serverapikey_ServerApiKeyAuthProvider = (ServerApiKeyAuthProvider);
//# sourceMappingURL=ServerApiKeyAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/serverapikey/ServerApiKeyCredential.js


var ServerApiKeyCredential_Fields;
(function (Fields) {
    Fields["KEY"] = "key";
})(ServerApiKeyCredential_Fields || (ServerApiKeyCredential_Fields = {}));
var ServerApiKeyCredential_ServerApiKeyCredential = (function () {
    function ServerApiKeyCredential(key, providerName) {
        var _a;
        if (providerName === void 0) { providerName = serverapikey_ServerApiKeyAuthProvider.DEFAULT_NAME; }
        this.providerType = serverapikey_ServerApiKeyAuthProvider.TYPE;
        this.providerCapabilities = new auth_ProviderCapabilities(false);
        this.providerName = providerName;
        this.key = key;
        this.material = (_a = {}, _a[ServerApiKeyCredential_Fields.KEY] = this.key, _a);
    }
    return ServerApiKeyCredential;
}());
/* harmony default export */ var serverapikey_ServerApiKeyCredential = (ServerApiKeyCredential_ServerApiKeyCredential);
//# sourceMappingURL=ServerApiKeyCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/internal/CoreAuthProviderClient.js
var CoreAuthProviderClient = (function () {
    function CoreAuthProviderClient(providerName, requestClient, baseRoute) {
        this.providerName = providerName;
        this.requestClient = requestClient;
        this.baseRoute = baseRoute;
    }
    return CoreAuthProviderClient;
}());
/* harmony default export */ var internal_CoreAuthProviderClient = (CoreAuthProviderClient);
//# sourceMappingURL=CoreAuthProviderClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/models/UserApiKey.js


var UserApiKey_Fields;
(function (Fields) {
    Fields["ID"] = "_id";
    Fields["KEY"] = "key";
    Fields["NAME"] = "name";
    Fields["DISABLED"] = "disabled";
})(UserApiKey_Fields || (UserApiKey_Fields = {}));
var UserApiKey_UserApiKey = (function () {
    function UserApiKey(id, key, name, disabled) {
        this.id = bson_browser_esm["b" /* default */].ObjectID.createFromHexString(id);
        this.key = key;
        this.name = name;
        this.disabled = disabled;
    }
    UserApiKey.readFromApi = function (json) {
        var body = typeof json === "string" ? JSON.parse(json) : json;
        common_Assertions.keyPresent(UserApiKey_Fields.ID, body);
        common_Assertions.keyPresent(UserApiKey_Fields.NAME, body);
        common_Assertions.keyPresent(UserApiKey_Fields.DISABLED, body);
        return new UserApiKey(body[UserApiKey_Fields.ID], body[UserApiKey_Fields.KEY], body[UserApiKey_Fields.NAME], body[UserApiKey_Fields.DISABLED]);
    };
    UserApiKey.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[UserApiKey_Fields.ID] = this.id,
            _a[UserApiKey_Fields.KEY] = this.key,
            _a[UserApiKey_Fields.NAME] = this.name,
            _a[UserApiKey_Fields.DISABLED] = this.disabled,
            _a;
    };
    return UserApiKey;
}());
/* harmony default export */ var models_UserApiKey = (UserApiKey_UserApiKey);
//# sourceMappingURL=UserApiKey.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyAuthProvider.js
var UserApiKeyAuthProvider = (function () {
    function UserApiKeyAuthProvider() {
    }
    UserApiKeyAuthProvider.TYPE = "api-key";
    UserApiKeyAuthProvider.DEFAULT_NAME = "api-key";
    return UserApiKeyAuthProvider;
}());
/* harmony default export */ var userapikey_UserApiKeyAuthProvider = (UserApiKeyAuthProvider);
//# sourceMappingURL=UserApiKeyAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/CoreUserApiKeyAuthProviderClient.js
var CoreUserApiKeyAuthProviderClient_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var ApiKeyFields;
(function (ApiKeyFields) {
    ApiKeyFields["NAME"] = "name";
})(ApiKeyFields || (ApiKeyFields = {}));
var CoreUserApiKeyAuthProviderClient_CoreUserApiKeyAuthProviderClient = (function (_super) {
    CoreUserApiKeyAuthProviderClient_extends(CoreUserApiKeyAuthProviderClient, _super);
    function CoreUserApiKeyAuthProviderClient(requestClient, authRoutes) {
        var _this = this;
        var baseRoute = authRoutes.baseAuthRoute + "/api_keys";
        var name = userapikey_UserApiKeyAuthProvider.DEFAULT_NAME;
        _this = _super.call(this, name, requestClient, baseRoute) || this;
        return _this;
    }
    CoreUserApiKeyAuthProviderClient.prototype.createApiKey = function (name) {
        var _a;
        var reqBuilder = new StitchAuthDocRequest_StitchAuthDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.baseRoute)
            .withDocument((_a = {},
            _a[ApiKeyFields.NAME] = name,
            _a))
            .withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            return models_UserApiKey.readFromApi(response.body);
        })
            .catch(function (err) {
            throw wrapDecodingError(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.fetchApiKey = function (keyId) {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withMethod(net_Method.GET)
            .withPath(this.getApiKeyRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            return models_UserApiKey.readFromApi(response.body);
        })
            .catch(function (err) {
            throw wrapDecodingError(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.fetchApiKeys = function () {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder.withMethod(net_Method.GET).withPath(this.baseRoute);
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function (response) {
            var json = JSON.parse(response.body);
            if (Array.isArray(json)) {
                return json.map(function (value) { return models_UserApiKey.readFromApi(value); });
            }
            throw new esm_StitchRequestError(new Error("unexpected non-array response from server"), StitchRequestErrorCode.DECODING_ERROR);
        })
            .catch(function (err) {
            throw wrapDecodingError(err);
        });
    };
    CoreUserApiKeyAuthProviderClient.prototype.deleteApiKey = function (keyId) {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withMethod(net_Method.DELETE)
            .withPath(this.getApiKeyRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.enableApiKey = function (keyId) {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withMethod(net_Method.PUT)
            .withPath(this.getApiKeyEnableRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.disableApiKey = function (keyId) {
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withMethod(net_Method.PUT)
            .withPath(this.getApiKeyDisableRoute(keyId.toHexString()));
        reqBuilder.withRefreshToken();
        return this.requestClient
            .doAuthenticatedRequest(reqBuilder.build())
            .then(function () { });
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyRoute = function (keyId) {
        return this.baseRoute + "/" + keyId;
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyEnableRoute = function (keyId) {
        return this.getApiKeyRoute(keyId) + "/enable";
    };
    CoreUserApiKeyAuthProviderClient.prototype.getApiKeyDisableRoute = function (keyId) {
        return this.getApiKeyRoute(keyId) + "/disable";
    };
    return CoreUserApiKeyAuthProviderClient;
}(internal_CoreAuthProviderClient));
/* harmony default export */ var userapikey_CoreUserApiKeyAuthProviderClient = (CoreUserApiKeyAuthProviderClient_CoreUserApiKeyAuthProviderClient);
//# sourceMappingURL=CoreUserApiKeyAuthProviderClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userapikey/UserApiKeyCredential.js


var UserApiKeyCredential_Fields;
(function (Fields) {
    Fields["KEY"] = "key";
})(UserApiKeyCredential_Fields || (UserApiKeyCredential_Fields = {}));
var UserApiKeyCredential_UserApiKeyCredential = (function () {
    function UserApiKeyCredential(key, providerName) {
        var _a;
        if (providerName === void 0) { providerName = userapikey_UserApiKeyAuthProvider.DEFAULT_NAME; }
        this.providerType = userapikey_UserApiKeyAuthProvider.TYPE;
        this.providerCapabilities = new auth_ProviderCapabilities(false);
        this.providerName = providerName;
        this.key = key;
        this.material = (_a = {},
            _a[UserApiKeyCredential_Fields.KEY] = this.key,
            _a);
    }
    return UserApiKeyCredential;
}());
/* harmony default export */ var userapikey_UserApiKeyCredential = (UserApiKeyCredential_UserApiKeyCredential);
//# sourceMappingURL=UserApiKeyCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordAuthProvider.js
var UserPasswordAuthProvider = (function () {
    function UserPasswordAuthProvider() {
    }
    UserPasswordAuthProvider.TYPE = "local-userpass";
    UserPasswordAuthProvider.DEFAULT_NAME = "local-userpass";
    return UserPasswordAuthProvider;
}());
/* harmony default export */ var userpass_UserPasswordAuthProvider = (UserPasswordAuthProvider);
//# sourceMappingURL=UserPasswordAuthProvider.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/CoreUserPasswordAuthProviderClient.js
var CoreUserPasswordAuthProviderClient_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RegistrationFields;
(function (RegistrationFields) {
    RegistrationFields["EMAIL"] = "email";
    RegistrationFields["PASSWORD"] = "password";
})(RegistrationFields || (RegistrationFields = {}));
var ActionFields;
(function (ActionFields) {
    ActionFields["EMAIL"] = "email";
    ActionFields["PASSWORD"] = "password";
    ActionFields["TOKEN"] = "token";
    ActionFields["TOKEN_ID"] = "tokenId";
    ActionFields["ARGS"] = "arguments";
})(ActionFields || (ActionFields = {}));
var CoreUserPasswordAuthProviderClient_CoreUserPasswordAuthProviderClient = (function (_super) {
    CoreUserPasswordAuthProviderClient_extends(CoreUserPasswordAuthProviderClient, _super);
    function CoreUserPasswordAuthProviderClient(providerName, requestClient, authRoutes) {
        if (providerName === void 0) { providerName = userpass_UserPasswordAuthProvider.DEFAULT_NAME; }
        var _this = this;
        var baseRoute = authRoutes.getAuthProviderRoute(providerName);
        _this = _super.call(this, providerName, requestClient, baseRoute) || this;
        return _this;
    }
    CoreUserPasswordAuthProviderClient.prototype.registerWithEmailInternal = function (email, password) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.getRegisterWithEmailRoute());
        reqBuilder.withDocument((_a = {},
            _a[RegistrationFields.EMAIL] = email,
            _a[RegistrationFields.PASSWORD] = password,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.confirmUserInternal = function (token, tokenId) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder.withMethod(net_Method.POST).withPath(this.getConfirmUserRoute());
        reqBuilder.withDocument((_a = {},
            _a[ActionFields.TOKEN] = token,
            _a[ActionFields.TOKEN_ID] = tokenId,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.resendConfirmationEmailInternal = function (email) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.getResendConfirmationEmailRoute());
        reqBuilder.withDocument((_a = {}, _a[ActionFields.EMAIL] = email, _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.resetPasswordInternal = function (token, tokenId, password) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder.withMethod(net_Method.POST).withPath(this.getResetPasswordRoute());
        reqBuilder.withDocument((_a = {},
            _a[ActionFields.TOKEN] = token,
            _a[ActionFields.TOKEN_ID] = tokenId,
            _a[ActionFields.PASSWORD] = password,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.sendResetPasswordEmailInternal = function (email) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.getSendResetPasswordEmailRoute());
        reqBuilder.withDocument((_a = {}, _a[ActionFields.EMAIL] = email, _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.callResetPasswordFunctionInternal = function (email, password, args) {
        var _a;
        var reqBuilder = new StitchDocRequest_StitchDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.getCallResetPasswordFunctionRoute());
        reqBuilder.withDocument((_a = {},
            _a[ActionFields.EMAIL] = email,
            _a[ActionFields.PASSWORD] = password,
            _a[ActionFields.ARGS] = args,
            _a));
        return this.requestClient.doRequest(reqBuilder.build()).then(function () { });
    };
    CoreUserPasswordAuthProviderClient.prototype.getRegisterWithEmailRoute = function () {
        return this.getExtensionRoute("register");
    };
    CoreUserPasswordAuthProviderClient.prototype.getConfirmUserRoute = function () {
        return this.getExtensionRoute("confirm");
    };
    CoreUserPasswordAuthProviderClient.prototype.getResendConfirmationEmailRoute = function () {
        return this.getExtensionRoute("confirm/send");
    };
    CoreUserPasswordAuthProviderClient.prototype.getResetPasswordRoute = function () {
        return this.getExtensionRoute("reset");
    };
    CoreUserPasswordAuthProviderClient.prototype.getSendResetPasswordEmailRoute = function () {
        return this.getExtensionRoute("reset/send");
    };
    CoreUserPasswordAuthProviderClient.prototype.getCallResetPasswordFunctionRoute = function () {
        return this.getExtensionRoute("reset/call");
    };
    CoreUserPasswordAuthProviderClient.prototype.getExtensionRoute = function (path) {
        return this.baseRoute + "/" + path;
    };
    return CoreUserPasswordAuthProviderClient;
}(internal_CoreAuthProviderClient));
/* harmony default export */ var userpass_CoreUserPasswordAuthProviderClient = (CoreUserPasswordAuthProviderClient_CoreUserPasswordAuthProviderClient);
//# sourceMappingURL=CoreUserPasswordAuthProviderClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/providers/userpass/UserPasswordCredential.js


var UserPasswordCredential_Fields;
(function (Fields) {
    Fields["USERNAME"] = "username";
    Fields["PASSWORD"] = "password";
})(UserPasswordCredential_Fields || (UserPasswordCredential_Fields = {}));
var UserPasswordCredential_UserPasswordCredential = (function () {
    function UserPasswordCredential(username, password, providerName) {
        var _a;
        if (providerName === void 0) { providerName = userpass_UserPasswordAuthProvider.DEFAULT_NAME; }
        this.username = username;
        this.password = password;
        this.providerName = providerName;
        this.providerType = userpass_UserPasswordAuthProvider.TYPE;
        this.providerCapabilities = new auth_ProviderCapabilities(false);
        this.material = (_a = {},
            _a[UserPasswordCredential_Fields.USERNAME] = this.username,
            _a[UserPasswordCredential_Fields.PASSWORD] = this.password,
            _a);
    }
    return UserPasswordCredential;
}());
/* harmony default export */ var userpass_UserPasswordCredential = (UserPasswordCredential_UserPasswordCredential);
//# sourceMappingURL=UserPasswordCredential.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/auth/UserType.js
var UserType;
(function (UserType) {
    UserType["Normal"] = "normal";
    UserType["Server"] = "server";
    UserType["Unknown"] = "unknown";
})(UserType || (UserType = {}));
/* harmony default export */ var auth_UserType = (UserType);
//# sourceMappingURL=UserType.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/common/Storage.js
var MemoryStorage = (function () {
    function MemoryStorage(suiteName) {
        this.suiteName = suiteName;
        this.storage = {};
    }
    MemoryStorage.prototype.get = function (key) {
        return this.storage[this.suiteName + "." + key];
    };
    MemoryStorage.prototype.set = function (key, value) {
        this.storage[this.suiteName + "." + key] = value;
    };
    MemoryStorage.prototype.remove = function (key) {
        delete this.storage[this.suiteName + "." + key];
    };
    return MemoryStorage;
}());

//# sourceMappingURL=Storage.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/RebindEvent.js
var RebindEvent = (function () {
    function RebindEvent() {
    }
    return RebindEvent;
}());

var RebindEventType;
(function (RebindEventType) {
    RebindEventType[RebindEventType["AUTH_EVENT"] = 0] = "AUTH_EVENT";
})(RebindEventType || (RebindEventType = {}));
//# sourceMappingURL=RebindEvent.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/CoreStitchServiceClientImpl.js







var CoreStitchServiceClientImpl_CoreStitchServiceClientImpl = (function () {
    function CoreStitchServiceClientImpl(requestClient, routes, name) {
        this.serviceField = "service";
        this.argumentsField = "arguments";
        this.requestClient = requestClient;
        this.serviceRoutes = routes;
        this.serviceName = name;
        this.serviceBinders = [];
        this.allocatedStreams = [];
    }
    CoreStitchServiceClientImpl.prototype.callFunction = function (name, args, decoder) {
        return this.requestClient.doAuthenticatedRequestWithDecoder(this.getCallServiceFunctionRequest(name, args), decoder);
    };
    CoreStitchServiceClientImpl.prototype.streamFunction = function (name, args, decoder) {
        var _this = this;
        return this.requestClient.openAuthenticatedStreamWithDecoder(this.getStreamServiceFunctionRequest(name, args), decoder).then(function (newStream) {
            _this.allocatedStreams.push(newStream);
            return newStream;
        });
    };
    CoreStitchServiceClientImpl.prototype.bind = function (binder) {
        this.serviceBinders.push(binder);
    };
    CoreStitchServiceClientImpl.prototype.onRebindEvent = function (rebindEvent) {
        switch (rebindEvent.type) {
            case RebindEventType.AUTH_EVENT:
                var authRebindEvent = rebindEvent;
                if (authRebindEvent.event.kind === AuthEventKind.ActiveUserChanged) {
                    this.closeAllocatedStreams();
                }
                break;
            default:
                break;
        }
        this.serviceBinders.forEach(function (binder) {
            binder.onRebindEvent(rebindEvent);
        });
    };
    CoreStitchServiceClientImpl.prototype.getStreamServiceFunctionRequest = function (name, args) {
        var body = { name: name };
        if (this.serviceName !== undefined) {
            body[this.serviceField] = this.serviceName;
        }
        body[this.argumentsField] = args;
        var reqBuilder = new StitchAuthRequest_StitchAuthRequest.Builder();
        reqBuilder
            .withMethod(net_Method.GET)
            .withPath(this.serviceRoutes.functionCallRoute +
            ("?stitch_request=" + encodeURIComponent(base64Encode(bson_browser_esm["a" /* EJSON */].stringify(body)))));
        return reqBuilder.build();
    };
    CoreStitchServiceClientImpl.prototype.getCallServiceFunctionRequest = function (name, args) {
        var body = { name: name };
        if (this.serviceName !== undefined) {
            body[this.serviceField] = this.serviceName;
        }
        body[this.argumentsField] = args;
        var reqBuilder = new StitchAuthDocRequest_StitchAuthDocRequest.Builder();
        reqBuilder
            .withMethod(net_Method.POST)
            .withPath(this.serviceRoutes.functionCallRoute);
        reqBuilder.withDocument(body);
        return reqBuilder.build();
    };
    CoreStitchServiceClientImpl.prototype.closeAllocatedStreams = function () {
        this.allocatedStreams.forEach(function (stream) {
            if (stream.isOpen()) {
                stream.close();
            }
        });
        this.allocatedStreams = [];
    };
    return CoreStitchServiceClientImpl;
}());
/* harmony default export */ var internal_CoreStitchServiceClientImpl = (CoreStitchServiceClientImpl_CoreStitchServiceClientImpl);
//# sourceMappingURL=CoreStitchServiceClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/CoreStitchAppClient.js

var CoreStitchAppClient_CoreStitchAppClient = (function () {
    function CoreStitchAppClient(authRequestClient, routes) {
        this.functionService =
            new internal_CoreStitchServiceClientImpl(authRequestClient, routes.serviceRoutes);
    }
    CoreStitchAppClient.prototype.callFunction = function (name, args, decoder) {
        return this.functionService.callFunction(name, args, decoder);
    };
    return CoreStitchAppClient;
}());
/* harmony default export */ var internal_CoreStitchAppClient = (CoreStitchAppClient_CoreStitchAppClient);
//# sourceMappingURL=CoreStitchAppClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseEventStream.js
var BaseEventStream_values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};




var BaseEventStream_BaseEventStream = (function () {
    function BaseEventStream(reconnecter) {
        this.reconnecter = reconnecter;
        this.closed = false;
        this.events = [];
        this.listeners = [];
        this.lastErr = undefined;
    }
    BaseEventStream.prototype.isOpen = function () {
        return !this.closed;
    };
    BaseEventStream.prototype.addListener = function (listener) {
        var _this = this;
        if (this.closed) {
            setTimeout(function () { return listener.onEvent(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, "stream closed")); }, 0);
            return;
        }
        if (this.lastErr !== undefined) {
            setTimeout(function () { return listener.onEvent(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, _this.lastErr)); }, 0);
            return;
        }
        this.listeners.push(listener);
        this.poll();
    };
    BaseEventStream.prototype.removeListener = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index === -1) {
            return;
        }
        this.listeners.splice(index, 1);
    };
    BaseEventStream.prototype.nextEvent = function () {
        var _this = this;
        if (this.closed) {
            return Promise.reject(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, "stream closed"));
        }
        if (this.lastErr !== undefined) {
            return Promise.reject(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, this.lastErr));
        }
        return new Promise(function (resolve, reject) {
            _this.listenOnce({
                onEvent: function (e) {
                    resolve(e);
                }
            });
        });
    };
    BaseEventStream.prototype.close = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.afterClose();
    };
    BaseEventStream.prototype.reconnect = function (error) {
        var _this = this;
        if (!this.reconnecter) {
            if (!this.closed) {
                this.closed = true;
                this.events.push(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, "stream closed: " + error));
                this.poll();
            }
            return;
        }
        this.reconnecter()
            .then(function (next) {
            _this.onReconnect(next);
        })
            .catch(function (e) {
            if (!(e instanceof esm_StitchError) || !(e instanceof esm_StitchRequestError)) {
                _this.closed = true;
                _this.events.push(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, "stream closed: " + error));
                _this.poll();
                return;
            }
            setTimeout(function () { return _this.reconnect(e); }, BaseEventStream.RETRY_TIMEOUT_MILLIS);
        });
    };
    BaseEventStream.prototype.poll = function () {
        var e_1, _a;
        while (this.events.length !== 0) {
            var event_1 = this.events.pop();
            try {
                for (var _b = BaseEventStream_values(this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    if (listener.onEvent) {
                        listener.onEvent(event_1);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    BaseEventStream.prototype.listenOnce = function (listener) {
        var _this = this;
        if (this.closed) {
            setTimeout(function () { return listener.onEvent(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, "stream closed")); }, 0);
            return;
        }
        if (this.lastErr !== undefined) {
            setTimeout(function () { return listener.onEvent(new net_Event(net_StitchEvent.ERROR_EVENT_NAME, _this.lastErr)); }, 0);
            return;
        }
        var wrapper = {
            onEvent: function (e) {
                _this.removeListener(wrapper);
                listener.onEvent(e);
            }
        };
        this.addListener(wrapper);
    };
    BaseEventStream.RETRY_TIMEOUT_MILLIS = 5000;
    return BaseEventStream;
}());
/* harmony default export */ var net_BaseEventStream = (BaseEventStream_BaseEventStream);
//# sourceMappingURL=BaseEventStream.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BasicRequest.js
var BasicRequest = (function () {
    function BasicRequest(method, url, headers, body) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.body = body;
    }
    return BasicRequest;
}());

(function (BasicRequest) {
    var Builder = (function () {
        function Builder(request) {
            if (!request) {
                return;
            }
            this.method = request.method;
            this.url = request.url;
            this.headers = request.headers;
            this.body = request.body;
        }
        Builder.prototype.withMethod = function (method) {
            this.method = method;
            return this;
        };
        Builder.prototype.withUrl = function (url) {
            this.url = url;
            return this;
        };
        Builder.prototype.withHeaders = function (headers) {
            this.headers = headers;
            return this;
        };
        Builder.prototype.withBody = function (body) {
            this.body = body;
            return this;
        };
        Builder.prototype.build = function () {
            if (this.method === undefined) {
                throw new Error("must set method");
            }
            if (this.url === undefined) {
                throw new Error("must set non-empty url");
            }
            return new BasicRequest(this.method, this.url, this.headers === undefined ? {} : this.headers, this.body);
        };
        return Builder;
    }());
    BasicRequest.Builder = Builder;
})(BasicRequest || (BasicRequest = {}));
//# sourceMappingURL=BasicRequest.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/Response.js
var Response = (function () {
    function Response(headers, statusCode, body) {
        var _this = this;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = {};
        Object.keys(headers).map(function (key, index) {
            _this.headers[key.toLocaleLowerCase()] = headers[key];
        });
    }
    return Response;
}());
/* harmony default export */ var net_Response = (Response);
//# sourceMappingURL=Response.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRoutes.js
var BASE_ROUTE = "/api/client/v2.0";
function getAppRoute(clientAppId) {
    return BASE_ROUTE + ("/app/" + clientAppId);
}
function getFunctionCallRoute(clientAppId) {
    return getAppRoute(clientAppId) + "/functions/call";
}
function getAppMetadataRoute(clientAppId) {
    return getAppRoute(clientAppId) + "/location";
}

//# sourceMappingURL=StitchRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppAuthRoutes.js

function getAuthProviderRoute(clientAppId, providerName) {
    return getAppRoute(clientAppId) + ("/auth/providers/" + providerName);
}
function getAuthProviderLoginRoute(clientAppId, providerName) {
    return getAuthProviderRoute(clientAppId, providerName) + "/login";
}
function getAuthProviderLinkRoute(clientAppId, providerName) {
    return getAuthProviderLoginRoute(clientAppId, providerName) + "?link=true";
}
var StitchAppAuthRoutes_StitchAppAuthRoutes = (function () {
    function StitchAppAuthRoutes(clientAppId) {
        var _this = this;
        this.baseAuthRoute = BASE_ROUTE + "/auth";
        this.sessionRoute = (function () {
            return _this.baseAuthRoute + "/session";
        })();
        this.profileRoute = (function () {
            return _this.baseAuthRoute + "/profile";
        })();
        this.clientAppId = clientAppId;
    }
    StitchAppAuthRoutes.prototype.getAuthProviderRoute = function (providerName) {
        return getAuthProviderRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderLoginRoute = function (providerName) {
        return getAuthProviderLoginRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderLinkRoute = function (providerName) {
        return getAuthProviderLinkRoute(this.clientAppId, providerName);
    };
    StitchAppAuthRoutes.prototype.getAuthProviderExtensionRoute = function (providerName, path) {
        return this.getAuthProviderRoute(providerName) + "/" + path;
    };
    return StitchAppAuthRoutes;
}());
/* harmony default export */ var net_StitchAppAuthRoutes = (StitchAppAuthRoutes_StitchAppAuthRoutes);
//# sourceMappingURL=StitchAppAuthRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/ApiAppMetadata.js
var ApiAppMetadata_Fields;
(function (Fields) {
    Fields["DEPLOYMENT_MODEL"] = "deployment_model";
    Fields["LOCATION"] = "location";
    Fields["HOSTNAME"] = "hostname";
})(ApiAppMetadata_Fields || (ApiAppMetadata_Fields = {}));
var ApiAppMetadata = (function () {
    function ApiAppMetadata(deploymentModel, location, hostname) {
        this.deploymentModel = deploymentModel;
        this.location = location;
        this.hostname = hostname;
    }
    ApiAppMetadata.fromJSON = function (json) {
        return new ApiAppMetadata(json[ApiAppMetadata_Fields.DEPLOYMENT_MODEL], json[ApiAppMetadata_Fields.LOCATION], json[ApiAppMetadata_Fields.HOSTNAME]);
    };
    ApiAppMetadata.prototype.toJSON = function () {
        var _a;
        return _a = {},
            _a[ApiAppMetadata_Fields.DEPLOYMENT_MODEL] = this.deploymentModel,
            _a[ApiAppMetadata_Fields.LOCATION] = this.location,
            _a[ApiAppMetadata_Fields.HOSTNAME] = this.hostname,
            _a;
    };
    return ApiAppMetadata;
}());
/* harmony default export */ var net_ApiAppMetadata = (ApiAppMetadata);
//# sourceMappingURL=ApiAppMetadata.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/BaseStitchRequestClient.js





function inspectResponse(request, url, response) {
    if (response.statusCode >= 200 && response.statusCode < 300) {
        return response;
    }
    return handleRequestError(response);
}
var BaseStitchRequestClient_BaseStitchRequestClient = (function () {
    function BaseStitchRequestClient(baseUrl, transport) {
        this.baseUrl = baseUrl;
        this.transport = transport;
    }
    BaseStitchRequestClient.prototype.doRequestToURL = function (stitchReq, url) {
        return this.transport
            .roundTrip(this.buildRequest(stitchReq, url))
            .catch(function (error) {
            throw new esm_StitchRequestError(error, StitchRequestErrorCode.TRANSPORT_ERROR);
        })
            .then(function (resp) { return inspectResponse(stitchReq, url, resp); });
    };
    BaseStitchRequestClient.prototype.doStreamRequestToURL = function (stitchReq, url, open, retryRequest) {
        if (open === void 0) { open = true; }
        return this.transport
            .stream(this.buildRequest(stitchReq, url), open, retryRequest)
            .catch(function (error) {
            if (error instanceof esm_StitchError) {
                throw error;
            }
            throw new esm_StitchRequestError(error, StitchRequestErrorCode.TRANSPORT_ERROR);
        });
    };
    BaseStitchRequestClient.prototype.buildRequest = function (stitchReq, url) {
        return new BasicRequest.Builder()
            .withMethod(stitchReq.method)
            .withUrl("" + url + stitchReq.path)
            .withHeaders(stitchReq.headers)
            .withBody(stitchReq.body)
            .build();
    };
    return BaseStitchRequestClient;
}());
/* harmony default export */ var net_BaseStitchRequestClient = (BaseStitchRequestClient_BaseStitchRequestClient);
//# sourceMappingURL=BaseStitchRequestClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/StitchServiceRoutes.js

var StitchServiceRoutes_StitchServiceRoutes = (function () {
    function StitchServiceRoutes(clientAppId) {
        this.clientAppId = clientAppId;
        this.functionCallRoute = getFunctionCallRoute(clientAppId);
    }
    return StitchServiceRoutes;
}());
/* harmony default export */ var internal_StitchServiceRoutes = (StitchServiceRoutes_StitchServiceRoutes);
//# sourceMappingURL=StitchServiceRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRoutes.js



var StitchAppRoutes_StitchAppRoutes = (function () {
    function StitchAppRoutes(clientAppId) {
        this.clientAppId = clientAppId;
        this.authRoutes = new net_StitchAppAuthRoutes(clientAppId);
        this.serviceRoutes = new internal_StitchServiceRoutes(clientAppId);
        this.appMetadataRoute = getAppMetadataRoute(clientAppId);
        this.functionCallRoute = getFunctionCallRoute(clientAppId);
    }
    return StitchAppRoutes;
}());
/* harmony default export */ var net_StitchAppRoutes = (StitchAppRoutes_StitchAppRoutes);
//# sourceMappingURL=StitchAppRoutes.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchAppRequestClient.js
var StitchAppRequestClient_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var StitchAppRequestClient_StitchAppRequestClient = (function (_super) {
    StitchAppRequestClient_extends(StitchAppRequestClient, _super);
    function StitchAppRequestClient(clientAppId, baseUrl, transport) {
        var _this = _super.call(this, baseUrl, transport) || this;
        _this.clientAppId = clientAppId;
        _this.routes = new net_StitchAppRoutes(clientAppId);
        return _this;
    }
    StitchAppRequestClient.prototype.doRequest = function (stitchReq) {
        var _this = this;
        return this.initAppMetadata()
            .then(function (metadata) { return _super.prototype.doRequestToURL.call(_this, stitchReq, metadata.hostname); });
    };
    StitchAppRequestClient.prototype.doStreamRequest = function (stitchReq, open, retryRequest) {
        var _this = this;
        if (open === void 0) { open = true; }
        return this.initAppMetadata()
            .then(function (metadata) { return _super.prototype.doStreamRequestToURL.call(_this, stitchReq, metadata.hostname, open, retryRequest); });
    };
    StitchAppRequestClient.prototype.getBaseURL = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.initAppMetadata().then(function (metadata) { return metadata.hostname; })];
            });
        });
    };
    StitchAppRequestClient.prototype.initAppMetadata = function () {
        var _this = this;
        if (this.appMetadata) {
            return Promise.resolve(this.appMetadata);
        }
        var request = new StitchRequest.Builder()
            .withMethod(net_Method.GET)
            .withPath(this.routes.appMetadataRoute)
            .build();
        return _super.prototype.doRequestToURL.call(this, request, this.baseUrl)
            .then(function (resp) {
            _this.appMetadata = net_ApiAppMetadata.fromJSON(bson_browser_esm["a" /* EJSON */].parse(resp.body));
            return _this.appMetadata;
        });
    };
    return StitchAppRequestClient;
}(net_BaseStitchRequestClient));
/* harmony default export */ var net_StitchAppRequestClient = (StitchAppRequestClient_StitchAppRequestClient);
//# sourceMappingURL=StitchAppRequestClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/internal/net/StitchRequestClient.js
var StitchRequestClient_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchRequestClient = (function (_super) {
    StitchRequestClient_extends(StitchRequestClient, _super);
    function StitchRequestClient(baseUrl, transport) {
        return _super.call(this, baseUrl, transport) || this;
    }
    StitchRequestClient.prototype.doRequest = function (stitchReq) {
        return _super.prototype.doRequestToURL.call(this, stitchReq, this.baseUrl);
    };
    StitchRequestClient.prototype.doStreamRequest = function (stitchReq, open, retryRequest) {
        if (open === void 0) { open = true; }
        return _super.prototype.doStreamRequestToURL.call(this, stitchReq, this.baseUrl, open, retryRequest);
    };
    StitchRequestClient.prototype.getBaseURL = function () {
        return Promise.resolve(this.baseUrl);
    };
    return StitchRequestClient;
}(net_BaseStitchRequestClient));
/* harmony default export */ var net_StitchRequestClient = (StitchRequestClient);
//# sourceMappingURL=StitchRequestClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/services/internal/AuthRebindEvent.js
var AuthRebindEvent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AuthRebindEvent_AuthRebindEvent = (function (_super) {
    AuthRebindEvent_extends(AuthRebindEvent, _super);
    function AuthRebindEvent(event) {
        var _this = _super.call(this) || this;
        _this.type = RebindEventType.AUTH_EVENT;
        _this.event = event;
        return _this;
    }
    return AuthRebindEvent;
}(RebindEvent));
/* harmony default export */ var internal_AuthRebindEvent = (AuthRebindEvent_AuthRebindEvent);
//# sourceMappingURL=AuthRebindEvent.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchClientConfiguration.js
var StitchClientConfiguration = (function () {
    function StitchClientConfiguration(baseUrl, storage, dataDirectory, transport) {
        this.baseUrl = baseUrl;
        this.storage = storage;
        this.dataDirectory = dataDirectory;
        this.transport = transport;
    }
    StitchClientConfiguration.prototype.builder = function () {
        return new StitchClientConfiguration.Builder(this);
    };
    return StitchClientConfiguration;
}());

(function (StitchClientConfiguration) {
    var Builder = (function () {
        function Builder(config) {
            if (config) {
                this.baseUrl = config.baseUrl;
                this.storage = config.storage;
                this.dataDirectory = config.dataDirectory;
                this.transport = config.transport;
            }
        }
        Builder.prototype.withBaseUrl = function (baseUrl) {
            this.baseUrl = baseUrl;
            return this;
        };
        Builder.prototype.withStorage = function (storage) {
            this.storage = storage;
            return this;
        };
        Builder.prototype.withDataDirectory = function (dataDirectory) {
            this.dataDirectory = dataDirectory;
            return this;
        };
        Builder.prototype.withTransport = function (transport) {
            this.transport = transport;
            return this;
        };
        Builder.prototype.build = function () {
            return new StitchClientConfiguration(this.baseUrl, this.storage, this.dataDirectory, this.transport);
        };
        return Builder;
    }());
    StitchClientConfiguration.Builder = Builder;
})(StitchClientConfiguration || (StitchClientConfiguration = {}));
//# sourceMappingURL=StitchClientConfiguration.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientConfiguration.js
var StitchAppClientConfiguration_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StitchAppClientConfiguration_StitchAppClientConfiguration = (function (_super) {
    StitchAppClientConfiguration_extends(StitchAppClientConfiguration, _super);
    function StitchAppClientConfiguration(config, localAppName, localAppVersion) {
        var _this = _super.call(this, config.baseUrl, config.storage, config.dataDirectory, config.transport) || this;
        _this.localAppVersion = localAppVersion;
        _this.localAppName = localAppName;
        return _this;
    }
    StitchAppClientConfiguration.prototype.builder = function () {
        return new StitchAppClientConfiguration.Builder(this);
    };
    return StitchAppClientConfiguration;
}(StitchClientConfiguration));

(function (StitchAppClientConfiguration) {
    var Builder = (function (_super) {
        StitchAppClientConfiguration_extends(Builder, _super);
        function Builder(config) {
            var _this = _super.call(this, config) || this;
            if (config) {
                _this.localAppVersion = config.localAppVersion;
                _this.localAppName = config.localAppName;
            }
            return _this;
        }
        Builder.prototype.withLocalAppName = function (localAppName) {
            this.localAppName = localAppName;
            return this;
        };
        Builder.prototype.withLocalAppVersion = function (localAppVersion) {
            this.localAppVersion = localAppVersion;
            return this;
        };
        Builder.prototype.build = function () {
            var config = _super.prototype.build.call(this);
            return new StitchAppClientConfiguration(config, this.localAppName, this.localAppVersion);
        };
        return Builder;
    }(StitchClientConfiguration.Builder));
    StitchAppClientConfiguration.Builder = Builder;
})(StitchAppClientConfiguration_StitchAppClientConfiguration || (StitchAppClientConfiguration_StitchAppClientConfiguration = {}));
//# sourceMappingURL=StitchAppClientConfiguration.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/StitchAppClientInfo.js
var StitchAppClientInfo = (function () {
    function StitchAppClientInfo(clientAppId, dataDirectory, localAppName, localAppVersion) {
        this.clientAppId = clientAppId;
        this.dataDirectory = dataDirectory;
        this.localAppName = localAppName;
        this.localAppVersion = localAppVersion;
    }
    return StitchAppClientInfo;
}());
/* harmony default export */ var esm_StitchAppClientInfo = (StitchAppClientInfo);
//# sourceMappingURL=StitchAppClientInfo.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js
/* unused concated harmony import BSON */
/* concated harmony reexport AuthInfo */__webpack_require__.d(__webpack_exports__, "d", function() { return internal_AuthInfo; });
/* concated harmony reexport StitchAuthResponseCredential */__webpack_require__.d(__webpack_exports__, "y", function() { return internal_StitchAuthResponseCredential; });
/* unused concated harmony import AnonymousAuthProvider */
/* concated harmony reexport AnonymousCredential */__webpack_require__.d(__webpack_exports__, "a", function() { return anonymous_AnonymousCredential; });
/* unused concated harmony import ApiStitchUserIdentity */
/* unused concated harmony import CustomAuthProvider */
/* unused concated harmony import CustomCredential */
/* concated harmony reexport FacebookAuthProvider */__webpack_require__.d(__webpack_exports__, "p", function() { return facebook_FacebookAuthProvider; });
/* unused concated harmony import FacebookCredential */
/* unused concated harmony import FunctionAuthProvider */
/* unused concated harmony import FunctionCredential */
/* concated harmony reexport GoogleAuthProvider */__webpack_require__.d(__webpack_exports__, "q", function() { return google_GoogleAuthProvider; });
/* unused concated harmony import GoogleCredential */
/* unused concated harmony import ServerApiKeyAuthProvider */
/* unused concated harmony import ServerApiKeyCredential */
/* unused concated harmony import UserApiKeyAuthProvider */
/* unused concated harmony import UserApiKey */
/* unused concated harmony import UserApiKeyCredential */
/* concated harmony reexport StitchError */__webpack_require__.d(__webpack_exports__, "B", function() { return esm_StitchError; });
/* concated harmony reexport StitchClientError */__webpack_require__.d(__webpack_exports__, "z", function() { return esm_StitchClientError; });
/* concated harmony reexport StitchClientErrorCode */__webpack_require__.d(__webpack_exports__, "A", function() { return StitchClientErrorCode; });
/* concated harmony reexport CoreUserApiKeyAuthProviderClient */__webpack_require__.d(__webpack_exports__, "l", function() { return userapikey_CoreUserApiKeyAuthProviderClient; });
/* concated harmony reexport UserPasswordAuthProvider */__webpack_require__.d(__webpack_exports__, "D", function() { return userpass_UserPasswordAuthProvider; });
/* unused concated harmony import UserPasswordCredential */
/* concated harmony reexport CoreUserPassAuthProviderClient */__webpack_require__.d(__webpack_exports__, "m", function() { return userpass_CoreUserPasswordAuthProviderClient; });
/* concated harmony reexport CoreStitchAppClient */__webpack_require__.d(__webpack_exports__, "h", function() { return internal_CoreStitchAppClient; });
/* concated harmony reexport CoreStitchAuth */__webpack_require__.d(__webpack_exports__, "i", function() { return internal_CoreStitchAuth; });
/* concated harmony reexport CoreStitchUserImpl */__webpack_require__.d(__webpack_exports__, "k", function() { return internal_CoreStitchUserImpl; });
/* concated harmony reexport DeviceFields */__webpack_require__.d(__webpack_exports__, "n", function() { return internal_DeviceFields; });
/* unused concated harmony import BasicRequest */
/* concated harmony reexport ContentTypes */__webpack_require__.d(__webpack_exports__, "g", function() { return net_ContentTypes; });
/* concated harmony reexport Event */__webpack_require__.d(__webpack_exports__, "o", function() { return net_Event; });
/* concated harmony reexport BaseEventStream */__webpack_require__.d(__webpack_exports__, "f", function() { return net_BaseEventStream; });
/* concated harmony reexport StitchEvent */__webpack_require__.d(__webpack_exports__, "C", function() { return net_StitchEvent; });
/* concated harmony reexport Headers */__webpack_require__.d(__webpack_exports__, "r", function() { return net_Headers; });
/* unused concated harmony import Stream */
/* concated harmony reexport StitchAppClientInfo */__webpack_require__.d(__webpack_exports__, "v", function() { return esm_StitchAppClientInfo; });
/* concated harmony reexport StitchAppClientConfiguration */__webpack_require__.d(__webpack_exports__, "u", function() { return StitchAppClientConfiguration_StitchAppClientConfiguration; });
/* concated harmony reexport StitchAppRequestClient */__webpack_require__.d(__webpack_exports__, "w", function() { return net_StitchAppRequestClient; });
/* concated harmony reexport StitchAppRoutes */__webpack_require__.d(__webpack_exports__, "x", function() { return net_StitchAppRoutes; });
/* unused concated harmony import StitchAuthRequest */
/* unused concated harmony import StitchRequestClient */
/* unused concated harmony import StitchRequestError */
/* unused concated harmony import StitchRequestErrorCode */
/* unused concated harmony import StitchServiceRoutes */
/* unused concated harmony import StitchServiceError */
/* unused concated harmony import StitchServiceErrorCode */
/* unused concated harmony import StitchUserProfileImpl */
/* concated harmony reexport CoreStitchServiceClientImpl */__webpack_require__.d(__webpack_exports__, "j", function() { return internal_CoreStitchServiceClientImpl; });
/* unused concated harmony import StitchUserIdentity */
/* concated harmony reexport StitchAppAuthRoutes */__webpack_require__.d(__webpack_exports__, "t", function() { return net_StitchAppAuthRoutes; });
/* unused concated harmony import Method */
/* concated harmony reexport Response */__webpack_require__.d(__webpack_exports__, "s", function() { return net_Response; });
/* unused concated harmony import MemoryStorage */
/* concated harmony reexport handleRequestError */__webpack_require__.d(__webpack_exports__, "F", function() { return handleRequestError; });
/* unused concated harmony import UserType */
/* concated harmony reexport Assertions */__webpack_require__.d(__webpack_exports__, "b", function() { return common_Assertions; });
/* concated harmony reexport AuthEventKind */__webpack_require__.d(__webpack_exports__, "c", function() { return AuthEventKind; });
/* unused concated harmony import RebindEvent */
/* concated harmony reexport AuthRebindEvent */__webpack_require__.d(__webpack_exports__, "e", function() { return internal_AuthRebindEvent; });
/* unused concated harmony import base64Decode */
/* concated harmony reexport base64Encode */__webpack_require__.d(__webpack_exports__, "E", function() { return base64Encode; });
/* unused concated harmony import utf8Slice */































































//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=npm.mongodb-stitch-core-sdk.4bfbb9735.js.map