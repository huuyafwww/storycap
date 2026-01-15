#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const copyDir = require('copy-dir');
const cpy = require('cpy');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

/**
 * This script sets up for Storybook examples.
 *
 * Because of Storybook addon channel restriction, storycapture addon(client, e.g. register.js) code
 * should be put under each Storybook project's node_modules directory.
 *
 * This script does:
 *
 * - emulate to `npm i storycapture` under the Storybook example project
 *   - copy package.json
 *   - copy built javascripts
 *   - create symlink .bin/storycapture
 *
 */
async function main() {
  const { _ } = argv;
  const target = _[0];
  if (!target) {
    console.log(`Usage:\n\t${process.argv[1]} directory`);
    return 0;
  }
  const prjDir = path.resolve(__dirname, '../packages/storycapture');
  const cwd = process.cwd();
  const dist = path.resolve(cwd, target, 'node_modules/storycapture');
  if (prjDir === dist) {
    console.error(`target dir shold not be "${prjDir}".`);
    return 1;
  }
  rimraf.sync(dist);
  mkdirp.sync(dist);
  copyDir.sync(`${path.join(prjDir, 'lib')}`, path.join(dist, 'lib'), {});
  await cpy(['package.json', 'register.js'], dist, { cwd: prjDir });
  rimraf.sync(path.resolve(dist, '../.bin/storycapture'));
  mkdirp(path.resolve(dist, '../.bin'));
  fs.symlinkSync(path.resolve(prjDir, 'lib/node/cli.js'), path.resolve(dist, '../.bin/storycapture'));
  fs.chmodSync(path.resolve(dist, '../.bin/storycapture'), 0o775);
  return 0;
}

main()
  .then(code => process.exit(code))
  .catch(err => console.error(err));
