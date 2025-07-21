let x=[100,200,3000,400,600]
let g=x[0]
for(let i=0;i<x.length;i++){
    if(g<x[i]){
        g=x[i];
    }
}
console.log("Greatest number is:",g);
