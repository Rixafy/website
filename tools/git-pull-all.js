const path = require('path');
const {spawn} = require('child_process');
const _ = require('lodash');

const {repositories} = require(__dirname + '/../data/repositories');
const vcsRoot = path.resolve(__dirname + '/../data/vcs');
const processes = [];

function cloneAllRepos() {
  _.forEach(repositories, repo => {
    cloneRepo(repo);
  })
}

function cloneRepo(repo) {
  const p = spawn('git', ['clone', `https://github.com/contributte/${repo}.git`], {cwd: vcsRoot});
  processes.push(p);

  p.stdout.on('data', (data) => {
    console.log(`[${repo}]: ${data}`);
  });

  p.stderr.on('data', (data) => {
    console.log(`![${repo}]: ${data}`);
  });

  p.on('close', (code) => {
    if (code === 0) {
      console.log(`[${repo}]: DONE`);
    } else {
      console.log(`[${repo}]: FAILED`);
    }
  });
}

function syncRepo(repo) {
  const p = spawn('git', ['fetch'], {cwd: vcsRoot + "/" + repo});
  processes.push(p);

  p.stdout.on('data', (data) => {
    console.log(`[${repo}]: ${data}`);
  });

  p.stderr.on('data', (data) => {
    console.log(`![${repo}]: ${data}`);
  });

  p.on('close', (code) => {
    if (code === 0) {
      console.log(`[${repo}]: DONE`);
    } else {
      console.log(`[${repo}]: FAILED`);
    }
  });
}

// ===========================

cloneAllRepos();
