function aclean(arr) {
    let result = []
    let map = new Map();

    for (let w of arr) {
        let s = w.toLowerCase()
        .split('')
        .sort()
        .join('');

        map.set(s, w);
    }

    map.forEach(x => result.push(x));

    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"