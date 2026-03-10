// node jslearn/day8S1.js
for(let i = 1; i<=10; i++){
   // console.log(i);
} 
for (let  i = 1;  i <=10 ; i++) {
    //console.log(`Table of ${i}`);
   for (let j = 1;  j <=10; j++) {
    const element = j ;
    //console.log(`${i} X ${j} = ${i*j}`);
   }
}
let myarr = ['mango', 'guava', 'banana', 'apple'];
//console.log(`length of array : ${myarr.length}`);
for (let  i= 0;  i < myarr.length ; i++) {
    const element = myarr[i];
   // console.log(element);
}
for (let index = 1 ; index <=20; index++) {
    if(index === 5){
        console.log('5 tu pakda gaya');
        continue;
    }
    console.log(index);
    
}