//Масив Numbers - створення за допомогою Array.of

console.log('---- Створення масиву Numbers ----');

const arrayNumbers = Array.of(4, 1, 3, 6, 5, 9, 7, 8, 2);
console.log(arrayNumbers, arrayNumbers.length);

console.log(arrayNumbers[7]);


//Масив String - створення за допомогою метода split

console.log('---- Створення масиву String ----');

const arrayPhones = 'Samsung,LG,Apple,Xiaomi,Nokia'.split(',');
console.log(arrayPhones, arrayPhones.length); // ['Samsung','LG','Apple','Xiaomi','Nokia'] 5
console.log(arrayPhones[1], arrayPhones.at(-1)); // LG Nokia


//Масив Boolean - створення за допомогою Push

console.log('---- Створення масиву Boolean ----');

const arrayBoolean = [];
arrayBoolean.push(true);
arrayBoolean.push(false);
console.log(arrayBoolean, arrayBoolean.length); // [ true, false ] 2


//Масив Any

console.log('---- Створення масиву Any ----');

const arrayAny = new Array (1, true, '3', 4, 'text', false, 9);
console.log(arrayAny, arrayAny.length); // [ 1, true, '3', 4, 'text', false, 9] 7


//Робота з масивами

console.log('---- Зміна другого елементу в масиві arrayPhones ----');

console.log(arrayPhones, arrayPhones.length); // [ 'Samsung', 'LG', 'Apple', 'Xiaomi', 'Nokia' ] 5
arrayPhones[1] = 'Poco';
console.log(arrayPhones, arrayPhones.length); // [ 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia' ] 5

console.log('---- Додавання елементу в кінець масиву - Push ----');

console.log(arrayPhones, arrayPhones.length); // [ 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia' ] 5
arrayPhones.push('LG');
console.log(arrayPhones, arrayPhones.length); // [ 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia', 'LG' ] 6

console.log('---- Додавання елементу на початок масиву - unshift ----');

console.log(arrayPhones, arrayPhones.length); // [ 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia', 'LG' ] 6
arrayPhones.unshift('Vivo');
console.log(arrayPhones, arrayPhones.length); // [ 'Vivo', 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia', 'LG' ] 7

console.log('---- Визначення індексу елемента масиву----');

console.log(arrayPhones, arrayPhones.length); // [ 'Vivo', 'Samsung', 'Poco', 'Apple', 'Xiaomi', 'Nokia', 'LG' ] 7
console.log(arrayPhones.indexOf('Apple')); // 3 - Повертає індекс зазначеного елементу
console.log(arrayPhones.indexOf('Motorola')); // -1, бо елемент відсутній в масиві

console.log('---- Додавання до масиву елементу в середину масиву----');

arrayPhones.splice(6, 0, 'Poco'); // вставляємо в середину масиву ще один телефон 'Poco' з індексом 6
console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 8
console.log(arrayPhones.lastIndexOf('Poco')); // 6 - Повертає індекс останнього елементу Poco в масиві

console.log('---- Перевірка наявності елементу в масиві ----');

console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 8
console.log(arrayPhones.includes('Apple')); // true

console.log('---- Пошук першого елементу за умовою в масиві ----');

console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 8
const phone = arrayPhones.find(arrayPhones => arrayPhones.startsWith('X'));
console.log(phone); // Xiaomi

console.log('---- Пошук індекса елементу за умовою в масиві ----');

console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 8
const indexPhone = arrayPhones.findIndex(arrayPhones => arrayPhones === 'Nokia');
console.log(indexPhone); // 5


console.log('---- Видалення останнього елементу з масиву - Pop ----');

console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 8
const lastArrayPhone = arrayPhones.pop(); // Видаляє останній едемент масиву і повертає його видалене значення
console.log(lastArrayPhone, arrayPhones); // LG [ 'Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco']

console.log('---- Видалення першого елементу з масиву - shift ----');

console.log(arrayPhones, arrayPhones.length); // ['Vivo','Samsung','Poco','Apple','Xiaomi','Nokia','Poco','LG'] 7
const firstArrayPhone = arrayPhones.shift(); // Видаляє останній едемент масиву і повертає його видалене значення
console.log(firstArrayPhone, arrayPhones); // Vivo ['Samsung','Poco','Apple','Xiaomi','Nokia','Poco']


console.log('---- Перебір масиву - forEach ----');

console.log(arrayPhones, arrayPhones.length); // ['Samsung','Poco','Apple','Xiaomi','Nokia','Poco'] 6
arrayPhones.forEach((brand, index) => {
    console.log(`Елемент з індексом ${index}: ${brand}`);
});


console.log('---- Сортування масиву типу String ----');

console.log(arrayPhones, arrayPhones.length); // ['Samsung','Poco','Apple','Xiaomi','Nokia','Poco'] 6
arrayPhones.sort(); // сортує рядки за алфавітом
console.log(arrayPhones, arrayPhones.length); // [ 'Apple', 'Nokia', 'Poco', 'Poco', 'Samsung', 'Xiaomi' ] 6


console.log('---- Сортування масиву типу Boolean ----');

console.log(arrayBoolean, arrayBoolean.length); // [ true, false ] 2
arrayBoolean.sort(); // сортує рядки за значенням 0, 1
console.log(arrayBoolean, arrayBoolean.length); // [ false, true ] 2


console.log('---- Сортування масиву типу Any ----');

console.log(arrayAny, arrayAny.length); // [ 1, true, '3', 4, 'text', false, 9] 7
arrayAny.sort();
console.log(arrayAny, arrayAny.length); // [ 1, '3', 4, 9, false, 'text', true] 7


console.log('---- Сортування масиву типу Numbers ----');

console.log(arrayNumbers, arrayNumbers.length); // [4, 1, 3, 6, 5, 9, 7, 8, 2] 9
arrayNumbers.sort((a, b) => a - b); // сортує числа за зростанням
console.log(arrayNumbers, arrayNumbers.length); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 9
arrayNumbers.sort((a, b) => b - a); // сортує числа за спаданням
console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9


console.log('---- Створення нового масиву - map ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const arrayNumbersTriple = arrayNumbers.map(num => num * 3); // map - створює новий масив, застосовуючи функцію до кожного елемента
console.log(arrayNumbersTriple, arrayNumbers.length); //[27, 24, 21, 18, 15, 12,  9,  6,  3] 9


console.log('---- Створення нового масиву з елементам, які відповідають умовам - filter ----');

console.log(arrayNumbersTriple, arrayNumbersTriple.length); //[27, 24, 21, 18, 15, 12,  9,  6,  3] 9
const arrayNumbersPaired = arrayNumbersTriple.filter(num => num % 2 === 0); // створює новий масив з елементів, що відповідають умові
console.log(arrayNumbersPaired, arrayNumbersPaired.length); // [24, 18, 12, 6] 4


console.log('---- Перевірка на відповідність умовам хоча б одного елементу - some  ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const hasEvent = arrayNumbers.some(num => num * 2 === 0); // перевіряє чи хоча б один елемент відповідає умові
console.log(hasEvent); // false

console.log('---- Перевірка на відповідність умовам всіх елементів - every ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const allPositive = arrayNumbers.every(num => num >= 1); // перевіряє чи всі елементи відповідають умові
console.log(allPositive); // true


console.log('---- Зведення масиву до одного значення - reduce ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const sum = arrayNumbers.reduce((acc, num) => acc + num, 0); // зводить масив до одного значення
console.log(sum); // 45


console.log('---- Пошук максимального значення - reduce ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const max = arrayNumbers.reduce((acc, curr) => Math.max(acc, curr)); // зводить масив до одного значення
console.log(max); // 9


console.log('---- Копіювання масиву за допомогою методу slice ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9

const arrNum1 = arrayNumbers.slice(1, 7); // Копіювання в новий масив тільки елементів з індексами з 1 по 7
console.log(arrNum1); // [ 8, 7, 6, 5, 4, 3 ]

const arrNum2 = arrayNumbers.slice(5); // Копіювання в новий масив тільки елементів з індексами з 5 і до кінця
console.log(arrNum2); // [ 4, 3, 2, 1 ]

const arrNum3 = arrayNumbers.slice(3, -2); // Копіювання в новий масив тільки елементів з індексами з 3 і до 2 з кінця
console.log(arrNum3); // [ 6, 5, 4, 3 ]


console.log('---- Копіювання масиву за допомогою spread оператору ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const newArrayNumbers = [...arrayNumbers]; // Створення нового за допомогою spread оператору
console.log(newArrayNumbers, newArrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9


console.log('---- Копіювання масиву за допомогою методу Array.from ----');

console.log(arrayNumbersTriple, arrayNumbersTriple.length); // [27, 24, 21, 18, 15, 12,  9,  6,  3] 9
const copyArrayNumbers = Array.from(arrayNumbersTriple); // Створення нового за допомогою методу Array.from
console.log(copyArrayNumbers, copyArrayNumbers.length); // [27, 24, 21, 18, 15, 12,  9,  6,  3] 9


console.log('---- Копіювання властивостей з одного (кількох) масивів в цільовий масив - assign ----');

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }


console.log('---- Об"єднання масивів за допомогою методу concat ----');

console.log(arrNum1); // [ 8, 7, 6, 5, 4, 3 ]
console.log(arrNum3); // [ 6, 5, 4, 3 ]

const arrNum4 = arrNum1.concat(arrNum3); // Об"єднання масивів arrNum1 та arrNum3 в arrNum4
console.log(arrNum4); // [ 8, 7, 6, 5, 4, 3, 6, 5, 4, 3 ]


console.log('---- Об"єднання масивів ----');

console.log(arrNum2); // [ 4, 3, 2, 1 ]
console.log(arrNum3); // [ 6, 5, 4, 3 ]

const arrNum5 = [...arrNum2, ...arrNum3, ...[true, 'Some_text']]; // Об"єднання масивів arrNum2 та arrNum3 в arrNum5
console.log(arrNum5); // [ 4, 3, 2, 1, 6, 5, 4, 3, true, 'Some_text' ]


console.log('---- Об"єднання всіх елементи масиву в один рядок за допомогою методу join ----');

console.log(arrayPhones, arrayPhones.length); // [ 'Apple', 'Nokia', 'Poco', 'Poco', 'Samsung', 'Xiaomi' ] 6

console.log(arrayPhones.join());     // Apple,Nokia,Poco,Poco,Samsung,Xiaomi
console.log(arrayPhones.join(' '));  // Apple Nokia Poco Poco Samsung Xiaomi
console.log(arrayPhones.join(' - '));// Apple - Nokia - Poco - Poco - Samsung - Xiaomi
console.log(arrayPhones.join(''));   // AppleNokiaPocoPocoSamsungXiaomi


console.log('---- Створення нового масиву за допомогою методу map ----');

console.log(arrayNumbers, arrayNumbers.length); // [9, 8, 7, 6, 5, 4, 3, 2, 1] 9
const arrayNumbersSquare = arrayNumbers.map(num => num ** 2); // Повертає новий масив з числами з масива arrayNumbers в квадраті
console.log(arrayNumbersSquare, arrayNumbersSquare.length); // [81, 64, 49, 36, 25, 16,  9,  4,  1] 9


console.log('---- Робота з масивом за допомогою методу Set ----');

const mySet = new Set([1, 2, 3, 3, 4]);

console.log(mySet); // Set(4) {1, 2, 3, 4} - створюється масив mySet тільки з унікальними значеннями
console.log(mySet.add(5)); // Set(5) { 1, 2, 3, 4, 5 } - додає значення 5 в множину
console.log(mySet.add(2)); // Set(5) { 1, 2, 3, 4, 5 } - не додасть, бо 2 вже є
console.log(mySet.has(3)); // true
console.log(mySet.size); // 5 - повертає кількість елементів
console.log(mySet.delete(1)); // true - видаляє з масиву значення 1


console.log('---- Перетворення масиву у множину для унікальності за допомогою методу Set ----');

console.log(arrayPhones, arrayPhones.length); // [ 'Apple', 'Nokia', 'Poco', 'Poco', 'Samsung', 'Xiaomi' ] 6
const uniquePhonesSet = new Set(arrayPhones); // Перетворення масиву у множину для унікальності значень в масиві
console.log(uniquePhonesSet); // Set(5) { 'Apple', 'Nokia', 'Poco', 'Samsung', 'Xiaomi' }


console.log('---- Перетворення унікальної множини обратно в масив за допомогою методу Set ----');

console.log(uniquePhonesSet); // Set(5) { 'Apple', 'Nokia', 'Poco', 'Samsung', 'Xiaomi' }
const unicPhones = [...uniquePhonesSet]; // Перетворення унікальної множини назад в масив
console.log(unicPhones); // [ 'Apple', 'Nokia', 'Poco', 'Samsung', 'Xiaomi' ]
