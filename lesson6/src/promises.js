// Отримання даних по заданій URL для подальшої перевірки

fetch('https://restful-booker.herokuapp.com/booking')
    .then(response => {
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => {
        console.log('Сталася помилка:', error);
    });


// Запит на ресурс, який повертає JSON та перевикористання цього JSON у іншій функції

function getData() {
    return fetch('https://restful-booker.herokuapp.com/booking')
        .then(response => {
            console.log(response, response.status, response.statusText);
            return response.json();
        })
        .then(json => printItemsCount(json))
        .catch(error => {
            console.log('Сталася помилка:', error);
        });
}

function printItemsCount(json) {
    const count = Object.keys(json).length;
    console.log('-------------------');
    console.log(`Кількість книжок в бібліотеці: ${count}`);
}


getData();
