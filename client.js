// let http = require('http');

// // Options to be used by request 
// let options = {
//     host: 'localhost',
//     port: '8081',
//     path: '/user.html'  
// };

// // Callback function is used to deal with a response
// let callback = function(response) {
//    // Continuously update stream with data
//     let body = '';
//     response.on('data', function(data) {
//         body += data;
//     });

//     response.on('end', function() {
//         // Data received completely.
//         console.log(body);
//     });
// }

// // Make a request to the server
// let req = http.request(options, callback);
// req.end();