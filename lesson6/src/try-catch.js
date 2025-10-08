async function getData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/t'); // Спроба запиту сервіс, який не віддає json
        if (!response1.ok) {
            throw new Error('Сервер https://jsonplaceholder.typicode.com/ недоступний');
        } else {
            const json1 = await response1.json();
            console.log('Дані з сервера https://jsonplaceholder.typicode.com/:', json1);
        }
    } catch (error1) {
        console.log(error1.message);
        try {
            const response2 = await fetch('https://restful-booker.herokuapp.com/booking');
            if (!response2.ok) {
                throw new Error('Хибна відповідь від сервера https://restful-booker.herokuapp.com/booking!');
            } else {
                const json2 = await response2.json();
                console.log('Дані з сервера https://restful-booker.herokuapp.com/booking:', json2);
            }
        } catch (error2) {
            console.log(error2.message);
            throw new Error('Всі сервери недоступні або повертають некоректні дані!');
        }
    }
}

getData();
