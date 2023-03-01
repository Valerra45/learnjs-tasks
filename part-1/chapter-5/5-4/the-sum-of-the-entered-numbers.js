function sumInput() {
    let nums = [];

    while (true) {
        let val = prompt('Введите число', 0);

        if (!isFinite(val) || val === '' || val === null) {
            break;
        }

        nums.push(+val);
    }

    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}

alert( sumInput() ) 