// не сработает,выведется undefined в случае если strict mode не подключен, либо ошибка в противоположном случае

let str = "Привет";

str.test = 5;

console.log(str.test);