let numbers : number [] = [5 ,1 ,2 ,8, -5];
numbers.shift();
numbers.pop();
numbers.forEach(element => {
    console.log(element);
});
console.log("*******");
let sum : number = 0;
numbers.push(10);

for(var i of numbers){
    sum+=i;
    console.log(i);
}
console.log(`la somme vaut:${sum}`);
console.log(`taille vaut : ${numbers.length}`);
let average : number = sum / numbers.length;
console.log(`la moyenne vaut: ${average}`);