function unique(arr) {
    let result = [];
    let s = new Set(arr);

    s.forEach(x => result.push(x));

    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O