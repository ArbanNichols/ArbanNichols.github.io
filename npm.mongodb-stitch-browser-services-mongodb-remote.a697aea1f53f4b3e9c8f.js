(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0pL4":function(t,n,e){"use strict";var r,o=e("kREo"),i=function(){function t(t){this.proxy=t}return t.prototype.next=function(){return Promise.resolve(this.proxy.next().value)},t}(),p=function(){function t(t){this.proxy=t}return t.prototype.first=function(){return this.proxy.first()},t.prototype.toArray=function(){return this.proxy.toArray()},t.prototype.asArray=function(){return this.toArray()},t.prototype.iterator=function(){return this.proxy.iterator().then((function(t){return new i(t)}))},t}(),u=function(){function t(t){this.proxy=t,this.namespace=this.proxy.namespace}return t.prototype.withCollectionType=function(n){return new t(this.proxy.withCollectionType(n))},t.prototype.count=function(t,n){return this.proxy.count(t,n)},t.prototype.find=function(t,n){return new p(this.proxy.find(t,n))},t.prototype.findOne=function(t,n){return this.proxy.findOne(t,n)},t.prototype.findOneAndUpdate=function(t,n,e){return this.proxy.findOneAndUpdate(t,n,e)},t.prototype.findOneAndReplace=function(t,n,e){return this.proxy.findOneAndReplace(t,n,e)},t.prototype.findOneAndDelete=function(t,n){return this.proxy.findOneAndDelete(t,n)},t.prototype.aggregate=function(t){return new p(this.proxy.aggregate(t))},t.prototype.insertOne=function(t){return this.proxy.insertOne(t)},t.prototype.insertMany=function(t){return this.proxy.insertMany(t)},t.prototype.deleteOne=function(t){return this.proxy.deleteOne(t)},t.prototype.deleteMany=function(t){return this.proxy.deleteMany(t)},t.prototype.updateOne=function(t,n,e){return this.proxy.updateOne(t,n,e)},t.prototype.updateMany=function(t,n,e){return this.proxy.updateMany(t,n,e)},t.prototype.watch=function(t){return this.proxy.watch(t)},t.prototype.watchCompact=function(t){return this.proxy.watchCompact(t)},t}(),y=function(){function t(t){this.proxy=t,this.name=this.proxy.name}return t.prototype.collection=function(t,n){return new u(this.proxy.collection(t,n))},t}(),c=function(){function t(t){this.proxy=t}return t.prototype.db=function(t){return new y(this.proxy.db(t))},t}();(r||(r={})).factory=new(function(){function t(){}return t.prototype.getNamedClient=function(t,n){return new c(new o.a(t))},t}()),e.d(n,"a",(function(){return r}))}}]);