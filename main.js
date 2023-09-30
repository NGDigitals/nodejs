// let http = require("http");

// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     // response.writeHead(200, {'Content-Type': 'text/html'});
    
//     // Send the response body as "Hello World"
//     let content = {
//         message: 'Hello World\n'
//     }
//     response.end(JSON.stringify(content));
//     // response.end('<h1>My first server ever</h1>');

// }).listen(9000);

// //  // Console will print the message
// console.log('Server running at http://127.0.0.1:9000/');

let fs = require("fs");
let events = require('events');
// // // fs is the file system module we will see it later
// let data = fs.readFileSync('input.txt');

// console.log(data.toString());

// fs.readFile('input.txt', function (err, data) {
//     //this is the callBack function
//     if (err) 
//         return console.error('We have an error', err.stack);
    
//     console.log(data.toString());
// });
    
// console.log("Program Ended");


// Import events module

// // // Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

function sendEventHandler (e) {
    console.log('send event fired', e)
};

function clickEventHandler (e) {
    console.log('click event fired', e)
};

// // // Bind event and event  handler as follows
eventEmitter.on('send', sendEventHandler).on('click', clickEventHandler);
eventEmitter.addListener('send', clickEventHandler);
eventEmitter.removeListener('send', clickEventHandler);
eventEmitter.removeAllListeners(['click', 'send']);
// // eventEmitter.on('click', function (e) {
// //     console.log('click', e)
// // });


// // // Fire an event 
// eventEmitter.emit('click');
// eventEmitter.emit('send');

// // Create an event handler as follows
// let connectHandler = function connected() {
//     console.log('connection succesful.');
//     // Fire the data_received event 
//     eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler
// eventEmitter.on('connect', connectHandler);


// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//     console.log('data received succesfully.');
// });

// // Fire the connection event 
// eventEmitter.emit('connect');

// let cListeners = eventEmitter.listeners('connect');

// // console.log("Program Ended.");