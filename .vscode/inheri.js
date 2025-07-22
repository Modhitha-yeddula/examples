class Parent{
    pname;
    constructor(pname){
        this.pname=pname;
        console.log("parent constructor");
        
    }
}
class Child extends Parent{
    cname;
    constructor(pname,cname){
        super(pname);
        this.cname=cname;
        console.log("child class constructor");
        
    }
}
let c1=new Child("rg","rjv")
console.log(c1);
