/*

Задача: Бібліотека


Створіть абстрактний клас Item.
Поля:
- назва
- кількість сторінок
- кількість на складі

Створіть 2 похідні класи: Book, Magazine.

У клас Book додайте додаткове поле - автор книги.
У клас Magazine додайте додактове поле - видавництво.

Кожен з підкласів має мати метод getItemDetails(), який повертає рядок з інформацією про Item

*/
class Item {
    constructor(title, pages, quantity) {
        this.title = title;
        this.pages = pages;
        this.quantity = quantity;
    }
}
class Book extends Item {
    constructor(title, pages, quantity, author) {
        super(title, pages, quantity);
        this.author = author;
        this.author = author;
    }
    getItemDetails() {
        return `Book: ${this.title}, Pages: ${this.pages}, Author: ${this.author}`;
    }
}
class Magazine extends Item {
    constructor(title, pages, quantity, publisher) {
        super(title, pages, quantity);
        this.publisher = publisher;
        this.publisher = publisher;
    }
    getItemDetails() {
        return `Magazine: ${this.title}, Pages: ${this.pages}, Publisher: ${this.publisher}`;
    }
}
const book = new Book('Book name', 150, 5, 'Book author');
const magazine = new Magazine('Magazine name', 15, 8, 'Magazine publisher');
console.log(book.getItemDetails());
console.log(magazine.getItemDetails());
