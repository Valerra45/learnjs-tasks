let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet(); //привет здесь будем хранить прочитанные сообщения

readMessages.add(messages[0]); // добавим прочитанное.

// проверка на то что сообщение не прочитано.
console.log( !readMessages.has(messages[1]) );
