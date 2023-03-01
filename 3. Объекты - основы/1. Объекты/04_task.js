let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let count = 0;
for (key in salaries) {
    count += salaries[key];
}
console.log (count)