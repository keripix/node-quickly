require("colors");
var exec = require("child_process").exec;

exec("which q", function(err, stdout, stderr){
  var qBin = stdout;
  exec("./bin/q.js --completion > ~/q.completion.sh", function(err, stdout, stderr){
    console.log("Firstly, please remove any q related function from your ~/.bashrc file".bold.yellow);
    console.log("Then, please add these two on your ~/.bashrc file\n".bold.yellow);

    console.log("source ~/q.completion.sh".green);
    console.log("source ".green + qBin.green);

    console.log("After that please source your ~/.bashrc file".bold.yellow);
  });
});