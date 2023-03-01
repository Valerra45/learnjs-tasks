function random(min, max) {
    let rnd = min + (max - min + 1) * Math.random();

    return Math.floor(rnd);
}

console.log( random(1, 3) );
console.log( random(1, 3) );
console.log( random(1, 3) );