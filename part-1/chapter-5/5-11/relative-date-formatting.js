function formatDate(date) {
    let dif = new Date() - date;

    if (dif < 1000) {
        return 'прямо сейчас';
    }

    let s = Math.floor(dif / 1000);

    if (s < 60) {
        return s + ' сек. назад';
    }

    let m = Math.floor(dif / 60000);
    if (m < 60) {
        return m + ' мин. назад';
    }

    let YY = date.getFullYear();   
    let MM = String(date.getMonth() + 1).padStart(2, '0');
    let DD = String(date.getDate()).padStart(2, '0');
    let hh = String(date.getHours()).padStart(2, '0');
    let mm = String(date.getMinutes()).padStart(2, '0');

    return `${DD}.${MM}.${YY} ${hh}:${mm}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );