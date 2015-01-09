#!/usr/bin/env node

var program = require('commander');
var prettyjson = require('prettyjson');
var blastoff = require('./blastoff');

program
  .version('0.0.1')
  .option('-c, --count [count]', 'The number of launches you would like to see [1]', Number, 1)
  .option('-b, --boring', 'Output data as color-free json. Recommended when blastoff is used programatically')
  .option('-r, --rainbow', 'Enable rainbow mode')
  .usage('[--pretty] [count], where count is the number of launches you\'d like to see')
  .parse(process.argv);


blastoff(program.count, function (err, data) {
  if (program.boring) {
    console.log(data);
  } else {

    if (program.rainbow) {
      options = rainbow;
    }

    console.log(prettyjson.render(data, options));
  }

});

var options = {
  keysColor: 'blue',
  dashColor: 'magenta'
};

var rainbow = {
  keysColor: 'rainbow',
  dashColor: 'rainbow',
  stringColor: 'rainbow'
};