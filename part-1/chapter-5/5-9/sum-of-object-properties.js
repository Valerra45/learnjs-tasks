function sumSalaries(salaries) {
    return Object.values(salaries)
        .reduce((x, y) => x + y, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650