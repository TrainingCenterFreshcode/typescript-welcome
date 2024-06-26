function printValue(value) {
    console.log(`Value: ${value}`);
}
const printValueArrow = (value) => {
    console.log(`Value: ${value}`);
};
// printValueArrow(10);
// printValueArrow('Hello');
function processValue(value) {
    if (typeof value === 'number') {
        console.log(`Value is a number: ${value.toFixed(2)}`);
    }
    else if (typeof value === 'string') {
        console.log(`Value is a string: ${value.toUpperCase()}`);
    }
}
// processValue(10);
// processValue('Hello');
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const box1 = new Box(10);
const box2 = new Box('Hello');
console.log(typeof box1.getValue());
console.log(typeof box2.getValue());
