console.log("Please place this inside your ~/.bashrc file:\n"+
"q(){\n"+
"  res=$(q.js $@)\n\n"+
"  if [ -d \"$res\" ]; then\n"+
"      cd $res\n"+
"  else\n"+
"      echo -e \"$res\"\n"+
"  fi\n"+
"}\n\n"+
"Lastly, please source the ~/.bashrc file\n\n");