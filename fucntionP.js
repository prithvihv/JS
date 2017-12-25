function func_(arr,fn){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        newarr.push(fn(arr[i]));
    }
    return newarr;
}
var  arr=[1,2,3];

// var arr2=func_(arr,function(item){
//     return item*2;
// });
var getmultiplied = function(item,limi,multi){
    if(item>limi)
        return item*multi
    return item 
}
var arr3=func_(arr,getmultiplied(1,3));
//console.log(arr2);
console.log(arr3);
