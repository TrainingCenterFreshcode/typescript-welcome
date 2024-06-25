/*


Створіть простір імен MathFunctions, який містить функції для розрахунку площі кола та площі прямокутника.
Додайте також коснтанту PI, яка має числове значення 3.14.
Протестуйте, щоб все працювало.



*/
var MathFunctions;
(function (MathFunctions) {
    MathFunctions.PI = 3.14;
    function calculateCircleArea(radius) {
        return MathFunctions.PI * Math.pow(radius, 2);
    }
    MathFunctions.calculateCircleArea = calculateCircleArea;
    function calculateRectangleArea(width, height) {
        return width * height;
    }
    MathFunctions.calculateRectangleArea = calculateRectangleArea;
})(MathFunctions || (MathFunctions = {}));
// console.log(MathFunctions.calculateCircleArea(3));
console.log(MathFunctions.calculateRectangleArea(3, 4));
