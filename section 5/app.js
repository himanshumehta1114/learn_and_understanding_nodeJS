var Emitter = require('events');

var emtr = new Emitter;
emtr.on('greet', function(){
    console.log('HEllo!');
});

emtr.on('greet', function(){
    console.log('Hello again!');
});

emtr.emit('greet');
