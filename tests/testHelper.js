var Configstore = require("configstore"),
    conf = new Configstore("quickly"),
    confPath = conf.path,
    fs = require("fs");

exports.beforeTest = function(){
  fs.renameSync(confPath, confPath + ".backup");
};

exports.afterTest = function(){
  fs.unlinkSync(confPath);
  fs.renameSync(confPath + ".backup", confPath);
};