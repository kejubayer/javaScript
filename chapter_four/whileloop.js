/*
let i = 0;
while (i < 10) {
    console.log((i + 1) + ': Jubayer');
    i++
}*/

let isRunning = true;

while (isRunning){
    let rand = Math.floor(Math.random()*10 + 1);
    if (rand === 9){
        console.log('Winner');
        isRunning = false;
    }else {
        console.log('You have got '+rand);
    }
}


