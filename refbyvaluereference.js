var a=2;
var b=a;
console.log(b);


// when doing the same thing with object
// it uses by reference 

var g= {greeting :"hello"};
console.log(g.greeting);
var c = g;
c.greeting= "whhattt up nig";
console.log(g.greeting);
 // notice that there's only one object and thats being modified 


