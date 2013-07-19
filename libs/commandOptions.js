var opts = require("nomnom")
    .option("version", {
        abbr: "v",
        callback: function(){
            return "quickly version 0.0.1";
        }
    });