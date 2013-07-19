module.exports = {
  version: {
    abbr: "v",
    flag: true,
    callback: function(){
      return "quickly version 0.0.1";
    }
  },
  add: {
    abbr: "a",
    string: "-a KEY PATH",
    help: "Add the given key and path to the quickly records"
  },
  remove: {
    abbr: "r",
    string: "-r KEY",
    help: "Remove the given key fromt the quickly records"
  },
  edit: {
    abbr: "e",
    string: "-e KEY",
    help: "Set a new path to the given key"
  },
  list: {
    abbr: "l",
    flag: true,
    help: "List all the available keys and the responding paths"
  }
};