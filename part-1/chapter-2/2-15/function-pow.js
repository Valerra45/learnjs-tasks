function pow(a, b) {
    let result = a;

    for (let i = 1; i < b; i++) {
        result *= a;
    }

    return result;
}

console.log( pow(3, 3) );