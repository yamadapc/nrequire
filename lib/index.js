'use strict';
var child_process = require('child_process');
var fs = require('fs');
var Module = require('module');
var path = require('path');
var _ = require('lodash');

require.extensions['.git'] = loadGit;

function loadGit(url, save) {
  var nodeModulesPath = path.join(process.cwd(), 'node_modules');
  var oldModules = fs.readdirSync(nodeModulesPath);
  var command = 'npm install ' + (save ? '--save' : '') + ' ' + url + ' ';
  child_process.execSync(command, {
    stdio: 'ignore',
  });
  var newModules = fs.readdirSync(nodeModulesPath);
  var added = _.difference(oldModules, newModules)[0];
  if(added) return originalRequire(added);
  else return undefined;
}
exports = module.exports = loadGit;
