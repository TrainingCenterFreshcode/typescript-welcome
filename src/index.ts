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
    private _balance: number;
    public status: string;
    
    constructor(initialBalance: number) {
        this._balance = initialBalance;
        this.status = 'active';
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if(this._balance - amount >= 0) {
            this._balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }

    public get balance(): number {
        return this._balance;
    }

    public set balance(value: number) {
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
    private _items: string[];
    private _total: number;
    private _status: string;

    constructor() {
        this._items = [];
        this._total = 0;
        this._status = 'pending';
    }

    public addItem(item: string, price: number): void {
        this._items.push(item);
        this._total += price;
    }

    public calculateTotal(): number {
        return this._total;
    }

    public getOrderInfo(): void {
        console.log('Items: ', this._items);
        console.log('Total: ', this._total);
        console.log('Status: ', this._status);
    }

    public get items(): string[] {
        return this._items;
    }

    public get total(): number {
        return this._total;
    }

    public get status(): string {
        return this._status;
    }

    public set status(value: string) {
        this._status = value;
    }
}

const order = new Order();
order.addItem('Laptop', 10000);
order.addItem('Smartphone', 15000);
order.status = 'done';

order.getOrderInfo();