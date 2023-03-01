let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let name = null;
let salary = 0;

function topSalary(salaries) {
    for (let [key, value] of Object.entries(salaries)) {
        if (salary < value) [name, salary] = [key, value];
    }
    return name;
}

console.log(topSalary(salaries));