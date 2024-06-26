function printValue<T>(value: T): void {
    console.log(`Value: ${value}`);
}

const printValueArrow = <T>(value: T): void => {
    console.log(`Value: ${value}`);
}

// printValueArrow(10);
// printValueArrow('Hello');



function processValue<T extends number | string>(value: T): void {
    if(typeof value === 'number') {
        console.log(`Value is a number: ${value.toFixed(2)}`);
    } else if (typeof value === 'string') {
        console.log(`Value is a string: ${value.toUpperCase()}`);
    }
}

// processValue(10);
// processValue('Hello');



class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const box1 = new Box<number>(10);
const box2 = new Box<string>('Hello');

console.log(typeof box1.getValue());
console.log(typeof box2.getValue());