/*

Задача 1

Створіть функцію для обчислення площі прямокутника.
Функція приймає 2 аргументи: ширина і довжина прямокутника

*/

function calculateRectangleArea(length: number, width: number): string {
    return `Площа прямокутника: ${length * width} см2`;
}

// console.log(calculateRectangleArea(5, 3));
// console.log(calculateRectangleArea(10, 5));


/*

Задача 2

Створіть фунцію для створення об'єкта користувача з вказаним ім'ям, віком та роллю

*/

enum Role {
    Admin = 'Адміністратор',
    User = 'Користувач',
    Guest = 'Гість'
}

type User = {
    name: string,
    age: number,
    role: Role
}

function createUser(name: string, age: number, role: Role = Role.Guest): User {
    return {
        name,
        age,
        role
    };
}

const user1 = createUser('Олександр', 30, Role.Admin);
const user2 = createUser('Ірина', 25, Role.User);
const user3 = createUser('Кирило', 44);

// console.log(user1);
// console.log(user2);
// console.log(user3);


/*

Задача 3
Створіть функцію для перевірки пароля на відповідність вимогам.
Перший аргумент - пароль.
Опціонально, додайте другий аргумент - мінімальну довжину пароля.
Використайте у вирішенні задачі саме опціональний аргумент!

*/

function validatePassword(password: string, minLength?: number): boolean {
    if(minLength === undefined) {
        minLength = 6;
    }

    return password.length >= minLength;
}

// console.log(validatePassword('abc'));
// console.log(validatePassword('strongpass', 12));
// console.log(validatePassword('securepassword', 5));


/*

Задача 4.

Напишіть функцію, яка приймає довільну кількість чисел і знаходить їх середнє арифметичне.
Використайте rest оператор

*/

function calculateAverage(...numbers: Array<number>): number {
    if(numbers.length === 0) {
        console.log('Список чисел порожній');
        return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

console.log(calculateAverage(5, 10, 15, 20));
console.log(calculateAverage(2, 4, 6));





/*

Задача на практику


Створіть програму для обчислення вартості замовлення в інтернет-магазині

Декомпозиція

1. Створіть тип даних для представлення товару з назвою та ціною.
2. Напишіть функцію для обчислення загальної вартості замовлення, яка приймає масив товарів як аргумент та повертає загальну суму

Примітка. Перевірте, що масив товарів не порожній, а ціна кожного товару більше нуля

*/