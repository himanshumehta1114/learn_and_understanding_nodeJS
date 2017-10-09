var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 1 * 1024});

var writable = fs.createWriteStream(__dirname + '/g.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});
