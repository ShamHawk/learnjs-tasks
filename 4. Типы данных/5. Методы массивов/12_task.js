function unique(arr) {
    let uniqueElements = [];
    for (let elem of arr) {
        if (!uniqueElements.includes(elem)) {
            uniqueElements.push(elem)
        }
    }
    return uniqueElements;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O