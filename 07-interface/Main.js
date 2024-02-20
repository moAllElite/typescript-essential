"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var cc = new CricketCoach_1.CricketCoach();
var gc = new GolfCoach_1.GolfCoach();
console.log(cc.getDailyWorkout());
console.log(gc.getDailyWorkout());
