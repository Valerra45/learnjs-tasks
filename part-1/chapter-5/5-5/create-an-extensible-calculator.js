function Calculator() {
    this.operations = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
    }

    this.calculate = (str) => {
        let s = str.split(' ');

        let op = s[1];
        let a = +s[0];
        let b = +s[2];

        if (!this.operations[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.operations[op](a, b);
    }

    this.addOperation = (op, f) => {
        this.operations[op] = f;
    };
}

let powerCalc = new Calculator;

powerCalc.addOperation("*", (a, b) => a * b);
powerCalc.addOperation("/", (a, b) => a / b);
powerCalc.addOperation("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8