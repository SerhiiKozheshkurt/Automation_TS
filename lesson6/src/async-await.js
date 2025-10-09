async function getData() {
    const response = await fetch('https://restful-booker.herokuapp.com/booking');
    const json = await response.json();
    console.log(response, response.status, response.statusText);
    return json;
}

function printItemsCount(json) {
    const count = Object.keys(json).length;
    console.log(`Кількість книжок в бібліотеці: ${count}`);
}

(async () => {
    try {
        const data = await getData();
        printItemsCount(data);
    } catch (error) {
        console.log('Сталася помилка!', error);
    }
})();


