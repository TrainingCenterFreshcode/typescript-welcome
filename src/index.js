/*

Задача 1.
Дано масив чисел.
Перебрати масив, знайти найбільше число

*/
const numbers = [4, 2, 7, 1, 9, 5];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
// console.log('Найбільший елемент масиву: ', maxNumber);
/*

Задача 2.
Дано масив чисел.
Знайти середнє значення у цьому масиві чисел.

*/
const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers2) {
    sum += num; // sum = sum + num
}
const average = sum / numbers2.length;
// console.log('Середнє значення чисел у масиві: ', average);
/*

Задача 3.
Дано масив чисел.
Знайти перше від'ємне число у масиві.

*/
const numbers3 = [10, -20, 30, -40, 50];
let firstNegative;
for (let num of numbers3) {
    if (num < 0) {
        firstNegative = num;
        break;
    }
}
const item = { name: 'Футболка', price: 20 };
const discount = 10; // 10% знижки
const discountAmount = (discount / 100) * item.price;
const totalCost = item.price - discountAmount;
const John = { name: 'John', hourlyRate: 10 };
const JohnAmount = John.hourlyRate * 40; // сумма зарплати, яку ми маємо виплатити Джону
const invoice = { name: John.name, amount: JohnAmount };
const books = [
    { title: 'Грокаємо алгоритми', author: 'Адітья Бхаргва', price: 25 },
    { title: 'Мова програмування С++', author: 'Бьерн Страуструп', price: 20 },
    { title: 'Гаррі Поттер і філософський камінь', author: 'Джоан Роулінг', price: 10 }
];
for (let book of books) {
    console.log(`Книга: ${book.title}. Автор: ${book.author}. Ціна: ${book.price}$`);
}
