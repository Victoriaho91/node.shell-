process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    const pwd = require("./pwd");
    pwd();
  } else if (cmd === "ls") {
    const ls = require("./ls");
    ls;
  } else if(cmd.slice(0,3) === "cat"){
    const cat = require("./cat")

    cat(cmd.slice(4));
  }else{
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt >");
  }
});
