function getAverageAge(users) {
    return users.reduce ((prev, user) => prev + user.age, 0) / users.length;
}

let arr = [1, 2, 3, 4, 5];

// убрано начальное значение (нет 0 в конце)
let result = arr.reduce((sum, current) => sum + current);

console.log( result ); // 15