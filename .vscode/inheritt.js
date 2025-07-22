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
        this.acc_mobile=phno;
        this.acc_Bal=amount;

    }
    open_Account(){

    }
    deposit_Amount(){

    }
    withdrawl(amount){

    }
    get_Bal(){

    }
}
let SA1=new SA(101,'Rahul','Wayand',9988997766,5000)
console.log(SA1);

class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    deposit_Amount(){

    }
    withdrawl(amount){

    }
    get_Bal(){

    }
}
new CA(1001,'Sonia','ND',6675895009,50001)