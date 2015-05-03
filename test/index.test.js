'use strict'; /* global describe, it, before */
var fs = require('fs');
var path = require('path');
var remove = require('remove');
var should = require('should');
var requireGit = require('..');

describe('require-git', function() {
  describe('requireGit', function() {
    before(function(done) {
      var t = path.join(__dirname, '..', 'node_modules', 'written-number');
      fs.exists(t, function(e) {
        if(e) {
          return remove(t, done);
        }
        done();
      });
    });

    it('gets exposed', function() {
      should.exist(requireGit);
      requireGit.should.be.instanceof(Function);
    });

    it('installs from a git repository and returns its module', function() {
      var old = fs.readdirSync(path.join(__dirname, '..', 'node_modules'));
      old.should.not.include('written-number');
    });
  });
});
