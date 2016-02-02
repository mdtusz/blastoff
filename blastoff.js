// 'use strict'
var http = require('http');
var cheerio = require('cheerio');

var blastoff = (function () {

  function getLaunchData(count, callback) {

    if (typeof count === 'function') {
      callback = count;
      count = 1;
    }

    http.get('http://spaceflightnow.com/launch-schedule/', function (response) {

      var body = '';
      response.on('data', function (chunk) {
        body += chunk;
      });
      response.on('error', function (err) {
        return callback(err);
      });
      response.on('end', function () {
        return callback(null, parseLaunchData(body, count));
      });

    });
  }

  function parseLaunchData(data, count) {
    var $ = cheerio.load(data);
    var launchData = [];

    var launchCount = $('.datename .mission').length;

    for (var i = 0; i < count && i < 60; i++) {
      mission = $('.datename .mission').eq(i).text();
      date = $('.datename .launchdate').eq(i).text();
      missiondata = $('.missiondata').eq(i).text().split('\n');

      if(missiondata.length < 2){
        break;
      }

      launchtime = missiondata[0].slice(13);
      launchsite = missiondata[1].slice(13);
      description = $('.missdescrip').eq(i).text().slice(0, -9);

      launchData.push({
        mission: mission,
        date: date,
        launchtime: launchtime,
        launchsite: launchsite,
        description: description
      });
    }

    return launchData;
  }

  return getLaunchData;

})();

module.exports = blastoff;
