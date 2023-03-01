function checkSpam(str) {
    let s = str.toLowerCase();

    return s.includes('viagra')
        || s.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );