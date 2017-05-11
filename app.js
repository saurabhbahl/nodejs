//var buff = new Buffer("Start It");

//console.log("Buffer Writtern is: "+ buff.toJSON());

// Concatenate Buffers
/*
var b1 = new Buffer("Hello buffer1");
var b2 = new Buffer("\nHello buffer2"); 

var b3 = Buffer.concat([b1, b2]);

console.log("Buffer Cncatenate : "+ b3);



// copy buffer1
var buff = new Buffer("ABC");
var buff2 = new Buffer(2);

buff.copy(buff2);
console.log(buff.toString('utf-8'));

//

// Slice Buffer

var buff = new Buffer("Startit");

var buff = buff.slice(0,3);

console.log(buff.length);
*/

// Compare buffers

var buff1 = new Buffer("ABC");
var buff2 = new Buffer("ABCD");

console.log(buff1.compare(buff2));