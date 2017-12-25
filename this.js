function a(){
    this.newvariable="this was created inside a function";
}
a();
console.log(newvariable);


var c={
    name :"new object",
    log :function(){
        //var self = this;
        //replace this with self everywhere to produce the required results
        this.name= "object changed up log function";
        console.log(this);
        var setname = function(){
            this.name ="function inside a function ";
        }
        setname();
        console.log(this);
    }   

}

c.log();
console.log("name in global : " + name );