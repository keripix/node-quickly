var Configstore = require("configstore"),
    conf = new Configstore("quickly");

exports.save = function(key, path){
  conf.set(key, path);
};

exports.get = function(key){
  return conf.get(key);
};

exports.delete = function(key){
  conf.del(key);
};

exports.list = function(){
  return conf.all;
};

exports.removeAll = function(){
  conf.all = {};
};