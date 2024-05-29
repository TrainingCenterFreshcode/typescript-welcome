/*

Задача:

Створіть форму з двома інпутами в яких запитуйте ім'я користувача і його вік.
У формі має бути кнопка "Купити алкоголь".

Відповідно, якщо у користувача вік легальний - ви виводите повідомлення у верстку з повідомленням про те,
що алкоголь купувати дозволено.
Якщо користувач не досягнув відповідного віку - виводите у верстку повідомлення про те,
що алкоголь купувати не дозволено

*/
const form = document.querySelector('#alcohol-form');
const messageDiv = document.querySelector('#message');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const name = nameInput.value;
    const age = Number(ageInput.value);
    if (age >= 18) {
        messageDiv.textContent = `${name}, Вам дозволено купувати алкоголь.`;
    }
    else {
        messageDiv.textContent = `${name}, Вам заборонено купувати алкоголь.`;
    }
});
