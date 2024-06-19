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


abstract class Item {
    constructor(public title: string, public pages: number, public quantity: number) {}

    abstract getItemDetails(): string;
}

class Book extends Item {
    constructor(title: string, pages: number, quantity: number, public author: string) {
        super(title, pages, quantity);
        this.author = author;
    }

    getItemDetails(): string {
        return `Book: ${this.title}, Pages: ${this.pages}, Author: ${this.author}`;
    }
}


class Magazine extends Item {
    constructor(title: string, pages: number, quantity: number, public publisher: string) {
        super(title, pages, quantity);
        this.publisher = publisher;
    }

    getItemDetails(): string {
        return `Magazine: ${this.title}, Pages: ${this.pages}, Publisher: ${this.publisher}`;
    }
}


const book = new Book('Book name', 150, 5, 'Book author');
const magazine = new Magazine('Magazine name', 15, 8, 'Magazine publisher');

console.log(book.getItemDetails());
console.log(magazine.getItemDetails());