function unique(arr) {
    let result = [];

    for (let s of arr) {
        if (!result.includes(s)) {
            result.push(s);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O