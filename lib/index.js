'use strict';
var child_process = require('child_process');
var fs = require('fs');
var Module = require('module');
var path = require('path');
var _ = require('lodash');

var originalRequire = module.require;
module.require = function(pth) {
  if(path.extname(pth) === '.git') return loadGit(pth);
  return originalRequire;
};

function loadGit(url) {
  var nodeModulesPath = path.join(process.cwd(), 'node_modules');
  var oldModules = fs.readdirSync(nodeModulesPath);
  child_process.execSync('npm install --save ' + url + ' ');
  var newModules = fs.readdirSync(nodeModulesPath);
  var added = _.difference(oldModules, newModules)[0];
  if(added) return originalRequire(added);
  else return undefined;
}
exports = module.exports = loadGit;

console.log(require('git://github.com/yamadapc/mocha-spec-cov-alt.git'));
