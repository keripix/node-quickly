var Configstore = require("configstore"),
    conf = new Configstore("quickly"),
    fs = require("fs");

function resolvePath(path){
  return fs.realpathSync(path);
}

exports.save = function(key, path){
  var resolved = resolvePath(path);

  if (resolved){
    conf.set(key, resolved);
  }
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