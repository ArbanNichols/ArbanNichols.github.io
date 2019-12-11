(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "0pL4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js + 7 modules
var esm = __webpack_require__("kREo");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoCursor.js
var RemoteMongoCursor = (function () {
    function RemoteMongoCursor(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoCursor.prototype.next = function () {
        return Promise.resolve(this.proxy.next().value);
    };
    return RemoteMongoCursor;
}());
/* harmony default export */ var esm_RemoteMongoCursor = (RemoteMongoCursor);
//# sourceMappingURL=RemoteMongoCursor.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoReadOperation.js

var RemoteMongoReadOperation_RemoteMongoReadOperation = (function () {
    function RemoteMongoReadOperation(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoReadOperation.prototype.first = function () {
        return this.proxy.first();
    };
    RemoteMongoReadOperation.prototype.toArray = function () {
        return this.proxy.toArray();
    };
    RemoteMongoReadOperation.prototype.asArray = function () {
        return this.toArray();
    };
    RemoteMongoReadOperation.prototype.iterator = function () {
        return this.proxy.iterator().then(function (res) { return new esm_RemoteMongoCursor(res); });
    };
    return RemoteMongoReadOperation;
}());
/* harmony default export */ var esm_RemoteMongoReadOperation = (RemoteMongoReadOperation_RemoteMongoReadOperation);
//# sourceMappingURL=RemoteMongoReadOperation.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoCollectionImpl.js

var RemoteMongoCollectionImpl_RemoteMongoCollectionImpl = (function () {
    function RemoteMongoCollectionImpl(proxy) {
        this.proxy = proxy;
        this.namespace = this.proxy.namespace;
    }
    RemoteMongoCollectionImpl.prototype.withCollectionType = function (codec) {
        return new RemoteMongoCollectionImpl(this.proxy.withCollectionType(codec));
    };
    RemoteMongoCollectionImpl.prototype.count = function (query, options) {
        return this.proxy.count(query, options);
    };
    RemoteMongoCollectionImpl.prototype.find = function (query, options) {
        return new esm_RemoteMongoReadOperation(this.proxy.find(query, options));
    };
    RemoteMongoCollectionImpl.prototype.findOne = function (query, options) {
        return this.proxy.findOne(query, options);
    };
    RemoteMongoCollectionImpl.prototype.findOneAndUpdate = function (query, update, options) {
        return this.proxy.findOneAndUpdate(query, update, options);
    };
    RemoteMongoCollectionImpl.prototype.findOneAndReplace = function (query, replacement, options) {
        return this.proxy.findOneAndReplace(query, replacement, options);
    };
    RemoteMongoCollectionImpl.prototype.findOneAndDelete = function (query, options) {
        return this.proxy.findOneAndDelete(query, options);
    };
    RemoteMongoCollectionImpl.prototype.aggregate = function (pipeline) {
        return new esm_RemoteMongoReadOperation(this.proxy.aggregate(pipeline));
    };
    RemoteMongoCollectionImpl.prototype.insertOne = function (doc) {
        return this.proxy.insertOne(doc);
    };
    RemoteMongoCollectionImpl.prototype.insertMany = function (docs) {
        return this.proxy.insertMany(docs);
    };
    RemoteMongoCollectionImpl.prototype.deleteOne = function (query) {
        return this.proxy.deleteOne(query);
    };
    RemoteMongoCollectionImpl.prototype.deleteMany = function (query) {
        return this.proxy.deleteMany(query);
    };
    RemoteMongoCollectionImpl.prototype.updateOne = function (query, update, updateOptions) {
        return this.proxy.updateOne(query, update, updateOptions);
    };
    RemoteMongoCollectionImpl.prototype.updateMany = function (query, update, updateOptions) {
        return this.proxy.updateMany(query, update, updateOptions);
    };
    RemoteMongoCollectionImpl.prototype.watch = function (arg) {
        return this.proxy.watch(arg);
    };
    RemoteMongoCollectionImpl.prototype.watchCompact = function (ids) {
        return this.proxy.watchCompact(ids);
    };
    return RemoteMongoCollectionImpl;
}());
/* harmony default export */ var internal_RemoteMongoCollectionImpl = (RemoteMongoCollectionImpl_RemoteMongoCollectionImpl);
//# sourceMappingURL=RemoteMongoCollectionImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoDatabaseImpl.js

var RemoteMongoDatabaseImpl_RemoteMongoDatabaseImpl = (function () {
    function RemoteMongoDatabaseImpl(proxy) {
        this.proxy = proxy;
        this.name = this.proxy.name;
    }
    RemoteMongoDatabaseImpl.prototype.collection = function (name, codec) {
        return new internal_RemoteMongoCollectionImpl(this.proxy.collection(name, codec));
    };
    return RemoteMongoDatabaseImpl;
}());
/* harmony default export */ var internal_RemoteMongoDatabaseImpl = (RemoteMongoDatabaseImpl_RemoteMongoDatabaseImpl);
//# sourceMappingURL=RemoteMongoDatabaseImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/internal/RemoteMongoClientImpl.js

var RemoteMongoClientImpl_RemoteMongoClientImpl = (function () {
    function RemoteMongoClientImpl(proxy) {
        this.proxy = proxy;
    }
    RemoteMongoClientImpl.prototype.db = function (name) {
        return new internal_RemoteMongoDatabaseImpl(this.proxy.db(name));
    };
    return RemoteMongoClientImpl;
}());
/* harmony default export */ var internal_RemoteMongoClientImpl = (RemoteMongoClientImpl_RemoteMongoClientImpl);
//# sourceMappingURL=RemoteMongoClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/RemoteMongoClient.js


var RemoteMongoClient_RemoteMongoClient;
(function (RemoteMongoClient) {
    RemoteMongoClient.factory = new (function () {
        function class_1() {
        }
        class_1.prototype.getNamedClient = function (service, client) {
            return new internal_RemoteMongoClientImpl(new esm["a" /* CoreRemoteMongoClientImpl */](service));
        };
        return class_1;
    }())();
})(RemoteMongoClient_RemoteMongoClient || (RemoteMongoClient_RemoteMongoClient = {}));
//# sourceMappingURL=RemoteMongoClient.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-browser-services-mongodb-remote/dist/esm/index.js
/* unused concated harmony import RemoteInsertManyResult */
/* unused concated harmony import RemoteMongoReadOperation */
/* concated harmony reexport RemoteMongoClient */__webpack_require__.d(__webpack_exports__, "a", function() { return RemoteMongoClient_RemoteMongoClient; });




//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=npm.mongodb-stitch-browser-services-mongodb-remote.da0399540.js.map