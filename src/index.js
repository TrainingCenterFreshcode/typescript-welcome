const PI = 3.14;
var Geometry;
(function (Geometry) {
    Geometry.PI = 3.1415926535;
    function calculateCircleArea(radius) {
        return Geometry.PI * radius * radius;
    }
    Geometry.calculateCircleArea = calculateCircleArea;
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        distanceToOrigin() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    Geometry.Point = Point;
})(Geometry || (Geometry = {}));
var GeometryNew;
(function (GeometryNew) {
    GeometryNew.PI = 3.14159265358979323846;
})(GeometryNew || (GeometryNew = {}));
console.log('PI: ', GeometryNew.PI);
//console.log(Geometry.calculateCircleArea(5));
// const point = new Geometry.Point(3, 4);
// console.log(point.distanceToOrigin());
