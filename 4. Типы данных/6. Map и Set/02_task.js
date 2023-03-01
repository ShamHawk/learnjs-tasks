function aclean(arr) {
    let words = new Map();

    for (let word of arr) {
        let formattedWords = word.toLowerCase().split("").sort().join("");
        words.set(formattedWords, word);
    }
    return Array.from(words.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );