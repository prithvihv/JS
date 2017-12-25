
function buildfunction(){
    var arr=[];

    for(var i =0 ;i<3;i++){
         arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}
var fs =buildfunction();
console.log(fs);
fs[0]();
fs[1]();
fs[2]();


function buildfunction2(){
    var arr=[];

    for(var i =0 ;i<3;i++){
        /*let j=i;//es6
         arr.push(function(){
            console.log(j);
        });*/
        arr.push(
            (function(j){
              return function(){
                  console.log(j);
              }  
            }(i))
        );
    }
    return arr;
}
var fs2 =buildfunction2();
console.log(fs2);
fs2[0]();
fs2[1]();
fs2[2]();