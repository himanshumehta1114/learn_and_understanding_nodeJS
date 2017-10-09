var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');
console.log(__dirname + '/greet.txt');
console.log(greet);
//Running asynchronously we use readFile
var greet2 = fs.readFile(__dirname + '/greet.txt','utf8', function(err, data) {
    console.log(data);
});

console.log('Done!');