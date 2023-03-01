function getLastDayOfMonth(year, month) {
    let d = new Date(year, month + 1, 0);

    return d.getDate();;
}

console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28