// tsc --watch ./src/index.ts -t ES6 --expirementalDecorators

// Декоратор класу
function classDecorator(constructor: Function) {
    // console.log('classDecorator called');
}

// Декоратор властивості класу
function propertyDecorator(target: any, propertyKey: string) {
    // console.group('PropertyDecorator');
    // console.log(propertyKey);
    // console.dir(target);
    // console.groupEnd();
}

// Декоратор методу
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
    // Зберігаємо оригінальний метод
    const originalMethod = target;

    // Створюємо новий метод, який замінює оригінальний
    return (target = function (...args: any[]) {
        console.log(`Calling with args: ${args}`);
        return originalMethod.apply(this, args);
    })
}

@classDecorator
class User {
    @propertyDecorator
    private _nickname: string;

    constructor(nickname: string) {
        this._nickname = nickname;
        // console.log('constructor called');
    }

    get nickname(): string {
        return this._nickname;
    }

    set nickname(value: string) {
        this._nickname = value;
    }

    @methodDecorator
    greet(greeting: string): string {
        return `${greeting}, ${this.nickname}!`;
    }
}

const alice = new User('Alice');
console.log(alice.greet('Hello'));

// console.log(alice.nickname); // getter
// alice.nickname = 'Bob'; // setter
// console.log(alice.nickname); // getter