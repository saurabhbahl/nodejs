//var buff = new Buffer("Start It");

//console.log("Buffer Writtern is: "+ buff.toJSON());

// Concatenate Buffers
/*
var b1 = new Buffer("Hello buffer1");
var b2 = new Buffer("\nHello buffer2"); 

var b3 = Buffer.concat([b1, b2]);

console.log("Buffer Cncatenate : "+ b3);

*/

var buff1 = new Buffer("Hi");
var buff2 = new Buffer("Hello");

var buff3 = buff1.compare(buff2);

if( buff3 < 0 )
{
	console.log(buff1 + ' comes before '+ buff2);
}
else if( buff3 == 0 )
{
	console.log(buff1 + ' is same as '+ buff2);
}
else
{
	console.log(buff2 + ' comes before '+ buff1);
}


