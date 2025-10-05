// Стрілочна функція, що приймає масив і виконує операцію додавання елементів

const sumArray = arr => arr.reduce((acc, curr) => acc + curr);

const numbers = [1, 2, 3, 4, 5];
const strings = ['Hello', '  world', '!'];

console.log(sumArray(numbers));
console.log(sumArray(strings));
