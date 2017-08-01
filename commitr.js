const { exec } = require('child_process');

let state = {
  lastCheck: 0,
  addOrRemove: 'add',
  commits: 0,
  total: 0
};

let wait = () => setTimeout(function() {
  commit();
}, 10000);

let commit = () => {
  if (state.commits > 0) {
    if (state.total < 5 && state.addOrRemove === 'add') {
      state.commits--;
      state.total++;
      makeCommit(state.total, state.addOrRemove);
      wait();
    } else if (state.addOrRemove === 'add') {
      state.commits--;
      state.addOrRemove = 'remove';
      makeCommit(state.total, state.addOrRemove);
      wait();
    } else if (state.total > 1) {
      state.commits--;
      state.total--;
      makeCommit(state.total, state.addOrRemove);
      wait();
    } else {
      state.commits--;
      state.addOrRemove = 'add';
      makeCommit(state.total, state.addOrRemove);
      wait();
    }
  }
}

let makeCommit = (round, dir) => {
  let commits = state.commits + 1;
  let operator = '';
  if (dir === 'add') {
    operator = 'touch';
  }
  else if (dir === 'remove') {
    operator = 'rm';
  }
  exec(`cd ~/Projects/newProjects && ${operator} ${round}.txt && git add -A && git commit -m '${commits} ${dir} ${round}' && git push`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}
//       console.log('finished ' + dir + ' of ' + round + '.txt');
//   }
//   else if (dir === 'remove') {
//       // console.log('trying to ' + dir + ' ' + round + '.txt');
//       exec(`cd ~/Projects/newProjects && rm ${round}.txt && git add -A && git commit -m 'tester2' && git push`, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`exec error: ${error}`);
//           return;
//         }
//         // console.log(`stdout: ${stdout}`);
//         // console.log(`stderr: ${stderr}`);
//       });
//       console.log('finished ' + dir + ' of ' + round + '.txt');
//   }
// }

let check = () => setInterval(function() {
  let currentDate = Date.now();
  let lastCheck = state.lastCheck;
  let diff = currentDate - lastCheck;
  if (diff >= 86400000/**/) {
    state.lastCheck = currentDate;
    state.commits = Math.floor((Math.random() * 9) + 3);
    console.log(state.commits);
    commit();
  } else {
    console.log('not time yet');
  }
}, 2700000/**/);

let startUp = () => {
  let startingDate = Date.now();
  state.lastCheck = startingDate;
  check();
}

startUp();
