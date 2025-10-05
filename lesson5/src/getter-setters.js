const userProfile = {
    info: {
        _firstName: 'Іван',
        _lastName: 'Петренко'
    },
    _age: 30,

    get fullName() {
        return `${this.info._firstName} ${this.info._lastName}`;
    },

    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            this.info._firstName = parts[0];
            this.info._lastName = parts[1];
        } else {
            console.error('Потрібно ввести ім’я та прізвище через пробіл');
        }
    },

    // Спроба використання геттера без сеттера

    get age() {
        return this._age;
    },

    set age(value) {
        if (typeof value === 'number' && value > 0) {
            this._age = value;
        } else {
            console.error('Вік має бути додатним числом');
        }
    },

    // Метод для виведення короткої інформації про користувача
    getSummary() {
        return `Користувач: ${this.fullName}, Вік: ${this.age} років.`;
    }
};

// Приклади використання:
console.log(userProfile.getSummary()); // Користувач: Іван Петренко, Вік: 30 років.
userProfile.fullName = 'Тарас Шевченко';
userProfile.age = 35;
console.log(userProfile.getSummary()); // Користувач: Тарас Шевченко, Вік: 35 років.

