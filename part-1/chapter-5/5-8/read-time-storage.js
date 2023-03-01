let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  let wm = new WeakMap();

  wm.set(messages[0], new Date());

  console.log( wm.get(messages[0]) );