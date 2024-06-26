/*

Створіть клас Stack, який реалізує стек.
Методи push та pop мають додавати та видаляти елементи зі стеку відповідно.
Використайте generic-тип, щоб стек міг зберігати елементи будь-якого типу.


*/

class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // далі методи push та pop

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop());

stringStack.push('Hello');
stringStack.push('World');
