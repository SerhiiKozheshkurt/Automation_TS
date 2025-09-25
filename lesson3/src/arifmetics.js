//Змінні типу Number
let a = 6;
let b = 4;

console.log('----- Математичні операції з використанням змінних типу Number -----');
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);

//Інкремент та декремент

console.log('----- Математичні операції з використанням інкременту та декременту -----');

console.log('Змінна а = ' + a);
console.log(++a);
console.log(--b);

//undefined

let c;

console.log('----- Математичні операції з використанням змінних типу Number + undefined -----');
console.log(b + c);
console.log(b - c);
console.log(b * c);
console.log(b / c);
console.log('Змінна а = ' + a);

//String

const d = '2';
const e = ' Тип змінної ';

console.log('----- Математичні операції з використанням String + Number -----');
console.log((a + d), typeof (a + d));
console.log((a - d), typeof (a - d));
console.log((a + e + d), typeof (a + e + d));
console.log((a * d), typeof (a * d));
console.log((a / d), typeof (a / d));

console.log('----- Математичні операції з використанням String + undefined -----');
console.log((a + c), typeof (a + c));
console.log((a - c), typeof (a - c));

//Булєві значення

const f = true;
const g = false;

console.log('----- Математичні операції з використанням Boolean + Number -----');

console.log('Змінна а = ' + a);
console.log((a + f), typeof (a + f));
console.log((a - g), typeof (a - g));
console.log((a * f), typeof (a * f));
console.log((a / g), typeof (a / g));

console.log('----- Математичні операції з використанням Boolean + String -----');
console.log((d + f), typeof (d + f));
console.log((e - g), typeof (e - g));
console.log((d * f), typeof (d * f));
console.log((e / g), typeof (e / g));

console.log('----- Математичні операції з використанням Boolean + undefined -----');
console.log((c + f), typeof (c + f));
console.log((c - f), typeof (c - f));

//Null

const h = null;

console.log('----- Математичні операції з використанням Null + Number -----');
console.log('Змінна а = ' + a);
console.log((a + h), typeof (a + h));
console.log((a - h), typeof (a - h));
console.log((a * h), typeof (a * h));
console.log((a / h), typeof (a / h));

console.log('----- Математичні операції з використанням Null + String -----');
console.log((d + h), typeof (d + h));
console.log((e + h), typeof (e + h));
console.log((d - h), typeof (d - h));
console.log((e * h), typeof (e * h));
console.log((d / h), typeof (d / h));

console.log('----- Математичні операції з використанням Null + undefined -----');
console.log((c + h), typeof (c + h));
console.log((c - h), typeof (c - h));
console.log((c * h), typeof (c * h));
console.log((c / h), typeof (c / h));

console.log('----- Математичні операції з використанням Null + Boolean -----');
console.log((f + h), typeof (f + h));
console.log((g - h), typeof (g - h));
console.log((f * h), typeof (f * h));
console.log((g / h), typeof (g / h));
console.log((h / g), typeof (h / g));


//Object

const [array] = [1, '2', 4, false, null];

console.log('----- Математичні операції з використанням Object + Number -----');
console.log('Змінна а = ' + a);
console.log((a + [array]), typeof (a + [array]));
console.log((a - [array]), typeof (a - [array]));
console.log((a * [array]), typeof (a * [array]));
console.log((a / [array]), typeof (a / [array]));
console.log(([array] / a), typeof ([array] / a));

console.log('----- Математичні операції з використанням Object + String -----');
console.log((d + [array]), typeof (d + [array]));
console.log((e + [array]), typeof (e + [array]));
console.log((d - [array]), typeof (d - [array]));
console.log((e - [array]), typeof (e - [array]));
console.log((d * [array]), typeof (d * [array]));
console.log((e / [array]), typeof (e / [array]));
console.log(([array] / e), typeof ([array] / e));

console.log('----- Математичні операції з використанням Object + undefined -----');
console.log('Змінна а = ' + a);
console.log((c + [array]), typeof (c + [array]));
console.log((c - [array]), typeof (c - [array]));
console.log((c * [array]), typeof (c * [array]));
console.log((c / [array]), typeof (c / [array]));
console.log(([array] / c), typeof ([array] / c));


console.log('----- Математичні операції з використанням Object + Boolean -----');
console.log((f + [array]), typeof (f + [array]));
console.log((g - [array]), typeof (g - [array]));
console.log((f * [array]), typeof (f * [array]));
console.log((g / [array]), typeof (g / [array]));

console.log('----- Математичні операції з використанням Object + Null -----');
console.log((h + [array]), typeof (h + [array]));
console.log((h - [array]), typeof (h - [array]));
console.log((h * [array]), typeof (h * [array]));
console.log((h / [array]), typeof (h / [array]));
console.log(([array] / h), typeof ([array] / h));
