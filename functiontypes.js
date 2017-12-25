function greet(m){
    console.log("name "+m);
}
var a=function(m){
    console.log("name "+ m);
};
var b=function(m){ 
    m=m||"haxs";
    console.log("name "+ m);
}();