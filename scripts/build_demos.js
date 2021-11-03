const { join } = require('path');
const { readdirSync } = require('fs');
const { spawnSync } = require('child_process');

const projects = readdirSync(join(__dirname, '../demos'));

function build(projectName) {
  const contextPath = join(__dirname, '../demos', projectName);
  const spawnOptions = {
    stdio: 'inherit',
    cwd: contextPath,
  };
  try {
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    spawnSync(cmd, ['install'], spawnOptions);
    spawnSync(cmd, ['run', 'build'], spawnOptions);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

Promise.all(
  projects.map(projectName => build(projectName))
)
  .then(() => {
    console.log('Build successful!');
    process.exit(0);
  })
  .catch((err) => {
    console.log('Build failed with error!')
    console.log(err);
    process.exit(1);
  });
