var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: 'John',
    email: 'john@example.com',
    password: 'secret'
};
const products = [
    { name: 'Футболка', price: 25, quantity: 10 },
    { name: 'Шорти', price: 30, quantity: 15 },
    { name: 'Носки', price: 5, quantity: 20 }
];
// Просто якась колекція контактів
const contacts = [
    { name: 'John', phone: '123-456-7890' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Mike' }
];
// Функція для створення нового контакту
function createContact(name, phone, email) {
    return {
        name,
        phone,
        email
    };
}
;
const newContact = createContact('Alice', '987-654-3210', 'alice@example.com');
// Колекція груп контактів
const contactsGroup = [
    { name: 'Friends', contacts: [contacts[0]] },
    { name: 'Family', contacts: [contacts[1]] }
];
// Функція, яка додає контакт до групи
function addToGroup(contact, groupName) {
    const group = contactsGroup.find(group => group.name === groupName);
    if (group) {
        group.contacts.push(contact);
    }
    else {
        console.log(`Група ${groupName} не знайдена!`);
    }
}
;
addToGroup(newContact, 'Friends');
addToGroup(contacts[2], 'Family');
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://randomuser.me/api/?results=100');
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    });
}
fetchUsers()
    .then((users) => {
    console.log(users);
});
