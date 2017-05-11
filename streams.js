//
/*
var fyl = require('fs');

var data = '';

// Create the readable stream
var rd_fyl = fyl.createReadStream('input.txt');

// Set the encoding type of stream to utf-8
rd_fyl.setEncoding('utf-8');

// Handle stream events -> data, end, error
rd_fyl.on('data', function(chunk) {
	data += chunk;
});

// print data after reading from file using stream
rd_fyl.on('end', function() {
	console.log(data);
});

// Handle the stream at the time of error occur
rd_fyl.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program Ends");
*/

// Write stream

var wri = require("fs");

var data = "This is magic";

// create writeable stream
var write_st = wri.createWriteStream('output.txt');

// Write the data into the stream with encoding type
write_st.write(data, 'utf-8');

// End writing
write_st.end();

// Create an event that will triggered when the data writting will be finished
write_st.on("finish", function() {
	console.log('Writting Finished!');
});

// Create event that will triggered when an error will occured
write_st.on("error", function(err) {
	console.log(err.stack);
});

console.log('Program Ends');




