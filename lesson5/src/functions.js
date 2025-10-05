// Функція, що приймає масив і виконує операцію додавання елементів

function sumArray(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    });
}

const numbers = [1, 2, 3, 4, 5];
const strings = ['Hello', '  world', '!'];

console.log(sumArray(numbers));
console.log(sumArray(strings));


// Також можна зробити інший варіант. Але в такому випадку, в результаті конкатенвції рядкового масиву
// на початаку значення буде 0

function sumArray2(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    };
    return sum;
}

console.log(sumArray2(numbers));
console.log(sumArray2(strings));


