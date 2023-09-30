// //import event module
let events = require('events');

// // Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

let listner1 = function listner1() {
    console.log('hello connection');
}

eventEmitter.on('connection', listner1);
// eventEmitter.on('connection', function(){
//     console.log("hello connection")
// });

// Fire the connection event 
eventEmitter.emit('connection');

// // count the number of listener to this event
// let eventListeners = require('events').EventEmitter
//     .listenerCount(eventEmitter, 'connection');
// // let eventListeners = eventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// listener #1
// let listner1 = function listner1() {
//     console.log('listner1 executed.');
// }

// // listener #2
let listner2 = function listner2() {
    console.log('listner2 executed.');
}

// // Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);
eventEmitter.once('connection', listner2);

// let eventListeners = require('events').EventEmitter.listenerCount
//     (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter
                .listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");