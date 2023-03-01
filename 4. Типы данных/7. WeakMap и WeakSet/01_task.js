let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// для управления отдельными элементами массива чужого кода лучше всего использовать коллекцией WeakSet
let readMessages = new WeakSet();
readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
messages.shift();
