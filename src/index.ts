const user: { name: string, email: string, password: string } = {
    name: 'John',
    email: 'john@example.com',
    password: 'secret'
};

// console.log(user);


type Product = {
    name: string;
    price: number;
    quantity: number
};

const products: Array<Product> = [
    { name: 'Футболка', price: 25, quantity: 10 },
    { name: 'Шорти', price: 30, quantity: 15 },
    { name: 'Носки', price: 5, quantity: 20 }
];

// console.log(products);


/*

Задача: Контактна книга з можливістю групування контактів

Створіть програму для управління контактами з можливістю створення груп контактів.
Кожен контакт має ім'я та може містити телефон та електронну адресу.
Група контактів - це колекція контактів, які об'єднані за певним критерієм, наприклад, робочі контакти, друзі, родина, тощо


*/

type Contact = {
    name: string;
    phone?: string;
    email?: string;
};

type ContactGroup = {
    name: string,
    contacts: Array<Contact>
};

// Просто якась колекція контактів
const contacts: Array<Contact> = [
    { name: 'John', phone: '123-456-7890' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Mike' }
];

// Функція для створення нового контакту
function createContact(name: string, phone?: string, email?: string): Contact {
    return {
        name,
        phone,
        email
    };
};

const newContact = createContact('Alice', '987-654-3210', 'alice@example.com');

// Колекція груп контактів
const contactsGroup: Array<ContactGroup> = [
    { name: 'Friends', contacts: [ contacts[0] ] },
    { name: 'Family', contacts: [ contacts[1] ] }
];

// Функція, яка додає контакт до групи
function addToGroup(contact: Contact, groupName: string) {
    const group = contactsGroup.find(group => group.name === groupName);
    if(group) {
        group.contacts.push(contact);
    } else {
        console.log(`Група ${groupName} не знайдена!`);
    }
};

addToGroup(newContact, 'Friends');
addToGroup(contacts[2], 'Family');

// console.log(contactsGroup);




// МЕРЕЖЕВИЙ ЗАПИТ

type User = {
    name: {
        first: string;
        last: string;
    };
    email: string;
};

async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch('https://randomuser.me/api/?results=100');
        const data: { results: User[] } = await response.json();

        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

fetchUsers()
.then((users: User[]) => {
    console.log(users);
});