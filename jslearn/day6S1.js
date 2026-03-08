// node jslearn/day6S1.js 
// const userlogged = true;
// if (userlogged){
// //console.log('access granted');
// }
// else {
//   //  console.log('access denied');
// }
// if statement me false condition run nahi hoti only true hee hoti hai
const userloggedin = false;
const debit = true;
if(userloggedin && debit){
console.log('yes you can do shopping');
}
else if(userloggedin){
    console.log('you can only see the offers');
}
else if(debit){
    console.log('you can buy but you must log in first');
}
else{
    console.log('kya re bhikmangya');
}