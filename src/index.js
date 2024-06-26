/*

Створити інтерфейс Shape, який містить метод calculateArea().
Потім створити інтерфейси Circle та Rectangle, які розширюють (extends) інтерфейс Shape.

Створити класи з реалізацією кола та прямокутника - CircleImpl та RectangleImpl відповідно.
Реалізувати в класах-імплементаціях метод calculateArea() для обчислення площі кола та прямокутника.

*/
class CircleImpl {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class RectangleImpl {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new CircleImpl(5);
// console.log(circle.calculateArea());
const rectangle = new RectangleImpl(4, 6);
console.log(rectangle.calculateArea());
