let user = {
    name: "Василий Иванович",
    age: 35
};

let newUser = JSON.parse(JSON.stringify(user));

console.log( user );
console.log( newUser );