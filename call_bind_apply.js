var obj={
    firstname:"john",
    lastname: "doe",
    getfullname:function(){
        return this.firstname + " " + this.lastname;
    }
}
var logname= function(ln1,ln2){
    console.log("first langauge :" + ln1);
    console.log("Second langauge :" + ln2);
    console.log(this.firstname+ this.lastname);
}
//logname(); would now throw an error right now beacuse the "this" 
//key word refers to the the logname object and not the obj anymore
//to fix this issue we use the .bind

var workinglog=logname.bind(obj);

//now the workinglog function object , the this variable inside  "this" will always point
//to the obj and now it can access those varibles

workinglog("en","sp");

logname.call(obj,"thing","tinker");
//in the above line of code the call function is used to invoked and bind the first arrgument as the this
//variable

logname.apply(obj,["thing","ttttinker"]);
//the only different between apply and call is that the arrugments are passed in an arr

var obj2={
    firstname:"marry",
    lastname:"ann"
}
console.log(obj.getfullname.apply(obj2));
//in the above l ine the "this" in obj 1 will refer to so

var enwokringlog= logname.bind(obj,"en");
enwokringlog("sp");
//the above funcction is called currying function and it always has a en stored in it as the first variable