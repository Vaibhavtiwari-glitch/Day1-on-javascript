// node jslearn/day11S1.js
const coding = ['js','py','java'];
const values = coding.forEach((item)=>{
 //console.log(item);
});
// for each dosent return any values
//console.log(values);
const nums = [1,2,3,4,5,6,7,8,9,10];
// const newno =nums.filter((no)=>{
//    return no >4;
// });
// console.log(newno);
// const newnums = []

// nums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num);
//     }
// })
// console.log(newnums);
// const newnums = nums.map((no)=>{
//     return no + 10 ;
// });
// console.log(newnums);
const newnums = nums.map((no)=>{
    return no *10;
}).map((no)=>{
return no + 1;
}).filter((no)=>{
    return no >= 50 ;
})
console.log(newnums);