export class Point {
    private x: number;
    private y: number;


}
/*
let drawPoint = (point: Point) => {
    console.log(point.x, point.y);
}

let getDistance = (pointA: Point, pointB: Point) => {
    console.log(pointA.x - pointB.x, pointA.y - pointB.y);
}

drawPoint({ x: 1, y: 2 });
*/

export class point{
    constructor(private _x?: number, private _y?: number){
        // this.x = x;
        // this.y = y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(value){
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(anothe: Point){

    }
}