/*
for (let i = 0; i < 100; i++) {
    console.log((i + 1) + ': Jubayer')
}*/

/*for (let i=1;i<=100;i++){
    if (i%2===1){
        console.log(i);
    }
}*/
let n = 0;

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(n + ' + ' + i + " = " + (n + i));
        n += i;
    }
}

console.log('result = ' + n);