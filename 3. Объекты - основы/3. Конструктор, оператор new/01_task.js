// Да, возможно
// пример:
let object = {};

function A() { 
    return object; 
}
function B() { 
    return object; 
}

console.log(new A() == new B());