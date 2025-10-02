//Оголошення нового обєкту та наповнення його данними

const user1 = {};

user1.id = 1234;
user1.name = 'John';
user1['lastName'] = 'Doe';
user1.age = 25;
user1.gender = 'male';
user1.contacts = {
    email: 'john.doe@gmail.com',
    phone: '+38 (050) 123 4567'
};
user1.address = {
    country: 'Ukraine',
    city: 'Kharkiv',
    street: 'Sumska, 1',
    zip: 61000
};


console.log(user1);
console.log(JSON.stringify(user1));


const user2 = user1;
user2.name = 'Jack';
console.log(user2, user1);

//Клонування одновимірного обєкту

console.log('---- Клонування одновимірного об"єкту за допомогою Object.assign -----');
const user3 = Object.assign(user1);
console.log(user3, user1);


console.log('---- Клонування одновимірного об"єкту за допомогою spread-оператора -----');
const user4 = { ...user1 };
user4.address.city = 'Poltava';

console.log(user4, user1);

//Клонування багатовимірного обєкту

console.log('---- Клонування багатовимірного об"єкту за допомогою structuredClone -----');
const user5 = structuredClone(user1);
console.log(user5, user1);

console.log('---- Клонування багатовимірного об"єкту за допомогою JSON.parse(JSON.stringify) -----');
const user6 = JSON.parse(JSON.stringify(user1));
console.log(user6, user1);

console.log('---- Зміна одного із параметрів вкладеного обєкту у клоні багатовимірного об"єкту -----');

user6.address.city = 'Kyiv';
console.log(user6, user1);

//Виведення ключів та параметрів обєкту за допомогою методів

console.log('---- Виведення ключів об"єкту -----');
const user6Keys = Object.keys(user6);
console.log(user6Keys);

console.log('---- Виведення параметрів об"єкту -----');
const user6Values = Object.values(user6);
console.log(user6Values);

console.log('---- Виведення зв"язки ключів-параметрів об"єкту -----');
const user6Entries = Object.entries(user6);
console.log(user6Entries);


console.log('---- Виведення зв"язки ключів-параметрів об"єкту -----');


//This, constructor

console.log('---- Використання методу This -----');
const user7WIthMetod = structuredClone(user1);
user7WIthMetod.objMethod = function() {
    console.log('objMethod');
    console.log(this);
    console.log(this.name);
};

user7WIthMetod.objMethod();


console.log('---- Використання конструктору об"єктів -----');
function userConstructor(name, address) {
    this.name = name;
    this.address = address;
}

const userFromConstructor = new userConstructor('John', {country: 'Ukraine', city: 'Kyiv', street: 'Khreschatyk, 1'});
console.log(userFromConstructor);

