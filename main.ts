class point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        stroke(255);
        strokeWeight(8);
        point(this.x, this.y);
}


}

//1:01:48

class Point {
    x: number;
    y: number;

    draw(){

    }

    getDistance(anothe: Point){

    }
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