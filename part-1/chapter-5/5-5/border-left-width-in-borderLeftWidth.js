function camelize(str) {
    return str.split('-')
        .join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );