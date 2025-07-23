class Account{
    acc_Name;
    acc_Address;
    acc_mobile;
    constructor(name,address,mobile){
        this.acc_Name=name;
        this.acc_Address=address;
        this.acc_mobile=mobile;
    }
    update_Address(){

    }
    update_Mobile(){

    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,address,phno,amount){
        super("Gm","Ga","Ge");
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Address=address;
        this.acc_mobile=phno;
        this.acc_Bal=amount;

    }
    open_Account(){
        console.log("account is opened");

    }
    deposit_Amount(amount){
        this.acc_Bal+=amount;

    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let SA1=new SA(101,'Rahul','Wayand',9988997766,5000)
SA1.deposit_Amount(100)
SA1.withdrawl(15)
console.log(SA1);
console.log(SA1.get_Bal());
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    constructor(id,name,address,phno,amount){
        super();
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Address=address;
        this.acc_mobile=phno;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){
         this.acc_Bal+=amount;
    }
    withdrawl(amount){
         this.acc_Bal-=amount;
    }
    get_Bal(){
         return this.acc_Bal-this.min_Bal;
    }
}
let ca=new CA(1001,'Sonia','ND',6675895009,50001)
ca.deposit_Amount(100)
ca.withdrawl(15)
console.log(ca);
console.log(ca.get_Bal());