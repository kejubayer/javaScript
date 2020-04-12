while (true) {
    let rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 9) {
        console.log('Winner');
        break;
    } else {
        console.log('You have got ' + rand);
    }
}

for (let i=1;i<=10;i++){
    if (i%8===0){
        break
    }else {
        console.log(i);
    }
}