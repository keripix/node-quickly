module.exports = {
  version: {
    abbr: "v",
    flag: true,
    callback: function(){
      return "quickly version 0.0.1";
    }
  },
  key: {
    position: 0,
    help: "If supplied, change directory to the path that was mapped to this key"
  },
  add: {
    abbr: "a",
    metavar: "KEY PATH",
    help: "Add the given key and path to the quickly records"
  },
  remove: {
    abbr: "r",
    metavar: "KEY",
    help: "Remove the given key fromt the quickly records"
  },
  edit: {
    abbr: "e",
    metavar: "KEY PATH",
    help: "Set a new path to the given key"
  },
  list: {
    abbr: "l",
    flag: true,
    help: "List all the available keys and the responding paths"
  }
};