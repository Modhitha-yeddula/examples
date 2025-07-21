let x=[80,20,40,88,99,56,42]
for(let i=0;i<x.length;i++){
    for(let j=0;j<x.length-1-i;j++){
        if(x[j]<x[j+1]){
        let temp=x[j];
        x[j]=x[j+1];
        x[j+1]=temp;
    }
}
}
console.log("Descending order is :"+x.join(","));