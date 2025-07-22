class Account{
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    open_Acc(){
        console.log("Account opened");
        
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount

    }
    withdrawl(amount){
        this.acc_Bal-this.acc_Bal_amount

    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,"rajiv",60000)
let a2=new Account(102,"rao ramesh",65000)
a1.deposit_Amount(500)
a1.deposit_Amount(50)
a1.withdrawl(15);
console.log(a1.get_Bal());
console.log(a1);



