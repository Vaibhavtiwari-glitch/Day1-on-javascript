// node jslearn/day8S3.js
// for of

const arr = [1,2,3,4,5];
for (const no of arr) {
    if(no == 2){
      //  console.log('dont do that');
        continue;
    }
    //console.log(no);
}
const str = 'kya samjhe';
for(const s of str){
    if(s == ''){
        continue;
    }
// console.log(s);
}
// maps

const map = new Map()
map.set('1', 'one');
map.set('2', 'two');
map.set('3', 'three');
//console.log(map);
for(const [ma , value] of map){
    //console.log(ma,':-', value);
}
// const obje = {
//     game1 : 'NFS',
//     game2 : 'freefire'
// };
// for(const [keys] of obje){
//     console.log(keys);
// }
const lang = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for(const key in lang){
    console.log(lang[key]);
}