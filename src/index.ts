// Батьківський клас

abstract class Animal {
    constructor(
        public name: string
    ) {}

    abstract makeSound(): string;
}

class Dog extends Animal {
    breed: string; // Власне поле класу Dog

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): string {
        return `${this.name} barks`;
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');

console.log(dog.makeSound());