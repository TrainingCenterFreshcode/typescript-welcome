enum AccessLevel {
    Guest = 'Гість',
    User = 'Користувач',
    Moderator = 'Модератор',
    Admin = 'Адміністратор'
}

const currentLevel: AccessLevel = AccessLevel.Moderator;

console.log(`Ваш рівень доступу: ${currentLevel}`);