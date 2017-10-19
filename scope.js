
//lexical environment and scope explained


console.log("hello world");

// in the method the output is 1 cause the lexical environment of
//b .The lexical environment of b makes its outer environment as 
//global .



// function b() {
// 	console.log(myVar);
// }
// function a() {
// 	var myVar=2;
// 	b();
// }
// var myVar=1;
// a();

//there the lexical environment of b making its outer environment 
function b() {
		console.log(myVar);
		}
function a() {
	var myVar=2;
	
	b();
}
var myVar=1;
a();
//b();
// here be cannot be invoked cause it inside a and its not in the 
//global object or the global execution context