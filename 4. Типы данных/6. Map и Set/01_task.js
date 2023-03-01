function unique(arr) {
    uniqueValues = new Set(arr);
    return uniqueValues
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));