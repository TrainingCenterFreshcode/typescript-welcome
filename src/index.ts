/*

Задача: Список студентів і найкращий студент

Створіть программу для університету, яка відображатиме інформацію про студентів
та знаходитиме студента з найвищим середнім балом.

Декомпозиція.

+ 1. Створіть тип даних Student, який містить ім'я студента (name), курс (course), середній бал (averageGrade)
+ 2. Створіть масив students, що містить об'єкти типу Student з даними про студентів.
+ 3. Обчисліть середній бал серед усіх студентів та виведіть його у консоль.
+ 4. Знайдіть студента з найвищим середнім балом та виведіть його дані у консоль.

*/

type Student = {
    name: string;
    course: number;
    averageGrade: number
};

const students: Student[] = [
    { name: 'Марія', course: 2, averageGrade: 4.5 },
    { name: 'Іван', course: 3, averageGrade: 4.1 },
    { name: 'Олександр', course: 1, averageGrade: 4.8 }
];

let totalAverage: number = 0; // загальний середній бал
let highestAverageStudent: Student | null = null; // студент з найвищим середнім балом
let highestAverage: number = 0; // найвищий середній бал

let sum: number = 0;
for(let student of students) {
    sum += student.averageGrade;

    if(student.averageGrade > highestAverage) {
        highestAverage = student.averageGrade;
        highestAverageStudent = student;
    }
}
totalAverage = sum / students.length;

console.log(`Середній бал серед усіх студентів: ${totalAverage}`);
if(highestAverageStudent !== null) {
    console.log(`Студент з найвищим середнім балом: `, highestAverageStudent);
} else {
    console.log('Студент з найвищим середнім балом не знайдений!');
}