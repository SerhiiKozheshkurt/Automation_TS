async function getData() {
    try {
        const response = await fetch('https://restful-booker.herokuapp.com/booking');
        const json = await response.json();
        console.log(response.status, response.statusText);
        printItemsCount(json);
    } catch (error) {
        console.log('Сталася помилка:', error);
    }
}

function printItemsCount(json) {
    const count = Object.keys(json).length;
    console.log(`Кількість книжок в бібліотеці: ${count}`);
}

getData();
