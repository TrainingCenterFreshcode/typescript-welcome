/*


Магазин електроніки

Створіть абстрактний клас Product
Поля:
- назва товару
- ціна товару
- кількість товару на складі

Потрібні геттери/сеттери для цих полів


Laptop
- розмір екрану

Smartphone
- роздільна здатність

Кожен з підкласів має мати метод getProductDetails(), який повертає рядок з інформацією про товар

*/

abstract class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    abstract getProductDetails(): string;
}

class Laptop extends Product {
    constructor(name: string, price: number, quantity: number, public screenSize: number) {
        super(name, price, quantity);
        this.screenSize = screenSize;
    }

    getProductDetails(): string {
        return `Laptop: ${this.name}, Price: ${this.price}, Screen size: ${this.screenSize}`;
    }
}

class Smartphone extends Product {
    constructor(name: string, price: number, quantity: number, public resolution: string) {
        super(name, price, quantity);
        this.resolution = resolution;
    }

    getProductDetails(): string {
        return `Smartphone: ${this.name}, Price: ${this.price}, Resolution: ${this.resolution}`;
    }
}

const laptop = new Laptop('Dell XPS 15', 1500, 10, 15.6);
const smartphone = new Smartphone('iPhone 12', 999, 20, '2532x1170');

console.log(laptop.getProductDetails());
console.log(smartphone.getProductDetails());