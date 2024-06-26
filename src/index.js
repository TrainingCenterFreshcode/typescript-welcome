const user1 = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
};
const Tuzik = {
    nickname: 'Tuzik',
    age: 3,
    breed: 'Labrador'
};
class Post {
    constructor(content) {
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
