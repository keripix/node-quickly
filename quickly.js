var keyHandler = require("./libs/keyHandler");

function listKeys(records){
  for (var key in records){
    console.log(key.bold.yellow + "\t" + records[key].cyan);
  }
}

module.exports = function(opt){
  if (opt.add){
    keyHandler.add(opt.add, opt.key);
  } else if (opt.remove){
    keyHandler.delete(opt.remove);
  } else if (opt.edit){
    keyHandler.edit(opt.edit, opt.key);
  } else if (opt.list){
    listKeys(keyHandler.list());
  } else {
    if (opt.key){
      var path = keyHandler.get(opt.key);

      if (path){
        return path;
      } else {
        console.log("Key cannot be found".bold.red);
      }
    } else {
      console.error("Command not found".bold.red);
    }
  }
};