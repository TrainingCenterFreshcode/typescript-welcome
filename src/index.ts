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
    private _manufacturer: string;
    private _speed: number;
    private readonly _maxSpeed: number;

    constructor(manufacturer: string, maxSpeed: number) {
        this._speed = 0;
        this._manufacturer = manufacturer;
        this._maxSpeed = maxSpeed;
    }

    public accelerate(speedDelta: number): void {
        if(this._speed + speedDelta <= this._maxSpeed) {
            this._speed += speedDelta;
        } else {
            this._speed = this._maxSpeed;
        }
    }

    public decelerate(speedDelta: number): void {
        if(this._speed - speedDelta >= 0) {
            this._speed -= speedDelta;
        } else {
            this._speed = 0;
        }
    }

    public get speed(): number {
        return this._speed;
    }

    public get manufacturer(): string {
        return this._manufacturer;
    }

    public get maxSpeed(): number {
        return this._maxSpeed;
    }

    public set manufacturer(value: string) {
        this._manufacturer = value;
    }
}

const car = new Car('Toyota', 200);

car.accelerate(60);
car.accelerate(40);
car.decelerate(50);
car.decelerate(50);

console.log(car.speed);
