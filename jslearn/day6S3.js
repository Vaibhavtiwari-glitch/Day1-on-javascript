// node jslearn/day6S3.js
const useremail = [];
if(useremail){
    console.log('gotcha');
}
else{
    console.log('bro enter email');
}
/*
here in this case we didnt checked whereter true or false
we just assumed that the useremail string is true and behalf of that
the if staement is running it is called truthy value 
and if the string is empty it is assumed that it is false
and only else statement will run (falsy) it is just wonderful
we didn check whether it is true or false we assumed 
some data to be true and false but in empty array 
some examples of falsy value --> 0 ,-0, 0n(bigInt datatype)
'', "", null ,undefined, NaN other than this are considered truthy values
truthy values --> '0', 'false',' ',[],{},function(){},
*/
const newobj = {};
if(Object.keys(newobj).length  == 0){
    console.log('object is empty');
}
// here we checked wheter the object is empty or not


// nullish coalescing operator(??) : null undefined
// whole story revolve around null and undefined keep in mind that it doesnt sotre null or undefined it simply return null or undefined
let val1;
//val1 = 5 ?? 10 ; // here 5 is stored
//val1 = null ?? 10 ; // here 10 is stored it stores null but here we are having a value so 10 is stored here 
//val1 = undefined ?? null ; // see here null is stored 
//val1 = undefined ?? 15 ; // here val1 wants to store undefined but we have another value 15 so it stores it
//val1 = null ?? 10 ?? 89 ; // here it stores the first value found and if not it stores null or undefined

console.log(val1);
// terniary operator
// condition ? true : false --> syntax of terniary operator
// example
const teaprice = 10;
teaprice > 5 ? console.log('full cup of chai')
: console.log('cutting will be served');
// here we checked the condition in one line 