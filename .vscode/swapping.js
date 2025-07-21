let a=[10,80,12,1]
for(let i=0;i<=a.length-1;i++){
    for(let j=0;j<=a.length-1-i;j++){
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log("ascending order of list is:",a.join(","));

