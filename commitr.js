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
  console.log(round, operator);
  exec(`cd ~/new_projects/projects && ${operator} ${round}.txt && git add -A && git commit -m '${commits} ${dir} ${round}' && git push`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}


let check = () => setInterval(function() {
  let initializing = new Date();
  let currentDate = initializing.getDate();
  let lastCheck = state.lastCheck;
  if (currentDate !== lastCheck) {
    state.lastCheck = currentDate;
    state.commits = Math.floor((Math.random() * 9) + 3);
    commit();
  } else {
    console.log('not time yet');
  }
}, 300000);

let startUp = () => {
  console.log('hello');
  state.commits = Math.floor((Math.random() * 9) + 3);
  commit();
  let starting = new Date();
  let startingDate = starting.getDate();
  state.lastCheck = startingDate;
  check();
}

startUp();
