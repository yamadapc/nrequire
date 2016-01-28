/* jshint -W084 */
'use strict';
var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

function nrequire(url, save) {
  var nodeModulesPath = path.join(process.cwd(), 'node_modules');
  var oldModules = fs.readdirSync(nodeModulesPath);
  var name;

  if(oldModules.indexOf(url) > -1) {
    return require(url);
  } else if(name = getNameCandidate(url) && oldModules.indexOf(name) > -1) {
    return require(name);
  }

  var command = 'npm install ' + (save ? '--save' : '') + ' ' + url + ' ';

  var output = child_process.execSync(command, {
    stdio: 'pipe'
  });

  var added = getAddedModule(output.toString());

  if(added) {
    return require(added);
  }

  function getNameCandidate(url) {
    var m = /([^/\s])+(\.git)?$/.exec(url);
    return m && m[1];
  }

  function getAddedModule(output) {
    var m = /node_modules\/([^\/\s]+)/.exec(output);
    return m && m[1];
  }
}

exports = module.exports = nrequire;
