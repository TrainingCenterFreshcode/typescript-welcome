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
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Laptop extends Product {
    constructor(name, price, quantity, screenSize) {
        super(name, price, quantity);
        this.screenSize = screenSize;
        this.screenSize = screenSize;
    }
    getProductDetails() {
        return `Laptop: ${this.name}, Price: ${this.price}, Screen size: ${this.screenSize}`;
    }
}
class Smartphone extends Product {
    constructor(name, price, quantity, resolution) {
        super(name, price, quantity);
        this.resolution = resolution;
        this.resolution = resolution;
    }
    getProductDetails() {
        return `Smartphone: ${this.name}, Price: ${this.price}, Resolution: ${this.resolution}`;
    }
}
const laptop = new Laptop('Dell XPS 15', 1500, 10, 15.6);
const smartphone = new Smartphone('iPhone 12', 999, 20, '2532x1170');
console.log(laptop.getProductDetails());
console.log(smartphone.getProductDetails());
