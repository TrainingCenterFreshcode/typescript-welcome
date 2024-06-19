/*

Управління автомобілем:
Створіть клас Car, що представляє автомобіль з полями:
- виробник (manufacturer),
- поточна швидкість (speed),
- максимальна швидкість (maxSpeed)
Методи:
- прискорення
- сповільнення
- відображення швидкості


*/
class Car {
    constructor(manufacturer, maxSpeed) {
        this._speed = 0;
        this._manufacturer = manufacturer;
        this._maxSpeed = maxSpeed;
    }
    accelerate(speedDelta) {
        if (this._speed + speedDelta <= this._maxSpeed) {
            this._speed += speedDelta;
        }
        else {
            this._speed = this._maxSpeed;
        }
    }
    decelerate(speedDelta) {
        if (this._speed - speedDelta >= 0) {
            this._speed -= speedDelta;
        }
        else {
            this._speed = 0;
        }
    }
    get speed() {
        return this._speed;
    }
    get manufacturer() {
        return this._manufacturer;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set manufacturer(value) {
        this._manufacturer = value;
    }
}
const car = new Car('Toyota', 200);
car.accelerate(60);
car.accelerate(40);
car.decelerate(50);
car.decelerate(50);
console.log(car.speed);
