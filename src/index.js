/*

Створіть клас Stack, який реалізує стек.
Методи push та pop мають додавати та видаляти елементи зі стеку відповідно.
Використайте generic-тип, щоб стек міг зберігати елементи будь-якого типу.


*/
class Stack {
    constructor() {
        this.items = [];
    }
    // далі методи push та pop
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
const stringStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
stringStack.push('Hello');
stringStack.push('World');
