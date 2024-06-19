/*

Задача 1

Управління фінансами:
Створіть клас Account для ведення банківського рахунку
Мають бути такі поля:
- balance
- status
- метод додавання коштів
- метод зняття коштів
- метод відображення поточного стану рахунку


*/
class Account {
    constructor(initialBalance) {
        this._balance = initialBalance;
        this.status = 'active';
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (this._balance - amount >= 0) {
            this._balance -= amount;
        }
        else {
            console.log('Insufficient funds');
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
const account = new Account(1000);
// console.log('Initial balance: ', account.balance);
account.balance = 2000;
// console.log('Updated balance: ', account.balance);
account.deposit(400);
account.withdraw(1000);
/*


Управління замовленнями:
Створіть клас Order, що представляє замовлення з полями для
товарів (items),
загальної вартості (total),
статусу замовлення (status)

+ реалізуати методи для додавання товарів,
розрахунку загальної вартості та
відображення інформації про замовлення


*/
class Order {
    constructor() {
        this._items = [];
        this._total = 0;
        this._status = 'pending';
    }
    addItem(item, price) {
        this._items.push(item);
        this._total += price;
    }
    calculateTotal() {
        return this._total;
    }
    getOrderInfo() {
        console.log('Items: ', this._items);
        console.log('Total: ', this._total);
        console.log('Status: ', this._status);
    }
    get items() {
        return this._items;
    }
    get total() {
        return this._total;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
const order = new Order();
order.addItem('Laptop', 10000);
order.addItem('Smartphone', 15000);
order.status = 'done';
order.getOrderInfo();
