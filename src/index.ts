/*


Створіть простір імен MathFunctions, який містить функції для розрахунку площі кола та площі прямокутника.
Додайте також коснтанту PI, яка має числове значення 3.14.
Протестуйте, щоб все працювало.



*/

namespace MathFunctions {
    export const PI = 3.14;

    export function calculateCircleArea(radius: number): number {
        return PI * radius ** 2;
    }

    export function calculateRectangleArea(width: number, height: number): number {
        return width * height;
    }
}

// console.log(MathFunctions.calculateCircleArea(3));
console.log(MathFunctions.calculateRectangleArea(3, 4));