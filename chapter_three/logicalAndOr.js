let name = 'Eftakhar';

/*let fullName = '';

if (name.length===0){
    fullName="KE. Jubayer";
}else {
    fullName=name;
}*/

let fullName = name || "KE. Jubayer";

console.log(fullName);

let isOk = true;

/*if (isOk){
    console.log("Everything is ok");
}*/
isOk && console.log("Everything is ok");

let a = 3;
let b = 3;

(a === b) && console.log("A is equal B");