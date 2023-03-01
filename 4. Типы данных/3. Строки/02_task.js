function checkSpam (str) {
    let sentence = str.toLowerCase();
    return sentence.includes('viagra') || sentence.includes('xxx');
}

console.log (checkSpam('buy ViAgRA now'))
console.log (checkSpam('free xxxxx'))
console.log (checkSpam('innocent rabbit'))