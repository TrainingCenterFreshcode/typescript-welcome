// Батьківський клас
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        return `${this.name} barks`;
    }
}
const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.makeSound());
