require("colors");
var exec = require("child_process").exec;

exec("./bin/q.js --completion > ~/q.completion.sh", function(err, stdout, stderr){
  console.log("Firstly, please remove any q related function from your ~/.bashrc file".bold.yellow);
  console.log("Then, please add this line on your ~/.bashrc file\n".bold.yellow);

  console.log("source ~/q.completion.sh".green);

  console.log("Ok, the last step is rather un-sexy. We need to know where q is installed. Please run this command\n".bold.yellow);
  console.log("which q".green);
  console.log("\nCopy the result above. And then source that path inside your ~/.bashrc. Something like this:\n".bold.yellow);
  console.log("source [path]".green);
  console.log("\nWhere [path] is the result from running which command above".bold.yellow);

  console.log("After that please source your ~/.bashrc file".bold.yellow);
});

