"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(8, 4, 3);
console.log("*************");
var rec = new Rectangle_1.Rectangle(15, 10, 20, 10);
var theShapes = [];
//array of shapes
theShapes.push(myCircle);
theShapes.push(rec);
theShapes.forEach(function (item) {
    console.log(item.getInfo());
    console.log(item.calculateArea());
});
