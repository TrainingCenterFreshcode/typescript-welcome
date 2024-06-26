/*

Створити інтерфейс Shape, який містить метод calculateArea().
Потім створити інтерфейси Circle та Rectangle, які розширюють (extends) інтерфейс Shape.

Створити класи з реалізацією кола та прямокутника - CircleImpl та RectangleImpl відповідно.
Реалізувати в класах-імплементаціях метод calculateArea() для обчислення площі кола та прямокутника.

*/

interface Shape {
    calculateArea(): number;
}

interface Circle extends Shape {
    radius: number;
}

interface Rectangle extends Shape {
    width: number;
    height: number;
}

class CircleImpl implements Circle {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class RectangleImpl implements Rectangle {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new CircleImpl(5);
// console.log(circle.calculateArea());

const rectangle = new RectangleImpl(4, 6);
console.log(rectangle.calculateArea());