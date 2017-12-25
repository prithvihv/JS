function a(callback){
    var g=5;
    var w=2;
    console.log(g-w*Math.random());
    console.log("in fucntions a");
    callback();
}
function b(){
    console.log("this is the call backfunction run afterr a is done");
}
a(b);