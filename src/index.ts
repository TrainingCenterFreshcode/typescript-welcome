const PI = 3.14;

namespace Geometry {
    export const PI = 3.1415926535;

    export function calculateCircleArea(radius: number): number {
        return PI * radius * radius;
    }

    export class Point {
        constructor(public x: number, public y: number) {}

        distanceToOrigin(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

namespace GeometryNew {
    export const PI = 3.14159265358979323846;
}

console.log('PI: ', GeometryNew.PI);
//console.log(Geometry.calculateCircleArea(5));
// const point = new Geometry.Point(3, 4);
// console.log(point.distanceToOrigin());