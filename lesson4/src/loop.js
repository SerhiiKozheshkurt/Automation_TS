//Цикл for - вивід цифр від 0 до 9

let a = 0;
console.log('---- Початок циклу for - вивід цифр від 0 до 9 ----');

for (a = 0; a < 10; a++) {
    console.log(a);
}
console.log('---- Кінець циклу for - вивід цифр від 0 до 9 ----');


//Цикл for - вивід чисел від 100 до 0

console.log('---- Початок циклу for - вивід чисел від 100 до 0 ----');

for (let b = 100; b >= 0; b -= 10) {
    console.log(b);
}
console.log('---- Кінець циклу for - вивід чисел від 100 до 0 ----');


//Цикл while - вивід цифр від 0 до 9

let c = 0;
console.log('---- Початок циклу while - вивід цифр від 0 до 9 ----');

while (c <= 9) {
    console.log(c);
    c++;
}
console.log('---- Кінець циклу while - вивід цифр від 0 до 9 ----');


//Цикл while - вивід чисел від 0 до 9 (Зробив іншим варіантом)

let d = 101;
console.log('---- Початок циклу while - вивід чисел 100 до 0 ----');

while (d >= 0) {
    d--;
    if (d % 10 !== 0) {
        continue;
    }
    console.log(d);
}
console.log('---- Кінець циклу while - вивід чисел від 100 до 0 ----');


//Цикл do while - вивід цифр від 0 до 9

let e = -1;
console.log('---- Початок циклу do while - вивід цифр від 0 до 9 ----');

do {
    e++;
    console.log(e);
}
while (e < 9);
console.log('---- Кінець циклу do while - вивід цифр від 0 до 9 ----');


//Цикл do while - вивід чисел від 0 до 9

let f = 100;
console.log('---- Початок циклу do while - вивід чисел 100 до 0 ----');

do {
    console.log(f);
    f -= 10;
}
while (f >= 0);
console.log('---- Кінець циклу do while - вивід чисел від 100 до 0 ----');
