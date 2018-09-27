var assert = require('assert');
var fs = require('fs');
var path = require('path');
var strip = require('../lib/removeComment');

function getPath(filepath) {
  return path.join(__dirname, filepath);
}

function writeFileSync(filepath, data) {
  fs.writeFileSync(getPath(filepath), data, { encoding: 'utf8'});
}

describe('Remove comments', function() {
  var html = fs.readFileSync(getPath('demo/index.html'), { encoding: 'utf8' });

  it('Strip html', function() {
    var ret = strip(html);

    writeFileSync('demo/index.dest.html', ret);
    writeFileSync('demo/index.dest.line.html', strip(html, true));
  });

});


describe('Remove comments vm', function() {
  var html = fs.readFileSync(getPath('demo/vm.html'), { encoding: 'utf8' });

  it('Strip vm', function() {
    var ret = strip(html);

    writeFileSync('demo/vm.dest.html', ret);
    writeFileSync('demo/vm.dest.line.html', strip(html, true));
  });

});
