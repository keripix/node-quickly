var keyHandler = require("./libs/keyHandler");

module.exports = function(opt){
  if (opt.add){
    keyHandler.save(opt.add, opt[0]);
  } else if (opt.remove){
    keyHandler.remove(opt.remove);
  } else if (opt.edit){
    keyHandler.edit(opt.edit, opt[0]);
  } else if (opt.list){
    keyHandler.list();
  }
};