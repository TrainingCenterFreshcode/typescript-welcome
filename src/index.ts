/*

Задача на практику


Створіть програму для обчислення вартості замовлення в інтернет-магазині

Декомпозиція

1. Створіть тип даних для представлення товару з назвою та ціною.
2. Напишіть функцію для обчислення загальної вартості замовлення, яка приймає масив товарів як аргумент та повертає загальну суму

Примітка. Перевірте, що масив товарів не порожній, а ціна кожного товару більше нуля

*/

type Product = {
    name: string;
    price: number;
}

function calculateOrderTotal(products: Array<Product>): number {
    if(products.length === 0) {
        console.log('Замовлення порожнє');
        return 0;
    }

    let total = 0;
    for(const product of products) {
        if(product.price <= 0) {
            console.log(`Некоректна ціна для товару "${product.name}"`);
            continue;
        }
        total += product.price;
    }

    return total;
}

const products: Array<Product> = [
    { name: 'Футболка', price: 25 },
    { name: 'Шорти', price: 30 },
    { name: 'Носки', price: -5 } // Некоректна ціна
];

const orderTotal = calculateOrderTotal(products);
console.log(orderTotal);