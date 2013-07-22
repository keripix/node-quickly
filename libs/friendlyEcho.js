var color = require("colors");
console.log("Please place this inside your ~/.bashrc file:\n".bold.yellow+
"q(){\n"+
"  res=$(q.js $@)\n\n"+
"  if [ -d \"$res\" ]; then\n"+
"      cd $res\n"+
"  else\n"+
"      echo -e \"$res\"\n"+
"  fi\n"+
"}\n\n"+
"Lastly, please source the ~/.bashrc file\n\n".bold.yellow);

console.log("If you want to enable autocompletion, please run these last two steps:\n\n".bold.yellow+
"q.js --completion >> ~/q.completion.sh\n"+
"echo 'source ~/q.completion.sh' >> ~/.bashrc\n\n"+
"Don't forget to source ~/.bashrc afterward\n".bold.yellow);