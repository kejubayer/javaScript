for (; ;) {
    let rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 9) {
        console.log('Winner');
        break;
    } else {
        console.log('You have got ' + rand);
    }
}