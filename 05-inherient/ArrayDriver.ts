import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(8,4,3 );
console.log("*************");
let rec=new Rectangle(15,10,20,10);

let shape1 =new Shape(4,5);

let theShapes : Shape []= [];
//array of shapes
theShapes.push (shape1) ; //assigning a circle to index zero in array
theShapes.push(myCircle);
theShapes.push(rec);
theShapes.forEach((item )=> console.log(item.getInfo()));
