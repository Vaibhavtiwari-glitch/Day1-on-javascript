// node jslearn/day11S2.js
const arr = [1,2,3];
const inval = 0;


const total = arr.reduce((acc ,curval)=>{
    //console.log(`acc : ${acc} and curval : ${curval}`);
return acc + curval
},34);
//console.log(total);
const shopingcart = [
    {
        itemname : 'js course',
        price : 2999
    },
    {
        itemname : 'py course',
        price : 999
    },
    {
        itemname : 'mobile course',
        price : 4999
    },
]
// let sum = shopingcart.map((add)=>{
//     console.log(add.price);
// return added = added + add.price;
// })
// console.log(`the sum of all the prices : ${added}`);
// here i did it with the map function//
// now lets do it with the reduce function//
let added = shopingcart.reduce((acc, item)=>{
return acc + item.price;
},0);
console.log(added);