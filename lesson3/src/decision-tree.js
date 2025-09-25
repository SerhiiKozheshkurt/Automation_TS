const age = 29;
const totalOrder = 3500;
const vipCard = true;


if (age < 18) {
    console.log('Ви занадто мододі, щоб купляти спиртні напитки');
} else if (age >= 18 && totalOrder < 2000) {
    console.log('Ви не можете зробити замовлення. Мінімальна сумма замовлення - 2000 грн.');
} else if (age >= 18 && totalOrder >= 2000 && (vipCard > 0 || totalOrder >= 10000)) {
    console.log('На Ваше замовлення застована снижка 7%. Загальна сума замовлення - ' + (totalOrder * 0.93) + ' грн.');
} else {
    console.log('Загальна сума замовлення - ' + (totalOrder) + ' грн.');

}
