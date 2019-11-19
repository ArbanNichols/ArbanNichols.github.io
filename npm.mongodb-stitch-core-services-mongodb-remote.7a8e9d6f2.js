(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "kREo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/bson/dist/bson.browser.esm.js
var bson_browser_esm = __webpack_require__("no5z");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoReadOperation.js
var CoreRemoteMongoReadOperation = (function () {
    function CoreRemoteMongoReadOperation(command, args, service, decoder) {
        this.command = command;
        this.args = args;
        this.service = service;
        if (decoder) {
            this.collectionDecoder = new (function () {
                function class_1() {
                }
                class_1.prototype.decode = function (from) {
                    if (from instanceof Array) {
                        return from.map(function (t) { return decoder.decode(t); });
                    }
                    return [decoder.decode(from)];
                };
                return class_1;
            }())();
        }
    }
    CoreRemoteMongoReadOperation.prototype.iterator = function () {
        return this.executeRead().then(function (res) { return res[Symbol.iterator](); });
    };
    CoreRemoteMongoReadOperation.prototype.first = function () {
        return this.executeRead().then(function (res) { return res[0]; });
    };
    CoreRemoteMongoReadOperation.prototype.toArray = function () {
        return this.executeRead();
    };
    CoreRemoteMongoReadOperation.prototype.asArray = function () {
        return this.toArray();
    };
    CoreRemoteMongoReadOperation.prototype.executeRead = function () {
        return this.service.callFunction(this.command, [this.args], this.collectionDecoder);
    };
    return CoreRemoteMongoReadOperation;
}());
/* harmony default export */ var internal_CoreRemoteMongoReadOperation = (CoreRemoteMongoReadOperation);
//# sourceMappingURL=CoreRemoteMongoReadOperation.js.map
// EXTERNAL MODULE: ./node_modules/mongodb-stitch-core-sdk/dist/esm/index.js + 77 modules
var esm = __webpack_require__("6Glz");

// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/OperationType.js
var OperationType;
(function (OperationType) {
    OperationType["Insert"] = "insert";
    OperationType["Delete"] = "delete";
    OperationType["Replace"] = "replace";
    OperationType["Update"] = "update";
    OperationType["Unknown"] = "unknown";
})(OperationType || (OperationType = {}));
function operationTypeFromRemote(type) {
    switch (type) {
        case "insert":
            return OperationType.Insert;
        case "delete":
            return OperationType.Delete;
        case "replace":
            return OperationType.Replace;
        case "update":
            return OperationType.Update;
        default:
            return OperationType.Unknown;
    }
}
//# sourceMappingURL=OperationType.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/RemoteInsertManyResult.js
var RemoteInsertManyResult = (function () {
    function RemoteInsertManyResult(arr) {
        var inserted = {};
        arr.forEach(function (value, index) {
            inserted[index] = value;
        });
        this.insertedIds = inserted;
    }
    return RemoteInsertManyResult;
}());
/* harmony default export */ var esm_RemoteInsertManyResult = (RemoteInsertManyResult);
//# sourceMappingURL=RemoteInsertManyResult.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/ResultDecoders.js



var RemoteInsertManyResultFields;
(function (RemoteInsertManyResultFields) {
    RemoteInsertManyResultFields["InsertedIds"] = "insertedIds";
})(RemoteInsertManyResultFields || (RemoteInsertManyResultFields = {}));
var RemoteInsertOneResultFields;
(function (RemoteInsertOneResultFields) {
    RemoteInsertOneResultFields["InsertedId"] = "insertedId";
})(RemoteInsertOneResultFields || (RemoteInsertOneResultFields = {}));
var RemoteUpdateResultFields;
(function (RemoteUpdateResultFields) {
    RemoteUpdateResultFields["MatchedCount"] = "matchedCount";
    RemoteUpdateResultFields["ModifiedCount"] = "modifiedCount";
    RemoteUpdateResultFields["UpsertedId"] = "upsertedId";
})(RemoteUpdateResultFields || (RemoteUpdateResultFields = {}));
var RemoteDeleteResultFields;
(function (RemoteDeleteResultFields) {
    RemoteDeleteResultFields["DeletedCount"] = "deletedCount";
})(RemoteDeleteResultFields || (RemoteDeleteResultFields = {}));
var UpdateDescriptionFields;
(function (UpdateDescriptionFields) {
    UpdateDescriptionFields["UpdatedFields"] = "updatedFields";
    UpdateDescriptionFields["RemovedFields"] = "removedFields";
})(UpdateDescriptionFields || (UpdateDescriptionFields = {}));
var ChangeEventFields;
(function (ChangeEventFields) {
    ChangeEventFields["Id"] = "_id";
    ChangeEventFields["OperationType"] = "operationType";
    ChangeEventFields["FullDocument"] = "fullDocument";
    ChangeEventFields["DocumentKey"] = "documentKey";
    ChangeEventFields["Namespace"] = "ns";
    ChangeEventFields["NamespaceDb"] = "db";
    ChangeEventFields["NamespaceColl"] = "coll";
    ChangeEventFields["UpdateDescription"] = "updateDescription";
})(ChangeEventFields || (ChangeEventFields = {}));
var CompactChangeEventFields;
(function (CompactChangeEventFields) {
    CompactChangeEventFields["OperationType"] = "ot";
    CompactChangeEventFields["FullDocument"] = "fd";
    CompactChangeEventFields["DocumentKey"] = "dk";
    CompactChangeEventFields["UpdateDescription"] = "ud";
    CompactChangeEventFields["StitchDocumentVersion"] = "sdv";
    CompactChangeEventFields["StitchDocumentHash"] = "sdh";
})(CompactChangeEventFields || (CompactChangeEventFields = {}));
var ResultDecoders_RemoteInsertManyResultDecoder = (function () {
    function RemoteInsertManyResultDecoder() {
    }
    RemoteInsertManyResultDecoder.prototype.decode = function (from) {
        return new esm_RemoteInsertManyResult(from[RemoteInsertManyResultFields.InsertedIds]);
    };
    return RemoteInsertManyResultDecoder;
}());
var RemoteInsertOneResultDecoder = (function () {
    function RemoteInsertOneResultDecoder() {
    }
    RemoteInsertOneResultDecoder.prototype.decode = function (from) {
        return {
            insertedId: from[RemoteInsertOneResultFields.InsertedId]
        };
    };
    return RemoteInsertOneResultDecoder;
}());
var RemoteUpdateResultDecoder = (function () {
    function RemoteUpdateResultDecoder() {
    }
    RemoteUpdateResultDecoder.prototype.decode = function (from) {
        return {
            matchedCount: from[RemoteUpdateResultFields.MatchedCount],
            modifiedCount: from[RemoteUpdateResultFields.ModifiedCount],
            upsertedId: from[RemoteUpdateResultFields.UpsertedId]
        };
    };
    return RemoteUpdateResultDecoder;
}());
var RemoteDeleteResultDecoder = (function () {
    function RemoteDeleteResultDecoder() {
    }
    RemoteDeleteResultDecoder.prototype.decode = function (from) {
        return {
            deletedCount: from[RemoteDeleteResultFields.DeletedCount]
        };
    };
    return RemoteDeleteResultDecoder;
}());
var ResultDecoders_UpdateDescriptionDecoder = (function () {
    function UpdateDescriptionDecoder() {
    }
    UpdateDescriptionDecoder.prototype.decode = function (from) {
        esm["b" /* Assertions */].keyPresent(UpdateDescriptionFields.UpdatedFields, from);
        esm["b" /* Assertions */].keyPresent(UpdateDescriptionFields.RemovedFields, from);
        return {
            removedFields: from[UpdateDescriptionFields.RemovedFields],
            updatedFields: from[UpdateDescriptionFields.UpdatedFields],
        };
    };
    return UpdateDescriptionDecoder;
}());
function decodeBaseChangeEventFields(from, updateDescriptionField, fullDocumentField, decoder) {
    var updateDescription;
    if (updateDescriptionField in from) {
        updateDescription = ResultDecoders.updateDescriptionDecoder.decode(from[updateDescriptionField]);
    }
    else {
        updateDescription = undefined;
    }
    var fullDocument;
    if (fullDocumentField in from) {
        fullDocument = from[fullDocumentField];
        if (decoder) {
            fullDocument = decoder.decode(fullDocument);
        }
    }
    else {
        fullDocument = undefined;
    }
    return { updateDescription: updateDescription, fullDocument: fullDocument };
}
var ResultDecoders_ChangeEventDecoder = (function () {
    function ChangeEventDecoder(decoder) {
        this.decoder = decoder;
    }
    ChangeEventDecoder.prototype.decode = function (from) {
        esm["b" /* Assertions */].keyPresent(ChangeEventFields.Id, from);
        esm["b" /* Assertions */].keyPresent(ChangeEventFields.OperationType, from);
        esm["b" /* Assertions */].keyPresent(ChangeEventFields.Namespace, from);
        esm["b" /* Assertions */].keyPresent(ChangeEventFields.DocumentKey, from);
        var nsDoc = from[ChangeEventFields.Namespace];
        var _a = decodeBaseChangeEventFields(from, ChangeEventFields.UpdateDescription, ChangeEventFields.FullDocument, this.decoder), updateDescription = _a.updateDescription, fullDocument = _a.fullDocument;
        return {
            documentKey: from[ChangeEventFields.DocumentKey],
            fullDocument: fullDocument,
            id: from[ChangeEventFields.Id],
            namespace: {
                collection: nsDoc[ChangeEventFields.NamespaceColl],
                database: nsDoc[ChangeEventFields.NamespaceDb]
            },
            operationType: operationTypeFromRemote(from[ChangeEventFields.OperationType]),
            updateDescription: updateDescription
        };
    };
    return ChangeEventDecoder;
}());
var ResultDecoders_CompactChangeEventDecoder = (function () {
    function CompactChangeEventDecoder(decoder) {
        this.decoder = decoder;
    }
    CompactChangeEventDecoder.prototype.decode = function (from) {
        esm["b" /* Assertions */].keyPresent(CompactChangeEventFields.OperationType, from);
        esm["b" /* Assertions */].keyPresent(CompactChangeEventFields.DocumentKey, from);
        var _a = decodeBaseChangeEventFields(from, CompactChangeEventFields.UpdateDescription, CompactChangeEventFields.FullDocument, this.decoder), updateDescription = _a.updateDescription, fullDocument = _a.fullDocument;
        var stitchDocumentVersion;
        if (CompactChangeEventFields.StitchDocumentVersion in from) {
            stitchDocumentVersion = from[CompactChangeEventFields.StitchDocumentVersion];
        }
        else {
            stitchDocumentVersion = undefined;
        }
        var stitchDocumentHash;
        if (CompactChangeEventFields.StitchDocumentHash in from) {
            stitchDocumentHash = from[CompactChangeEventFields.StitchDocumentHash];
        }
        else {
            stitchDocumentHash = undefined;
        }
        return {
            documentKey: from[CompactChangeEventFields.DocumentKey],
            fullDocument: fullDocument,
            operationType: operationTypeFromRemote(from[CompactChangeEventFields.OperationType]),
            stitchDocumentHash: stitchDocumentHash,
            stitchDocumentVersion: stitchDocumentVersion,
            updateDescription: updateDescription,
        };
    };
    return CompactChangeEventDecoder;
}());
var ResultDecoders = (function () {
    function ResultDecoders() {
    }
    ResultDecoders.remoteInsertManyResultDecoder = new ResultDecoders_RemoteInsertManyResultDecoder();
    ResultDecoders.remoteInsertOneResultDecoder = new RemoteInsertOneResultDecoder();
    ResultDecoders.remoteUpdateResultDecoder = new RemoteUpdateResultDecoder();
    ResultDecoders.remoteDeleteResultDecoder = new RemoteDeleteResultDecoder();
    ResultDecoders.updateDescriptionDecoder = new ResultDecoders_UpdateDescriptionDecoder();
    ResultDecoders.ChangeEventDecoder = ResultDecoders_ChangeEventDecoder;
    ResultDecoders.CompactChangeEventDecoder = ResultDecoders_CompactChangeEventDecoder;
    return ResultDecoders;
}());
/* harmony default export */ var internal_ResultDecoders = (ResultDecoders);
//# sourceMappingURL=ResultDecoders.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoCollectionImpl.js
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var CoreRemoteMongoCollectionImpl_CoreRemoteMongoCollectionImpl = (function () {
    function CoreRemoteMongoCollectionImpl(name, databaseName, service, codec) {
        var _this = this;
        this.name = name;
        this.databaseName = databaseName;
        this.service = service;
        this.codec = codec;
        this.namespace = this.databaseName + "." + this.name;
        this.baseOperationArgs = (function () { return ({
            collection: _this.name,
            database: _this.databaseName
        }); })();
    }
    CoreRemoteMongoCollectionImpl.prototype.withCollectionType = function (codec) {
        return new CoreRemoteMongoCollectionImpl(this.name, this.databaseName, this.service, codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.find = function (filter, options) {
        if (filter === void 0) { filter = {}; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = filter;
        if (options) {
            if (options.limit) {
                args.limit = options.limit;
            }
            if (options.projection) {
                args.project = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
        }
        return new internal_CoreRemoteMongoReadOperation("find", args, this.service, this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.findOne = function (filter, options) {
        if (filter === void 0) { filter = {}; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = filter;
        if (options) {
            if (options.projection) {
                args.project = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
        }
        return this.service.callFunction("findOne", [args], this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.findOneAndUpdate = function (filter, update, options) {
        var args = __assign({}, this.baseOperationArgs);
        args.filter = filter;
        args.update = update;
        if (options) {
            if (options.projection) {
                args.projection = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
            if (options.upsert) {
                args.upsert = true;
            }
            if (options.returnNewDocument) {
                args.returnNewDocument = true;
            }
        }
        return this.service.callFunction("findOneAndUpdate", [args], this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.findOneAndReplace = function (filter, replacement, options) {
        var args = __assign({}, this.baseOperationArgs);
        args.filter = filter;
        args.update = replacement;
        if (options) {
            if (options.projection) {
                args.projection = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
            if (options.upsert) {
                args.upsert = true;
            }
            if (options.returnNewDocument) {
                args.returnNewDocument = true;
            }
        }
        return this.service.callFunction("findOneAndReplace", [args], this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.findOneAndDelete = function (filter, options) {
        var args = __assign({}, this.baseOperationArgs);
        args.filter = filter;
        if (options) {
            if (options.projection) {
                args.projection = options.projection;
            }
            if (options.sort) {
                args.sort = options.sort;
            }
        }
        return this.service.callFunction("findOneAndDelete", [args], this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.aggregate = function (pipeline) {
        var args = __assign({}, this.baseOperationArgs);
        args.pipeline = pipeline;
        return new internal_CoreRemoteMongoReadOperation("aggregate", args, this.service, this.codec);
    };
    CoreRemoteMongoCollectionImpl.prototype.count = function (query, options) {
        if (query === void 0) { query = {}; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        if (options && options.limit) {
            args.limit = options.limit;
        }
        return this.service.callFunction("count", [args]);
    };
    CoreRemoteMongoCollectionImpl.prototype.insertOne = function (value) {
        var args = __assign({}, this.baseOperationArgs);
        args.document = this.generateObjectIdIfMissing(this.codec ? this.codec.encode(value) : value);
        return this.service.callFunction("insertOne", [args], internal_ResultDecoders.remoteInsertOneResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.insertMany = function (docs) {
        var _this = this;
        var args = __assign({}, this.baseOperationArgs);
        args.documents = docs.map(function (doc) {
            return _this.generateObjectIdIfMissing(_this.codec ? _this.codec.encode(doc) : doc);
        });
        return this.service.callFunction("insertMany", [args], internal_ResultDecoders.remoteInsertManyResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.deleteOne = function (query) {
        return this.executeDelete(query, false);
    };
    CoreRemoteMongoCollectionImpl.prototype.deleteMany = function (query) {
        return this.executeDelete(query, true);
    };
    CoreRemoteMongoCollectionImpl.prototype.updateOne = function (query, update, options) {
        return this.executeUpdate(query, update, options, false);
    };
    CoreRemoteMongoCollectionImpl.prototype.updateMany = function (query, update, options) {
        return this.executeUpdate(query, update, options, true);
    };
    CoreRemoteMongoCollectionImpl.prototype.watch = function (arg) {
        var args = __assign({}, this.baseOperationArgs);
        if (arg !== undefined) {
            if (arg instanceof Array) {
                if (arg.length !== 0) {
                    args.ids = arg;
                }
            }
            else if (arg instanceof Object) {
                args.filter = arg;
            }
        }
        args.useCompactEvents = false;
        return this.service.streamFunction("watch", [args], new internal_ResultDecoders.ChangeEventDecoder(this.codec));
    };
    CoreRemoteMongoCollectionImpl.prototype.watchCompact = function (ids) {
        var args = __assign({}, this.baseOperationArgs);
        args.ids = ids;
        args.useCompactEvents = true;
        return this.service.streamFunction("watch", [args], new internal_ResultDecoders.CompactChangeEventDecoder(this.codec));
    };
    CoreRemoteMongoCollectionImpl.prototype.executeDelete = function (query, multi) {
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        return this.service.callFunction(multi ? "deleteMany" : "deleteOne", [args], internal_ResultDecoders.remoteDeleteResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.executeUpdate = function (query, update, options, multi) {
        if (multi === void 0) { multi = false; }
        var args = __assign({}, this.baseOperationArgs);
        args.query = query;
        args.update = update;
        if (options && options.upsert) {
            args.upsert = options.upsert;
        }
        return this.service.callFunction(multi ? "updateMany" : "updateOne", [args], internal_ResultDecoders.remoteUpdateResultDecoder);
    };
    CoreRemoteMongoCollectionImpl.prototype.generateObjectIdIfMissing = function (doc) {
        if (!doc._id) {
            var newDoc = doc;
            newDoc._id = new bson_browser_esm["b" /* default */].ObjectID();
            return newDoc;
        }
        return doc;
    };
    return CoreRemoteMongoCollectionImpl;
}());
/* harmony default export */ var internal_CoreRemoteMongoCollectionImpl = (CoreRemoteMongoCollectionImpl_CoreRemoteMongoCollectionImpl);
//# sourceMappingURL=CoreRemoteMongoCollectionImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoDatabaseImpl.js

var CoreRemoteMongoDatabaseImpl_CoreRemoteMongoDatabaseImpl = (function () {
    function CoreRemoteMongoDatabaseImpl(name, service) {
        this.name = name;
        this.service = service;
    }
    CoreRemoteMongoDatabaseImpl.prototype.collection = function (name, codec) {
        return new internal_CoreRemoteMongoCollectionImpl(name, this.name, this.service, codec);
    };
    return CoreRemoteMongoDatabaseImpl;
}());
/* harmony default export */ var internal_CoreRemoteMongoDatabaseImpl = (CoreRemoteMongoDatabaseImpl_CoreRemoteMongoDatabaseImpl);
//# sourceMappingURL=CoreRemoteMongoDatabaseImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/internal/CoreRemoteMongoClientImpl.js

var CoreRemoteMongoClientImpl_CoreRemoteMongoClientImpl = (function () {
    function CoreRemoteMongoClientImpl(service) {
        this.service = service;
    }
    CoreRemoteMongoClientImpl.prototype.db = function (name) {
        return new internal_CoreRemoteMongoDatabaseImpl(name, this.service);
    };
    return CoreRemoteMongoClientImpl;
}());
/* harmony default export */ var internal_CoreRemoteMongoClientImpl = (CoreRemoteMongoClientImpl_CoreRemoteMongoClientImpl);
//# sourceMappingURL=CoreRemoteMongoClientImpl.js.map
// CONCATENATED MODULE: ./node_modules/mongodb-stitch-core-services-mongodb-remote/dist/esm/index.js
/* concated harmony reexport CoreRemoteMongoClientImpl */__webpack_require__.d(__webpack_exports__, "a", function() { return internal_CoreRemoteMongoClientImpl; });
/* unused concated harmony import CoreRemoteMongoCollectionImpl */
/* unused concated harmony import CoreRemoteMongoDatabaseImpl */
/* unused concated harmony import CoreRemoteMongoReadOperation */
/* unused concated harmony import RemoteInsertManyResult */
/* unused concated harmony import OperationType */







//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=npm.mongodb-stitch-core-services-mongodb-remote.7a8e9d6f2.js.map