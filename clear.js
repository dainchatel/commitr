const { exec } = require('child_process');

let clear = () => {
  exec(`cd ~/Projects/ && rm -r newProjects/* && cd newProjects/ && git add -A && git commit -m 'clearing the directory' && git push`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}

clear();
