var fs = require("fs");

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
// });

// console.log("Program Ended");

// let fd = fs.open('mario.txt', 'wx', '0666', function(err, data){
//     if(err){
//         return console.log('Error', err.stack)
//     }
//     console.log('File opened')
// })

// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Got file info successfully!");
    
//     // Check file type
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());    
// });

// fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
//     if (err) {
//         return console.error(err);
//     }
    
//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");
    
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data.toString());
//     });
// });

let buf = new Buffer.alloc(1024);

// // console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("Going to read the file");
    
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes/*, buffer*/){
//         if (err){
//             return console.log(err);
//         }
//         console.log(bytes + " bytes read");
        
//         // Print only read bytes to avoid junk.
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });

//     // Close the opened file.
//     fs.close(fd, function(err) {
//         if (err) {
//             return console.error(err);
//         } 
//         console.log("File closed successfully.");
//     });
// });

// var buf = new Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("Going to truncate the file after 10 bytes");
    
//     // Truncate the opened file.
//     fs.truncate(fd, 10, function(err) {
//         if (err) {
//             console.log(err);
//         } 
//         console.log("File truncated successfully.");
//         console.log("Going to read the same file"); 
        
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//             if (err) {
//                 console.log(err);
//             }

//             // Print only read bytes to avoid junk.
//             if(bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }

//             // Close the opened file.
//             fs.close(fd, function(err) {
//                 if (err) {
//                 console.log(err);
//                 } 
//                 console.log("File closed successfully.");
//             });
//         });
//     });
// });

// console.log("Going to delete an existing file");
// fs.unlink('mario.txt', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File deleted successfully!");
// });

// console.log("Going to create directory /tmp/test");
// fs.mkdir('C:/Users/hp/Desktop/nodejs/test',function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Directory created successfully!");
// });

// console.log("Going to read directory /tmp");
// fs.readdir("C:/Users/hp/Desktop/nodejs/", function(err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function (file) {
//         console.log( file);
//     });
// });

// console.log("Going to delete directory /tmp/test");
// fs.rmdir("C:/Users/hp/Desktop/nodejs/test",function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Going to read directory /test");
    
//     fs.readdir("C:/Users/hp/Desktop/nodejs",function(err, files) {
//         if (err) {
//             return console.error(err);
//         }
//         files.forEach( function (file) {
//             console.log( file );
//         });
//     });
// });

console.log( __filename );
console.log( __dirname );