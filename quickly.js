var keyHandler = require("./libs/keyHandler");

module.exports = function(opt){
  if (opt.add){
    keyHandler.add(opt.add, opt.key);
  } else if (opt.remove){
    keyHandler.delete(opt.remove);
  } else if (opt.edit){
    keyHandler.edit(opt.edit, opt.key);
  } else if (opt.list){
    keyHandler.list();
  } else {
    if (opt.key){
      keyHandler.get(opt.key);
    }
  }
};