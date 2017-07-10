const { exec } = require('child_process');

let state = {
  lastCheck: 0,
  addOrRemove: 'add',
  commits: 8,
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
      state.total++;
      state.addOrRemove = 'add';
      makeCommit(state.total, state.addOrRemove);
      wait();
    }
  }
}

// let makeCommit = (round) => {
//       exec(`cd ~/Projects/newProjects && touch ${round}.txt && git add -A && git commit -m 'tester2' && git push`, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`exec error: ${error}`);
//           return;
//         }
//         // console.log(`stdout: ${stdout}`);
//         // console.log(`stderr: ${stderr}`);
//       });
// }

let makeCommit = (round, dir) => {
  if (dir === 'add') {
      console.log('trying to ' + dir + ' ' + round + '.txt');
      exec(`cd ~/Projects/newProjects && touch ${round}.txt && git add -A && git commit -m 'tester2' && git push`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        // console.log(`stdout: ${stdout}`);
        // console.log(`stderr: ${stderr}`);
      });
      console.log('finished ' + dir + ' of ' + round + '.txt');
  }
  else if (dir === 'remove') {
      console.log('trying to ' + dir + ' ' + round + '.txt');
      exec(`cd ~/Projects/newProjects && rm ${round}.txt && git add -A && git commit -m 'tester2' && git push`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        // console.log(`stdout: ${stdout}`);
        // console.log(`stderr: ${stderr}`);
      });
      console.log('finished ' + dir + ' of ' + round + '.txt');
  }
}

commit();


// let check = () => setInterval(function() {
//   let currentDate = Date.now();
//   let lastCheck = state.lastCheck;
//   let diff = currentDate - lastCheck;
//   if (diff >= 60000) {
//     state.lastCheck = currentDate;
//     state.commits = Math.floor((Math.random() * 9) + 3);
//     console.log(state.commits);
//     commit();
//   } else {
//     console.log('not time yet');
//   }
// }, 10000);

// let startUp = () => {
//   let startingDate = Date.now();
//   state.lastCheck = startingDate;
//   check();
// }

// startUp();
