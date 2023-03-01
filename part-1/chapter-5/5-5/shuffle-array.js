//алгоритм тасования Фишера — Йетса
function shuffle(arr) {
    let m = arr.length, t, i;

    while (m) {

        i = Math.floor(Math.random() * m--);

        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
}

let arr = [1, 2, 3];

shuffle(arr);

console.log( arr );

shuffle(arr);

console.log( arr );

shuffle(arr);

console.log( arr );

shuffle(arr);

console.log( arr );