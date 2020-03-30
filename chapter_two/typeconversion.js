let str = "1000";
let n = 10;

console.log(Number(str));
console.log(Number.parseInt(str));

console.log(n.toString());

// falsy values
/*
''
0
null
undefined
NaN*/

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

let x = true;
console.log(x.toString());
