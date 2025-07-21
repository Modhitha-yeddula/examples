let x=[10,20,30]
let largeset =x[0]
for(let i=0;i>x[i];i++){
    if(x[i]>largeset){
        largeset=x[i];
    }
}
console.log("Largest Number=",largeset);
