interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

const user1: User = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
}

// extends

interface Animal {
    nickname: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

const Tuzik: Dog = {
    nickname: 'Tuzik',
    age: 3,
    breed: 'Labrador'
}

// impements

interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

class Post implements Printable, Loggable {
    content: string;
    
    constructor(content: string) {
        this.content = content;
    }

    print() {
        console.log(this.content);
    }

    log() {
        console.log(`Log: ${this.content}`);
    }
}

const post = new Post('Hello world');
// post.print();
post.log();
