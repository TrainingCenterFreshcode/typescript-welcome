/*

1.

Partial<Type> - створює тип, у якому всі властивості Type є необов'язковими

*/

interface User {
    id: number;
    name: string;
    age: number;
}

const updateUser = (user: Partial<User>) => {
    // тут може бути якась робота
}

updateUser({ id: 1, name: 'Alice', age: 30 }); // valid
updateUser({ id: 2, name: 'John' }); // valid


/*

2.

Required<Type> - створює тип, у якому всі властивості Type є обов'язковими

*/

interface User2 {
    id?: number;
    name?: string;
    age?: number;
}

const createUser = (user: Required<User2>) => {
    // тут може бути якась робота
}

createUser({ id: 1, name: 'Allice' }); // not valid


/*

3.

Readonly<Type> - створює тип, у якому всі вастивості Type є доступними лише для читання

*/

interface User3 {
    id: number;
    name: string;
}

const user: Readonly<User3> = { id: 1, name: 'Alice' };

console.log(user.id); // valid
user.id = 2; // not valid


/*

4.

Record<Keys, Type> - створює тип об'єкта з властивостями Keys, які мають тип Type

*/

type Role = 'admin' | 'user' | 'guest';

const roles: Record<Role, string> = {
    admin: 'Administartor',
    user: 'Regular User',
    guest: 'Guest User'
}


/*

5.

Pick<Type, Keys> - створює тип, що включає підмножину властивостей Type

*/

interface User4 {
    id: number;
    name: string;
    age: number;
}

const user2: Pick<User4, 'id' | 'name'> = { id: 1, name: 'Alice' };


/*


6.

Omit<Type, Keys> - створює тип, що виключає деякі властивості Type. Працює протилежно утиліті Pick


*/

const user3: Omit<User4, 'age'> = { id: 1, name: 'John' };


/*

7.

Exclude<UnionType, ExcludedMembers> - створює тип, що виключає деякі елементи з UnionType

*/

type status = 'success' | 'error' | 'loading';

type nonLoadingStatus = Exclude<status, 'loading'>;


/*

8.

Extract<UnionType, MemberType> - створює тип, який включає тільки ті елементи з UnionType, які також присутні в MemberType
Extract дозволяє витягти типи, які є спільними між двома об'єднаннями (union types)

*/


type mixedTypes = string | number | boolean;
type onlyStrings = Extract<mixedTypes, string>;

const example1: onlyStrings = 'Hello TS Utility Types'; // valid
const example2: onlyStrings = 42; // not valid
const example3: onlyStrings = true; // not valid

/*

9. ReturnType<Type> - створює тип, що представляє тип значення, яке повертає функція Type
Тобто, ReturnType дозволяє отримати тип значення, яке повертає функція. 

*/

function createUser2() {
    return {
        id: 1,
        name: 'Alice',
        age: 25
    }
}

// Використовуємо ReturnType, щоб отримтаи тип, який повертає функція createUser2
type User5 = ReturnType<typeof createUser2>;

const userTypeTest: User5 = {
    id: 16,
    name: 'William',
    age: 33
}