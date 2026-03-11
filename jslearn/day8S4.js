// node jslearn/day8S4.js
// for each loop
 const coding = ['javascript','java','python'];
// coding.forEach((e)=>{
//     console.log(e);
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach((item , index, arr)=>{
//     console.log(item, index, arr);
// });
const mycoding = [
    {
        language : 'javascript',
        extension : 'js'
    },
    {
        language : 'python',
        extension : 'py'
    },
    {
        language : 'java',
        extension : 'java'
    },
    {
        language : 'ruby',
        extension : 'ruby'
    }
]
mycoding.forEach((items)=>{
    console.log(items.language);
})