import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(8,4,3 );
console.log("*************");
let rec=new Rectangle(15,10,20,10);



let theShapes : Shape []= [];
//array of shapes
theShapes.push(myCircle);
theShapes.push(rec);
theShapes.forEach((item )=> {
     console.log(item.getInfo());
        console.log(item.calculateArea());
    }
    );
