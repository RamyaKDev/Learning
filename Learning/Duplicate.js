let a=[5,2,1,3,5,2];
// let seta=new Set(a);
// //let uniquen=[...seta];
// console.log(seta);
let n=[];
for(let i=0;i<a.length;i++){
    if(!n.includes(a[i]))
       n.push(a[i]);
}
console.log(...n);