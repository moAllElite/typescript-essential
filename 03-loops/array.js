var numbers = [5, 1, 2, 8, -5];
numbers.shift();
numbers.pop();
numbers.forEach(function (element) {
    console.log(element);
});
console.log("*******");
var sum = 0;
numbers.push(10);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    sum += i;
    console.log(i);
}
console.log("la somme vaut:".concat(sum));
console.log("taille vaut : ".concat(numbers.length));
var average = sum / numbers.length;
console.log("la moyenne vaut: ".concat(average));
