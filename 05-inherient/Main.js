"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myCircle = new Circle_1.Circle(8, 4, 3);
console.log(myCircle.getInfo());
console.log("*************");
var rec = new Rectangle_1.Rectangle(15, 10, 20, 10);
console.log(rec.getInfo());
var shape1 = new Shape_1.Shape(4, 5);
var theShapes = [];
//array of shapes
theShapes.push(shape1); //assigning a circle to index zero in array
theShapes.push(myCircle);
theShapes.push(rec);
theShapes.forEach(function (item) { return console.log(item); });
