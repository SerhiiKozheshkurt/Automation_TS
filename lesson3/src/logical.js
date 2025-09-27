const a = 1;
const b = '9';
const b1 = 'Hello';
const c = true;
const d = null;
let e;
const [f] = [1, '5', false];

//Оператори порівняння

console.log('----- Оператори порівняння Number + String -----');
console.log(a > b);
console.log(a > b1);
console.log(a < b);
console.log(a < b1);
console.log(a >= b);
console.log(a <= b);
console.log(a >= b1);
console.log(a == b);
console.log(a == b1);
console.log(a != b);
console.log(a != b1);

console.log('----- з приведенням типів Number + String -----');
console.log(a === b);
console.log(a === b1);
console.log(a !== b);
console.log(a !== b1);

console.log('----- Оператори порівняння Number + Boolean -----');
console.log(a > c);
console.log(a < c);
console.log(a >= c);
console.log(a <= c);
console.log(a == c);
console.log(a != c);

console.log('----- з приведенням типів Number + Boolean -----');
console.log(a === c);
console.log(a !== c);

console.log('----- Оператори порівняння Number + Null -----');
console.log(a > d);
console.log(a < d);
console.log(a >= d);
console.log(a <= d);
console.log(a == d);
console.log(a != d);

console.log('----- з приведенням типів Number + Null -----');
console.log(a === d);
console.log(a !== d);

console.log('----- Оператори порівняння Number + Undefined -----');
console.log(a > e);
console.log(a < e);
console.log(a >= e);
console.log(a <= e);
console.log(a == e);
console.log(a != e);

console.log('----- з приведенням типів Number + Undefined -----');
console.log(a === e);
console.log(a !== e);

console.log('----- Оператори порівняння Number + Object -----');
console.log(a > f);
console.log(a < f);
console.log(a >= f);
console.log(a <= f);
console.log(a == f);
console.log(a != f);

console.log('----- з приведенням типів Number + Object -----');
console.log(a === f);
console.log(a !== f);

console.log('----- Оператори порівняння String + String -----');
console.log(b > b1);
console.log(b < b1);
console.log(b >= b1);
console.log(b <= b1);
console.log(b == b1);
console.log(b != b1);

console.log('----- з приведенням типів String + String -----');
console.log(b === b1);
console.log(b !== b1);

console.log('----- Оператори порівняння String + Boolean -----');
console.log(b > c);
console.log(b1 > c);
console.log(b < c);
console.log(b1 < c);
console.log(b >= c);
console.log(b1 >= c);
console.log(b <= c);
console.log(b == c);
console.log(b1 == c);
console.log(b != c);
console.log(b1 != c);

console.log('----- з приведенням типів String + Boolean -----');
console.log(b === c);
console.log(b1 === c);
console.log(b !== c);
console.log(b1 !== c);

console.log('----- Оператори порівняння String + Null -----');
console.log(b > d);
console.log(b1 > d);
console.log(b < d);
console.log(b >= d);
console.log(b1 >= d);
console.log(b <= d);
console.log(b == d);
console.log(b1 == d);
console.log(b != d);
console.log(b1 != d);

console.log('----- з приведенням типів String + Null -----');
console.log(b === d);
console.log(b1 === d);
console.log(b !== d);
console.log(b1 !== d);

console.log('----- Оператори порівняння String + Undefined -----');
console.log(b > e);
console.log(b1 > e);
console.log(b < e);
console.log(b1 < e);
console.log(b >= e);
console.log(b1 >= e);
console.log(b <= e);
console.log(b1 <= e);
console.log(b == e);
console.log(b1 == e);
console.log(b != e);
console.log(b1 != e);

console.log('----- з приведенням типів String + Undefined -----');
console.log(b === e);
console.log(b1 === e);
console.log(b !== e);
console.log(b1 !== e);

console.log('----- Оператори порівняння String + Object -----');
console.log(b > f);
console.log(b1 > f);
console.log(b < f);
console.log(b1 < f);
console.log(b >= f);
console.log(b1 >= f);
console.log(b <= f);
console.log(b1 <= f);
console.log(b == f);
console.log(b1 == f);
console.log(b != f);
console.log(b1 != f);

console.log('----- з приведенням типів String + Object -----');
console.log(b === f);
console.log(b1 === f);
console.log(b !== f);
console.log(b1 !== f);

console.log('----- Оператори порівняння Boolean + Null -----');
console.log(c > d);
console.log(c < d);
console.log(c >= d);
console.log(c <= d);
console.log(c == d);
console.log(c != d);

console.log('----- з приведенням типів Boolean + Null -----');
console.log(c === d);
console.log(c !== d);

console.log('----- Оператори порівняння Boolean + Undefined -----');
console.log(c > e);
console.log(c < e);
console.log(c >= e);
console.log(c <= e);
console.log(c == e);
console.log(c != e);

console.log('----- з приведенням типів Boolean + Undefined -----');
console.log(c === e);
console.log(c !== e);

console.log('----- Оператори порівняння Boolean + Object -----');
console.log(c > f);
console.log(c < f);
console.log(c >= f);
console.log(c <= f);
console.log(c == f);
console.log(c != f);

console.log('----- з приведенням типів Boolean + Object -----');
console.log(c === f);
console.log(c !== f);

console.log('----- Оператори порівняння Null + Undefined -----');
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log(d == e);
console.log(d != e);

console.log('----- з приведенням типів Null + Undefined -----');
console.log(d === e);
console.log(d !== e);

console.log('----- Оператори порівняння Null + Object -----');
console.log(d > f);
console.log(d < f);
console.log(d >= f);
console.log(d <= f);
console.log(d == f);
console.log(d != f);

console.log('----- з приведенням типів Null + Object -----');
console.log(d === f);
console.log(d !== f);

console.log('----- Оператори порівняння Undefined + Object -----');
console.log(e > f);
console.log(e < f);
console.log(e >= f);
console.log(e <= f);
console.log(e == f);
console.log(e != f);

console.log('----- з приведенням типів Undefined + Object -----');
console.log(e === f);
console.log(e !== f);


//Логічні оператори

/* const a = 1;
const b = '9';
const c = true;
const d = null;
let e; */

console.log('----- Логічний оператор && (AND) Number + String -----');
console.log(a < b && b > 5); //TRUE && TRUE -> TRUE
console.log(a > b && b >= 7); //FALSE && TRUE -> FALSE
console.log(a < b && b < 2); //TRUE && FALSE -> FALSE
console.log(a > b && b < 6); //FALSE && FALSE -> FALSE

console.log('----- Логічний оператор && (AND) Number + Boolean -----');
console.log(a <= c && c > 0); //TRUE && TRUE -> TRUE
console.log(a !== c && c >= 5); //TRUE && FALSE -> FALSE
console.log(a >= c && c > 2); //FALSE && TRUE -> FALSE
console.log(a === c && c >= 5); //FALSE && FALSE -> FALSE

console.log('----- Логічний оператор && (AND) Number + Null -----');
console.log(a >= d && a > 0); //TRUE && TRUE -> TRUE
console.log(a !== d && d >= 5); //TRUE && FALSE -> FALSE
console.log(a < d && a >= 0); //FALSE && TRUE -> FALSE
console.log(a === d && a !== 1); //FALSE && FALSE -> FALSE

console.log('----- Логічний оператор && (AND) Number + Undefined -----');
console.log(a >= 0 && e !== a); //TRUE && TRUE -> TRUE
console.log(a !== e && e <= 10); //TRUE && FALSE -> FALSE
console.log(a < e && a >= 0); //FALSE && TRUE -> FALSE
console.log(a === e && a !== 1); //FALSE && FALSE -> FALSE

console.log('----- Логічний оператор && (AND) Number + String + Null + Boolean + Undefined -----');
console.log(b !== e && c >= d); //TRUE && TRUE -> TRUE
console.log(a <= c && d === 0); //TRUE && FALSE -> FALSE
console.log(b > !c && e >= 0); //TRUE && FALSE -> FALSE
console.log(a === e && d > 1); //FALSE && FALSE -> FALSE


console.log('----- Логічний оператор || (OR) Number + String + Null + Boolean + Undefined -----');
console.log(a >= d || c <= b); //TRUE || TRUE -> TRUE
console.log(b !== e || d > a);//TRUE || FALSE -> TRUE
console.log(d === 0 || a < 10);//FALSE || TRUE -> TRUE
console.log(!c || e <= d);//FALSE || FALSE -> FALSE

console.log('----- Логічний оператор && (AND), || (OR) ! (NOT) -----');
console.log(a <= b && (c > 0 || b !== e)); //TRUE && TRUE(TRUE || TRUE) -> TRUE
console.log(b !== e || (e > a && d > 1));//TRUE || FALSE(FALSE && FALSE) -> TRUE
console.log(a < e || !(a > b && b > 6));//FALSE || !FALSE(FALSE && TRUE) -> TRUE


console.log('----- Логічний оператор ?? (оператор null-об’єднання) -----');

const number = 5;

const result = number > 0 ? 'Додатне число' : 'Не додатне число';
console.log(result);
