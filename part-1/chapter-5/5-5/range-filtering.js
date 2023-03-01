function filterRange(arr, a, b) {
    return arr.filter( x => (x >= a && x <= b) );
}

let arr = [5, 3, 8, 1];

console.log( filterRange(arr, 1, 4) );