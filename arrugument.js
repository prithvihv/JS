function greet(firstname ,middlename ,lastname="haxs"){
    console.log(firstname);
    console.log(middlename);
    console.log(lastname);
    console.log(arguments);//SPEACIAL KEY WORK
    console.log("--------------");
}

greet();
greet("yeano");
greet("yena","bello");
greet("use","hax","all the time");