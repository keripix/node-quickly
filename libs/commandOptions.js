module.exports = {
  version: {
    abbr: "v",
    callback: function(){
      return "quickly version 0.0.1";
    }
  },
  add: {
    abbr: "a",
    help: "Add the given key and path to the quickly records"
  },
  remove: {
    abbr: "rm",
    help: "Remove the given key fromt the quickly records"
  },
  edit: {
    abbr: "e",
    help: "Set a new path to the given key"
  },
  list: {
    abbr: "ls",
    help: "List all the available keys and the responding paths"
  }
};